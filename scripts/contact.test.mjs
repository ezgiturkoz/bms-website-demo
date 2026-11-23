import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import {deliverContact} from '../public/contact-netlify-delivery-v1.js';

const payload = {
  'form-name': 'bms-iletisim',
  email: 'visitor@example.com',
  subject: 'Eğitim & kalite',
  message: 'Türkçe iletişim formu test iletisi. Şğüıöç.'
};

test('sends form identity and UTF-8 fields as URL-encoded data', async () => {
  const result = await deliverContact('/', payload, {
    fetchImpl: async (url, options) => {
      assert.equal(url, '/');
      assert.equal(options.method, 'POST');
      assert.equal(options.headers['Content-Type'], 'application/x-www-form-urlencoded');
      assert.deepEqual(Object.fromEntries(new URLSearchParams(options.body)), payload);
      return {ok: true, status: 200};
    }
  });
  assert.equal(result, 'accepted');
});

test('rejects old endpoints and missing form names before making a request', async () => {
  const fetchImpl = () => assert.fail('Invalid form must not be sent');
  await assert.rejects(deliverContact('https://formsubmit.co/ajax/test@example.com', payload, {fetchImpl}));
  await assert.rejects(deliverContact('/', {email: payload.email}, {fetchImpl}));
});

test('HTTP and network errors preserve the failure outcome', async () => {
  for (const status of [404, 429, 500]) {
    await assert.rejects(deliverContact('/', payload, {
      fetchImpl: async () => ({ok: false, status})
    }));
  }
  await assert.rejects(deliverContact('/', payload, {
    fetchImpl: async () => { throw new TypeError('Network unavailable'); }
  }));
});

test('an external login redirect is not a submission acknowledgement', async t => {
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'location');
  Object.defineProperty(globalThis, 'location', {configurable: true, value: new URL('https://www.bmskalite.com/')});
  t.after(() => {
    if (previous) Object.defineProperty(globalThis, 'location', previous);
    else delete globalThis.location;
  });
  await assert.rejects(deliverContact('/', payload, {
    fetchImpl: async () => ({ok: true, url: 'https://app.netlify.com/edge-access'})
  }));
});

test('slow requests abort', async () => {
  await assert.rejects(deliverContact('/', payload, {
    timeoutMs: 10,
    fetchImpl: (_url, {signal}) => new Promise((_resolve, reject) => {
      signal.addEventListener('abort', () => reject(new DOMException('Timed out', 'AbortError')));
    })
  }), {name: 'AbortError'});
});

for (const formName of ['bms-iletisim', 'bms-iletisim-pencere']) {
  for (const accepted of [true, false]) {
    test(formName + ' retains failed drafts and prevents duplicate sends (' + accepted + ')', async () => {
      const handlerSource = (await readFile(new URL('../public/contact-netlify-v1.js', import.meta.url), 'utf8'))
        .replace(/^import[^\n]*\n/, '');
      const elements = Object.fromEntries(Object.entries({...payload, _honey: ''})
        .map(([name, value]) => [name, {value, setCustomValidity() {}}]));
      const status = {dataset: {}};
      const fieldset = {disabled: false};
      const button = {};
      const attributes = {};
      const handlers = {};
      const form = {
        name: formName,
        elements,
        dataset: {endpoint: '/'},
        getAttribute: name => attributes[name],
        setAttribute: (name, value) => { attributes[name] = value; },
        reportValidity: () => true,
        reset: () => { elements.message.value = ''; },
        addEventListener: (type, handler) => { handlers[type] = handler; },
        querySelector: selector => ({fieldset, '.form-status': status})[selector] || button
      };
      let requests = 0;
      vm.runInNewContext(handlerSource, {
        document: {
          querySelector: () => null,
          querySelectorAll: selector => selector === '.contact-form' ? [form] : []
        },
        location: new URL('https://www.bmskalite.com/iletisim/'),
        URLSearchParams,
        FormData: class extends Map {
          constructor() {
            assert.equal(fieldset.disabled, false, 'Read fields before disabling them');
            super(Object.entries(elements).map(([name, field]) => [name, field.value]));
          }
        },
        deliverContact: (endpoint, data) => deliverContact(endpoint, data, {
          fetchImpl: async (_url, options) => {
            requests++;
            const sent = new URLSearchParams(options.body);
            assert.equal(sent.get('form-name'), formName);
            assert.equal(sent.get('message'), payload.message);
            assert.equal(sent.get('email'), payload.email);
            return {ok: accepted, status: accepted ? 200 : 404};
          }
        })
      });
      const event = {preventDefault() {}};
      const first = handlers.submit(event);
      await handlers.submit(event);
      await first;
      assert.equal(requests, 1);
      assert.equal(status.dataset.state, accepted ? 'success' : 'error');
      assert.equal(elements.message.value, accepted ? '' : payload.message);
      assert.equal(elements.subject.value, payload.subject);
      assert.equal(fieldset.disabled, false);
      assert.equal(attributes['aria-busy'], 'false');
    });
  }
}
