# Vercel client demo setup

Use this existing project folder as the GitHub repository root (the folder containing package.json and vercel.json).

- Framework Preset: Other
- Root Directory: . (when this folder is the repository root)
- Build Command: npm run build
- Output Directory: dist
- Node.js: 24.x is the version used for local verification; the project requires Node.js >=20.
- Dependencies: none; no API keys or application secrets required.

The checked-in vercel.json explicitly configures the static output directory and trailing-slash URLs. Vercel serves the generated files; do not use npm run dev or npm run preview as the deployed server. Those commands bind to localhost intentionally for local development only.

For a client demo, leave SITE_STAGE and SITE_ORIGIN unset. The complete static build succeeds and retains the existing noindex/nofollow metadata and robots disallow setting. If a demo domain is chosen, SITE_ORIGIN can be set to its HTTPS origin without a trailing slash to generate canonical/OG URLs. SITE_STAGE=production is a separate indexing switch for the final public launch; it requires SITE_ORIGIN. It is not required for a Vercel production-target demo deployment.

The dist/_headers file is a configuration convention for other static hosts, not a Vercel header configuration. Its noindex intent is already present in HTML and robots.txt. Custom HTTP headers, if wanted later, should be added using Vercel's headers configuration. No host-specific headers are required for the site's functionality.

No deployment, GitHub upload, repository creation, domain connection or Vercel project creation was performed during preparation. Review noindex settings and access protection separately when configuring who may view the client demo; noindex is not authentication.
