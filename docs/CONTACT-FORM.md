# Contact form setup

The contact page and service dialogs use the shared form component in `src/components.mjs`.
Service links continue to prefill the editable subject and retain their contact-page fallback URL.

## Netlify setup

The published HTML declares `bms-iletisim` and `bms-iletisim-pencere` as Netlify Forms.
Each declaration includes an explicit `form-name` field and the `_honey` honeypot.
The browser posts URL-encoded fields to `/`. The `email` field supplies Reply-To.

In the corporate Netlify project, enable form detection before deploying.
Configure an email notification for all forms with recipient `info@bmskalite.com`.
Confirm the recipient if Netlify requests email confirmation.
The notification recipient is configured in Netlify.

Build and verify from this project directory:

```sh
npm run build
npm run check
npm test
```

Upload the generated `dist` directory to the corporate Netlify project.
The HTML loads `contact-netlify-v1.js`, which imports `contact-netlify-delivery-v1.js`.
The build removes the two obsolete form scripts from `dist`.

## Verification

On the published contact page, `document.querySelector('#contact-page-form').dataset.endpoint`
must return `/`. The form explanation names Netlify.
Verify the contact-page form and one service dialog against the project's submissions list
and the recipient's actual inbox.

An HTTP acknowledgement reports acceptance by the form service.
Inbox delivery depends on the notification configuration, spam classification and mail delivery.
Test messages may appear in the Netlify spam list.

The automated tests cover UTF-8 fields, explicit form identity, duplicate-send prevention,
HTTP/network failures, login redirects, timeout and preservation of entered text after failure.
They use an injected transport. Production delivery is verified separately.
