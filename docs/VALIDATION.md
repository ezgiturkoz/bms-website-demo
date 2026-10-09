## Search indexing preparation — 9 October 2026

- Owner authorized removing the review indexing restriction and confirmed `https://www.bmskalite.com` as the primary origin. Source defaults in `src/publication.mjs` now select production; existing environment overrides still take precedence, with recognized Vercel non-production environments always non-indexable.
- Built and checked both a Vercel preview and an explicit review configuration: all seven routes retain noindex, robots disallow and the generated noindex header. Rebuilt the final saved output with production defaults afterward.
- Verified all seven production pages contain `index,follow`, have canonical and Open Graph URLs on the approved origin, and contain no noindex directive. robots.txt allows crawling and links the approved sitemap. The sitemap contains exactly the seven valid page URLs. The generated production headers no longer contain X-Robots-Tag.
- Existing seven-route/catalogue/link checks passed. `vercel.json` remains unchanged (SHA-256 `1315E68D24CDC390B8B91B2BA238131B6EEDC76AE27D70941357F7C5EF8A02D0`).
- No GitHub push, hosting settings change, DNS change or deployment occurred. Live HTTP headers, domain routing and Google indexing must be checked after the owner publishes this version. Local indexability is not proof of live publication or Google inclusion.

## Company mailbox delivery test — 9 October 2026

Confirmed: the owner activated the company recipient and confirmed that the subsequent test arrived in the inbox (not spam). The submission through the inline form used subject `BMS iletişim formu testi` and code `BMS-20261009-02`; it returned the accepted/success state and cleared the message field. Real delivery to `info@bmskalite.com` from the local review form is verified. Repeat the delivery check on the final hosting origin after deployment; future inbox placement is not guaranteed by one successful test. Screenshot: `outputs/review/company-mail-test-accepted.png` outside the repository.

Initial attempt: the owner explicitly authorized a real delivery test to `info@bmskalite.com`. The first submission used that company address as the reply email, subject `BMS iletişim formu testi`, and code `BMS-20261009-01`. It returned the activation-required state and retained the draft. The owner then completed activation before the successful test above. No automatic retries were sent. Screenshot: `outputs/review/company-mail-activation-required.png` outside the repository.

## Training and certification card layout — 9 October 2026

- Build and existing static checks passed: all 7 routes, 34 trainings, 5 certification consultancy entries and 55 service contact links remain available.
- Browser checks confirmed two columns at 1366px and 768px, one column at 390px and 320px, and no horizontal overflow on either changed catalogue.
- Closed cards show their description. Clicking a card reveals its compact contact action. Keyboard Enter closes an expanded training card while retaining its description.
- Both a training and certification action opened the existing dialog with the correct service subject. Escape dismisses the dialog. A direct `#egitim-11` link still expands its card.
- Screenshots saved outside the repository in `outputs/review/`: `training-cards-desktop.png`, `training-cards-mobile.png`, `certification-cards-desktop.png`, `certification-cards-mobile.png`.
- No email submissions, service-content changes or deployment were performed.

## Company contact and logo replacement — 8 October 2026

- Production compilation (`npm run build`), the seven-route static checks (`npm run check`) and all four contact transport tests (`npm test`) passed. The saved output remains private/noindex.
- Both contact-page forms and all shared dialogs target `info@bmskalite.com`. The former Gmail recipient is absent from `src`, `public` and `dist`.
- The supplied SVG, served header logo and favicon all match SHA-256 `EDDC0ABA171AC5B5736045F6B26C7FCBD203E671C2F00F0B0622BDCB162D4476`; natural dimensions are 1060 × 366.
- Browser checks at 1366 × 1000 and 390 × 844 confirmed the logo loads at its correct aspect ratio, contact links use `mailto:info@bmskalite.com` and `tel:+905053710281`, and there is no horizontal overflow. Mobile navigation and the logo return-home link work.
- New-recipient activation and actual email delivery are pending owner authorization for a test. No message has been sent to the new recipient during this change. The previous Gmail delivery test does not verify the company mailbox.
- No deployment or GitHub push. `vercel.json` remains SHA-256 `1315E68D24CDC390B8B91B2BA238131B6EEDC76AE27D70941357F7C5EF8A02D0`.

## Hero previous/next arrows — 8 October 2026

Added SVG previous/next buttons at opposite hero edges. On compact layouts the buttons sit below the copy to avoid overlapping the text, with 44px touch targets. Controls are hidden until JavaScript is ready, have accessible names and announce manual slide changes. Automatic rotation continues after clicks; each selected slide receives a fresh 6.5-second interval. Number selectors and the pause button remain absent.

Build and static checks passed. An isolated execution of the actual hero script verified previous/next navigation, first/last wrapping, automatic advancement after manual selection, and exactly one active slide. Browser verification could not be completed in this session: the local preview connection remained inaccessible after network permission was granted. No deployment or remote push occurred.

## Continuous hero rotation — 7 October 2026

At the owner's request, the hero's numbered selectors and pause/resume button were removed. Slides now advance every 6.5 seconds independently of hover, focus and scroll position. Reduced-motion CSS still removes zoom and fade effects. The space reserved for the controls was removed. The static build and existing project checks passed; browser verification confirmed no controls, automatic advancement and no horizontal overflow. This supersedes the earlier manual-control behavior below. No deployment or remote push.

## Contact workflow and hero revision — 7 October 2026

- Build, seven-route static checks and four delivery-contract tests pass. All 55 service links open the shared contact flow with an editable subject; old service and training IDs remain valid.
- Seven pages checked at 320, 768, 1201 and 1440px: no horizontal overflow, broken loaded images or duplicate H1. Desktop and 390px hero/form screenshots were visually inspected.
- Consulting ISO/IEC 17020, its training and ISO 9001 certification consultancy each prefill the correct subject. Native dialog close and Escape return focus to the opening link and release scroll lock. Mobile navigation opens, routes correctly and closes. The logo returns home.
- Empty/invalid email fields prevent submission. The live form shows pending, activation-required and successful states; drafts survived the activation failure. The automated transport tests separately cover provider rejection, HTTP/network errors, invalid JSON and timeouts without sending mail.
- Owner approved a test email to the temporary recipient. First request reached FormSubmit and required activation. Owner confirmed activation; the subsequent test returned success and the owner confirmed receipt in Gmail spam. Actual email delivery is therefore verified; primary-inbox placement is not claimed. No further test submissions were sent.
- Hero automatic advancement and manual switching were observed. Manual selection pauses autoplay and controls expose the selected state. Reduced-motion, document-hidden, hover, focus and offscreen pause paths were implemented and reviewed; no OS reduced-motion preference was changed.
- Private/noindex review remains in place. No public deployment, GitHub push, new site or domain changes. The supplied logo and updated certification image are unchanged. `vercel.json` remains SHA-256 1315E68D24CDC390B8B91B2BA238131B6EEDC76AE27D70941357F7C5EF8A02D0.

# Validation record — 23 September 2026

## Certification image follow-up — 6 October 2026

- Replaced the certification image on the homepage service card and certification introduction with the same new document-review photograph.
- Build and existing checks passed. Five distinct homepage photograph hashes remain valid.
- Browser confirmed the new source in both locations; certification introduction visually inspected at 1440px and 390px with no overflow or broken image.
- The new WebP is 107,236 bytes. No service text, layout, logo, hosting configuration or publication state changed.

## Visual refresh and ISO 17025 disclosure — 6 October 2026

- Build and existing validation passed for seven routes, sixteen consulting entries, thirty-four trainings and five certifications.
- All seven routes checked in the browser at 320, 768 and 1440px: no horizontal overflow, no broken loaded images; one H1 per page verified on desktop.
- Desktop home hero and all three photographic service cards, tablet consulting introduction, and 390px home hero visually inspected.
- All seven desktop header links navigate correctly. Logo returns home. Mobile menu opens and Escape closes it.
- ISO 17025 and its nested technical scope open with pointer and keyboard. Existing accreditation scope fragment opens and exposes the matching content. Nested fragment also verified after reload.
- Six different new photographs are present, with five distinct homepage sources and hashes. Image payload is 844,540 bytes for all six WebP files; logo bytes are unchanged.
- No public publishing or Git push. `vercel.json` retains SHA-256 1315E68D24CDC390B8B91B2BA238131B6EEDC76AE27D70941357F7C5EF8A02D0.

Earlier checks describe their corresponding historical versions.

## Reference catalogue additions — 6 October 2026

- `npm run build` and `npm run check` passed for all seven routes in private-review mode.
- All fifteen consulting catalogue cards, thirty-four trainings and five certification entries render. The existing detailed ISO 17025 consulting section remains in place.
- Internal links/fragments, metadata, assets and the five distinct homepage photo checks passed.
- Consulting, training and certification pages checked at 320, 768 and 1440px: no horizontal overflow. Long new training titles visually checked at 390px.
- The new ISO 20387 consulting disclosure opens and shows its description correctly. The desktop result was saved as `../bms-yeni-hizmetler.jpg` (relative to the project root).
- No browser console errors observed during these checks.
- `git diff --check` passed. `vercel.json` retains SHA-256 1315E68D24CDC390B8B91B2BA238131B6EEDC76AE27D70941357F7C5EF8A02D0.
- No public deployment or remote push. The service comparison and edition decisions are recorded in `SERVICE-COMPARISON.md`.

## Content expansion — 5 October 2026

- Production-target static build and project validation passed for seven routes in private-review mode.
- All ten consulting entries and their supplied scope items, twenty-one training entries, and five certification entries render in full. The former seven-course rendering limit has been removed.
- Internal links, existing ISO 17025/training fragments, new certification navigation, metadata and assets pass validation.
- All seven routes checked at 320, 768, 1051 and 1440px: no horizontal overflow or broken loaded images. Mobile service details visually inspected at 390px.
- Desktop header links and the logo return-home action work. Mobile menu opens and Escape closes it with focus returned to the toggle.
- IVDR and GMP service details open, expose their full scope, and close using the keyboard.
- Desktop certification page visually inspected; five supplied standards are present.
- No browser console warnings or errors observed during navigation.
- Five distinct homepage images and their unique hashes pass the existing regression check. Action icons remain SVG rather than emoji.
- `vercel.json` remains unchanged (SHA-256: 1315E68D24CDC390B8B91B2BA238131B6EEDC76AE27D70941357F7C5EF8A02D0).
- No public deployment, remote push, contact-data additions or hosting changes were performed for this content revision.

Earlier validation records follow.

- Build and static validation passed for all six routes.
- All generated internal links and fragment targets resolve; local assets exist.
- Each page has a Turkish language declaration, one H1, unique title and description, Open Graph text fields and favicon.
- Browser checks of all six routes at 320, 768 and 1440 pixels: no horizontal overflow, one H1 per page, no broken loaded images.
- Visual inspection: desktop and 390px home hero, desktop contact page; service/footer and additional mobile/tablet checks recorded during handoff.
- Mobile menu opens; Escape closes it and returns focus. Desktop navigation and logo return-home link work.
- Consulting FAQ opens. Address-copy action reports success. Contact links preserve the documented address.
- No browser console errors or warnings observed during checked navigation.
- Review output is noindex/nofollow and disallows crawlers. This is not authentication; only local review and private Sites access should be used until approved.
- No phone/email, unsupported certifications, customers, statistics, reference-company branding or source document is included in public output.

The image is original representative imagery; the wordmark is provisional. A formal accessibility certification, independent security audit and actual custom-domain/DNS setup are not claimed. Final contact details and public launch remain pending approval.

## Version 2 redesign checks

- All six routes checked in browser at 320, 390, 768, 1024 and 1440px: no horizontal overflow, no broken loaded images, one H1 per page.
- Desktop hero, distinct service photography, education/process layouts and mobile hero visually inspected.
- Static route/fragment/asset validation passed after the redesign.
- Added a regression check confirming five homepage image placements, five unique asset URLs and five unique image hashes.
- Shared navigation, FAQ and address-copy JavaScript is unchanged from the previously tested version.
- The source remains a private, noindex review build. No public deployment or domain changes.
