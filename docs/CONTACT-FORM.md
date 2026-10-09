# Contact form setup

The inline contact-page form and service dialogs use the same component and delivery handler. The 16 consulting, 34 training and 5 certification consultancy entries each prefill their own subject. A normal contact-page link with `?konu=...#iletisim-formu` is retained when dialogs are unavailable. Submitted subjects remain editable.

## Current recipient

`src/contact-config.mjs` sets the approved company recipient to `info@bmskalite.com`, at the owner's request. The same address appears as the public company email in `src/content.mjs`, alongside the approved phone number `+90 505 371 02 81`. The destination is visible in the form endpoint, as required by this provider's email-address integration; it is not a credential. On 9 October 2026 the owner activated this recipient and confirmed inbox receipt of test `BMS-20261009-02` from the local review form. Repeat the delivery check after moving to the final hosting origin.

To change the recipient in future:

1. Change `contactRecipient` in `src/contact-config.mjs`.
2. Run `npm run build`, `npm run check` and `npm test`.
3. Submit a test from the intended review/demo origin. Open the provider's activation email in the destination mailbox and confirm the form. Check spam if necessary.
4. Submit another approved test after activation and verify actual inbox delivery and Reply-To. Do not assume an HTTP acknowledgement means inbox delivery.
5. Repeat the smoke check when moving to the demo or final domain. Publish only after the owner approves that stage.

## Delivery and dependencies

- Provider: [FormSubmit](https://formsubmit.co/documentation). There is no account API key, password, backend function or platform-specific SDK in the source.
- JavaScript submits JSON to `https://formsubmit.co/ajax/{recipient}`. Without JavaScript, the form posts normally to `https://formsubmit.co/{recipient}`.
- The visitor's `email` field supplies Reply-To. The selected subject becomes the email subject prefixed with `BMS İletişim |`. The body includes the subject and message; `_template=table` selects a readable email layout.
- FormSubmit requires destination activation. It controls email delivery, availability and filtering. Provider documentation states that submission records are kept for 30 days. The page identifies the external delivery provider. Review the company's data-processing requirements before public launch; no invented legal approval or compliance claim is included.
- Native required/email/length validation, duplicate-submit prevention, a honeypot, loading feedback, a 20-second request timeout, honest activation/error states and draft preservation on failure are included. Provider CAPTCHA is not explicitly disabled. The provider must enforce server-side validation and abuse protection; client validation alone is not an anti-spam boundary.
- No drafts or email addresses are written to browser storage. Dialog drafts remain in memory only until refresh/navigation or a successful submission.
- Generated `_headers` allows FormSubmit in `connect-src` and `form-action`. Hosts that do not support `_headers` need equivalent policies if they enforce a CSP. `vercel.json` is unchanged.
- All assets and output remain static and portable to Vercel or Sites. No deployment is performed by the form setup.

## Tests

`npm test` verifies delivery response handling with an injected fake transport: boolean/string success, activation, HTTP/provider rejection, invalid JSON, network failure and timeout. These tests do **not** send email or prove inbox delivery. Browser checks cover subject prefilling, native validation, dialog keyboard dismissal/focus and responsive layouts. Actual activation and delivery status are recorded in `VALIDATION.md`.
