# Vectorium — VECT • AI Landing
Premium single-page landing for Vectorium / VECT • AI.

## Quickstart
```bash path=null start=null
npm install
npm start
```
Open the dev server URL shown in the terminal.

## Production build
```bash path=null start=null
npm run build
```
Outputs static assets to `build/`.

## Documents
Public PDFs are served from `public/documents/`.
Required filenames:
- `whitepaper.pdf`
- `technical-paper.pdf`
- `private-sale.pdf`
- `term-sheet.pdf`

## Config
All public-facing links (community + docs + token mint) live in `src/config/constants.js`.

## Deployment
This repo is configured as a static SPA (see `vercel.json`).

## Notes
This project uses Create React App (`react-scripts`). If you need a fully up-to-date build toolchain with fewer transitive audit warnings, a future migration to Vite/Next is recommended.
