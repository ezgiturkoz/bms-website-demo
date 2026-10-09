# BMS Kalite Yazılım corporate website

Portable seven-page Turkish corporate website. Standard HTML, CSS and JavaScript, generated with Node.js built-ins. No package dependencies, tracking, external fonts, credentials or platform runtime SDK. The contact form uses FormSubmit for email delivery.

## Local development

Requires Node.js 20+ and optionally Git. Open this directory in VS Code.

```sh
npm run dev
```

Visit http://127.0.0.1:4173. Edit source, run `npm run build`, then refresh the browser. The server remains running. `PORT` can override 4173. The server binds only to the local machine.

```sh
npm run build
npm run check
npm test
npm run preview
```

## Structure

- `src/content.mjs`: company facts, contact fields, consulting scope, training subjects and approach.
- `src/catalog.mjs`: consulting services, training subjects and certification services; source mapping is documented in `docs/`.
- `src/components.mjs`: shared header, navigation, footer, calls to action and page sections.
- `src/pages.mjs`: seven page compositions.
- `public/styles.css`: tokens, responsive styles, print and reduced-motion styles.
- `public/site.js`: mobile navigation, address-copy, fragment navigation and progressive reveal transitions.
- `src/contact-config.mjs`: temporary form recipient, changed in one place.
- `public/contact.js` and `public/contact-delivery.js`: reusable form/dialog behavior and isolated email transport.
- `src/hero.mjs` and `public/hero.js`: three original photo slides with continuous automatic rotation, previous/next SVG arrows and reduced-motion styling.
- `public/assets/`: supplied SVG logo and six optimized original representative WebP photographs; the homepage uses five distinct photographs.
- `scripts/build.mjs`: generates semantic static pages and metadata.
- `scripts/server.mjs`: dependency-free local preview server.
- `scripts/check.mjs`: verifies routes, local links, anchors, assets, basic SEO and excluded content.
- `dist/`: generated static output, tracked for buildless hosting compatibility. Edit source and regenerate; do not edit generated HTML.
- `.openai/hosting.json`: Sites project identity and `static.directory` configuration. Preserve its project ID for future Sites edits.

## Private review and domain transition

The owner approved search indexing and `https://www.bmskalite.com` as the primary website address on 9 October 2026. Defaults live in `src/publication.mjs`: a normal build is production/indexable and generates the sitemap and canonical/OG URLs for that address. This prepares output only; it does not connect DNS or deploy the site.

Vercel preview/development/custom environments, when identified by `VERCEL_ENV`, remain non-indexable. Set `SITE_STAGE=review` explicitly for any other demo host. These directives are not access control.

1. Development: run locally.
2. Private Review: save the matching pushed source and static archive as a Sites version. Keep audience private. Do not publish without the requested review.
3. Demo: after approval, connect the selected demo subdomain with the host's DNS and certificate workflow. Preserve noindex. Set `SITE_ORIGIN` to that HTTPS origin before building to generate canonical/OG URLs.
4. Client approval: confirm company contact details, identity and factual content.
5. Final domain: connect the official domain, set `SITE_ORIGIN` to its HTTPS origin (no trailing slash), and set `SITE_STAGE=production`. Run build/check and deploy the reviewed version. This enables indexing and emits the final sitemap/canonical URLs. Redirect the old host at the hosting layer when supported.

Normal build for the approved final domain:

```powershell
npm run build
npm run check
```

For private review, set `SITE_STAGE=review` before building. For Vercel Production, remove any old review-stage override or set `SITE_STAGE=production`; remove any old `SITE_ORIGIN` override or set it to `https://www.bmskalite.com`. Existing environment values take precedence over the source defaults. Rebuild/redeploy after changing these settings. Do not change `vercel.json` for indexing. After deployment, confirm the live site's robots.txt, page robots meta, canonical URLs, sitemap and response headers. Submit `https://www.bmskalite.com/sitemap.xml` in Google Search Console. Indexability does not guarantee search inclusion or timing.

The static output is compatible with Sites (`dist/index.html` and the manifest) and other static hosts. No Worker, database, account integration or API secret is required. `_headers` provides baseline headers on hosts supporting that convention; configure equivalent headers on other hosts. A host must serve directory index pages and `404.html` appropriately.

## Contact and brand approval

The confirmed Ankara address is retained. The contact form routes to the approved company mailbox `info@bmskalite.com`, configured in `src/contact-config.mjs`. The contact page displays that address and `+90 505 371 02 81` from `src/content.mjs`, with email and telephone links. The owner completed activation and confirmed inbox receipt of the local review test on 9 October 2026. Repeat the delivery check on the final hosting origin. See `docs/CONTACT-FORM.md` for setup and testing. The map action searches the exact documented address.

The header and favicon use the latest user-supplied `BMS_Kalite_ve_Yazilim_beyaz.svg`, preserved in `public/assets/bms-logo.svg` and `public/favicon.svg`. Its original proportions and colours are retained. The footer has no logo, at the user's request. Photographs are representative scenes, not actual BMS staff, premises or software. See `docs/CONTENT-AND-DESIGN.md` and `docs/ASSET-PROMPTS.json` for source mapping and asset provenance. WebP files are ready to serve; image tooling is not required to build or run the project.

## Git

This folder is a standalone repository. Changes belong in source and public assets; rebuild generated output before committing. Local secrets, runtime state and archive files are ignored. Keep source, build output, documentation and hosting identity versioned together. No dependency installation or lockfile is required because all tooling uses the Node standard library.
