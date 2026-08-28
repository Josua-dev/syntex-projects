# Syntex Technologies — Website

Full React + Vite app for Syntex Technologies (Windhoek, Namibia), with the real
company logo, the real office photo, a photo slideshow, glass UI, and the complete
refined design system.

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build && npm run preview
```

## Real assets included
- `public/images/syntex-mark.png` — the real Syntex arrow logo (nav, footer, favicon)
- `public/images/office-windhoek.jpg` / `office-wide.jpg` — the real office photo
  (hero background + slideshow slide 1 + Contact map card)

## Slideshow photos (real, non-AI)
Slide 1 is your office. For the 3 industrial slides, run:
```bash
bash download-photos.sh        # or the .ps1 on Windows
```
See `public/images/PHOTO-MANIFEST.md`. Missing images fall back to a branded slide.

## Stack
Vite 5 · React 18 · React Router 6 · Framer Motion · animejs. All routes code-split.
Design system in `src/styles/tokens.css`; interior pages share `src/pages/pages.css`.
