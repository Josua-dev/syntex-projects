# Integration Guide — Syntex Redesign

Stack: Vite + React 18 + React Router 6 (SPA).

## This package is runnable standalone
It ships a complete `src/data/site.js` and `src/data/nav.js` built from the
VERIFIED Syntex content, so `npm install && npm run dev` works out of the box.
If you already have a `site.js`, reconcile field names (see caveat below).

## Quick start
```bash
npm install
npm run dev
```

## Import order (already wired)
`src/main.jsx` imports `./styles/global.css`, which `@import`s
`tokens.css` + `utilities.css`. That single import pulls in the whole system.

## If merging into your existing repo instead
1. Copy `src/styles/*`, `src/components/*`, `src/pages/*`, `src/data/*`,
   `src/App.jsx`, `src/Layout.jsx`, `src/ScrollToTop.jsx`, `src/main.jsx`.
2. Replace `index.html`, `vite.config.js`, `package.json`.
3. Or, to keep your originals, apply the patches in `../syntex-patches/`.
4. `rm -rf node_modules package-lock.json && npm install` (clears animejs drift).

## Field-name caveat
Pages read these keys from `site.js`: `identity`, `company`, `heroMessage`,
`vision.values[]`, `serviceAreas[]`, `solutions[]`, `industries[]`,
`projects[]`, `partners[]`, `process[]`, `hardware[]`; and from `nav.js`:
`nav[]`, `searchIndex[]`. If your local names differ, adjust the reads.

## QA
Run `qa/qa-audit.js` in the console on each route; work `qa/QA-CHECKLIST.md`.
