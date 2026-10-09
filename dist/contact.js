import {deliverContact} from './contact-delivery.js';

const dialog = document.querySelector('#contact-dialog');
const dialogForm = dialog?.querySelector('form');

document.querySelectorAll('[data-contact-subject]').forEach(link => {
  link.addEventListener('click', event => {
    if (!dialog?.showModal || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (dialogForm.getAttribute('aria-busy') !== 'true') {
      dialogForm.elements.subject.value = link.dataset.contactSubject;
      dialogForm.querySelector('.form-status').textContent = '';
    }
    dialog.showModal();
    document.body.classList.add('dialog-open');
    dialogForm.elements.email.focus();
  });
});
dialog?.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog?.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});

const inlineForm = document.querySelector('#contact-page-form');
const initialSubject = new URLSearchParams(location.search).get('konu');
if (inlineForm && initialSubject) inlineForm.elements.subject.value = initialSubject.slice(0, 200);

document.querySelectorAll('.contact-form').forEach(form => {
  const status = form.querySelector('.form-status');
  const submit = form.querySelector('button[type="submit"]');
  const fields = form.querySelector('fieldset');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (form.getAttribute('aria-busy') === 'true') return;
    for (const name of ['email', 'subject', 'message']) {
      const field = form.elements[name];
      field.value = field.value.trim();
      field.setCustomValidity(field.value.length < (name === 'message' ? 10 : name === 'subject' ? 3 : 1) ? 'Lütfen bu alanı eksiksiz doldurun.' : '');
    }
    if (!form.reportValidity()) return;
    if (form.elements._honey.value) return;
    const payload = Object.fromEntries(new FormData(form));
    payload._subject = `BMS İletişim | ${payload.subject.replace(/[\r\n]/g, ' ')}`;
    form.setAttribute('aria-busy', 'true');
    fields.disabled = true;
    submit.textContent = 'Gönderiliyor…';
    status.dataset.state = 'pending';
    status.textContent = 'İletiniz gönderiliyor, lütfen bekleyin.';
    try {
      const result = await deliverContact(form.dataset.endpoint, payload);
      if (result === 'activation-required') {
        status.dataset.state = 'error';
        status.textContent = 'İletişim formunun e-posta doğrulaması henüz tamamlanmadı. Lütfen daha sonra tekrar deneyin.';
      } else {
        status.dataset.state = 'success';
        status.textContent = 'Talebiniz alındı. Sizinle e-posta adresiniz üzerinden iletişime geçeceğiz.';
        const subject = form.elements.subject.value;
        form.reset();
        form.elements.subject.value = subject;
      }
    } catch (error) {
      status.dataset.state = 'error';
      status.textContent = error.name === 'AbortError'
        ? 'Gönderim yanıtı alınamadı. İletinizin ulaştığı doğrulanamadı; bilgileriniz bu formda korunuyor.'
        : 'İletiniz gönderilemedi. Lütfen bağlantınızı kontrol ederek tekrar deneyin. Yazdıklarınız bu formda korunuyor.';
    } finally {
      form.setAttribute('aria-busy', 'false');
      fields.disabled = false;
      submit.textContent = 'İletiyi gönder';
    }
  });
  form.addEventListener('input', event => event.target.setCustomValidity?.(''));
});
