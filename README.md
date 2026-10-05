# BMS Kalite Yazılım corporate website

Portable six-page Turkish corporate website. Standard HTML, CSS and JavaScript, generated with Node.js built-ins. No package dependencies, tracking, cookies, external fonts, form processor, credentials or platform runtime SDK.

## Local development

Requires Node.js 20+ and optionally Git. Open this directory in VS Code.

```sh
npm run dev
```

Visit http://127.0.0.1:4173. Edit source, run `npm run build`, then refresh the browser. The server remains running. `PORT` can override 4173. The server binds only to the local machine.

```sh
npm run build
npm run check
npm run preview
```

## Structure

- `src/content.mjs`: company facts, contact fields, consulting scope, training subjects and approach.
- `src/catalog.mjs`: additional consulting services, training subjects and certification services from websitesi.docx.
- `src/components.mjs`: shared header, navigation, footer, calls to action and page sections.
- `src/pages.mjs`: seven page compositions.
- `public/styles.css`: tokens, responsive styles, print and reduced-motion styles.
- `public/site.js`: mobile navigation and address-copy interaction.
- `public/assets/`: five original representative corporate and laboratory image assets; no repeated homepage photograph.
- `scripts/build.mjs`: generates semantic static pages and metadata.
- `scripts/server.mjs`: dependency-free local preview server.
- `scripts/check.mjs`: verifies routes, local links, anchors, assets, basic SEO and excluded content.
- `dist/`: generated static output, tracked for buildless hosting compatibility. Edit source and regenerate; do not edit generated HTML.
- `.openai/hosting.json`: Sites project identity and `static.directory` configuration. Preserve its project ID for future Sites edits.

## Private review and domain transition

Current source defaults to private review: noindex/nofollow, robots disallow and optional host-level noindex header. These directives are not access control. Review locally or use owner-private Sites access. No public deployment is authorized yet.

1. Development: run locally.
2. Private Review: save the matching pushed source and static archive as a Sites version. Keep audience private. Do not publish without the requested review.
3. Demo: after approval, connect the selected demo subdomain with the host's DNS and certificate workflow. Preserve noindex. Set `SITE_ORIGIN` to that HTTPS origin before building to generate canonical/OG URLs.
4. Client approval: confirm company contact details, identity and factual content.
5. Final domain: connect the official domain, set `SITE_ORIGIN` to its HTTPS origin (no trailing slash), and set `SITE_STAGE=production`. Run build/check and deploy the reviewed version. This enables indexing and emits the final sitemap/canonical URLs. Redirect the old host at the hosting layer when supported.

PowerShell example for an approved final domain:

```powershell
$env:SITE_ORIGIN = 'https://www.your-approved-domain.com'
$env:SITE_STAGE = 'production'
npm run build
npm run check
```

For private review, leave both variables unset. Every public-facing output is company-branded. Hosting config and this private developer documentation describe technical integration only.

The static output is compatible with Sites (`dist/index.html` and the manifest) and other static hosts. No Worker, database, account integration or API secret is required. `_headers` provides baseline headers on hosts supporting that convention; configure equivalent headers on other hosts. A host must serve directory index pages and `404.html` appropriately.

## Contact and brand approval

The source document has blank phone, email and website fields. At the user's direction, this version shows only the confirmed Ankara address. Populate `company.email` and `company.phone` in `src/content.mjs` when approved, then rebuild. The contact page will show working email/phone links. No fake lead form or unsent submission action is included. The map action searches the exact documented address rather than inventing coordinates.

The header and favicon use the user-supplied `BMS_Kalite_ve_Yazilim_Logo.svg`, preserved in `public/assets/bms-logo.svg` and `public/favicon.svg`. Its original proportions and colours are retained. The footer has no logo, at the user's request. The laboratory image is representative, not a photograph of BMS premises. See `docs/CONTENT-AND-DESIGN.md` for source mapping and asset provenance.

## Git

This folder is a standalone repository. Changes belong in source and public assets; rebuild generated output before committing. Local secrets, runtime state and archive files are ignored. Keep source, build output, documentation and hosting identity versioned together. No dependency installation or lockfile is required because all tooling uses the Node standard library.
