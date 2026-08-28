# Syntex Technologies — Redesign Implementation Report (Final)

**Prepared for:** Josua Uuyuni
**Project:** Transform `syntex-site` from a generic AI/SaaS-style site into a
distinctive, premium enterprise ICT systems-integrator identity.
**Method:** Full audit of the supplied repository (Vite + React 18 + React
Router 6 SPA), then a phased, drop-in redesign grounded in the company's real
content (verified from syntexnam.com) and the existing verified `site.js` model.

---

## 1. What was changed

**Every route** in the app was redesigned, plus the shell, design system,
shared components, and animation layer. Highlights:

- **Design system rebuilt** around the real brand (blue + gold), replacing a
  monochrome near-black/grey token set.
- **Navigation** rebuilt from a "floating glass pill" into a full-width
  architectural header.
- **Hero** re-authored with specific enterprise messaging and a meaningful
  network-topology motif.
- **All pages** moved from repetitive card grids to varied, art-directed
  layouts (editorial rows, timelines, split screens, asymmetric grids).
- **Two real bugs fixed:** an anime.js v4 default-import crash, and duplicate
  React loading in `index.html`.
- **Content integrity enforced:** an invented "12+ partners" stat replaced with
  a data-derived count; unverifiable projects relabelled honestly.

See `FILE_MANIFEST.md` for the file-by-file map (~50 files).

---

## 2. AI-generic patterns removed

| Removed / reduced | Replaced with |
|---|---|
| Floating glass-pill navbar, blur, gradient strip | Full-width solid header, one copper/gold underline accent |
| Purple/electric-blue neon + near-black | Brand blue + graphite + warm paper + strategic gold |
| Glassmorphism, heavy shadows | Solid panels, fine engineering hairlines |
| Generic glowing hero graphic | Purposeful SVG topology (core → security/enterprise/utility/border/hardware) |
| Repetitive "heading + 3 cards" sections | Editorial rows, timelines, split screens, asymmetric grids |
| Pill-everything radii | Square-leaning radii |
| "Digital transformation / empower / cutting-edge" copy | Specific, true statements ("connected, secure and available") |
| Everything animated | Motion only where it communicates infrastructure/flow; all reduced-motion aware |

---

## 3. New visual direction — "Namibian Infrastructure Standard"

- **Palette (brand-true):** infrastructure navy `#0B2A4A`, deep blue `#071B30`,
  Syntex blue `#1F6FC4`, gold accent `#E5A93C`, warm paper `#FAFAF8`.
- **Type:** Source Serif 4 (display), Source Sans 3 (body), IBM Plex Mono
  (technical labels).
- **Motifs:** blueprint grid, network topology, mono eyebrow labels with a rule
  tick, "composed of" system stacks.
- **Namibia, subtly:** Windhoek in the eyebrow/metadata, verified local address
  and coordinate, gold accent derived from the landscape — no flags or clichés.
- **Identity test passes:** remove the logo and the blue+gold schematic system,
  topology, and real border-control/utility content still read as Syntex — not a
  reusable AI/fintech/SaaS shell.

---

## 4. Major UX improvements

- **IA clarified:** Solutions vs Services separated by intent; verified
  capability areas nested logically; placeholder people/insights routes removed
  from the nav (they resolve but aren't promoted).
- **Honest projects:** split into *Published deployments* (verified) vs
  *Engagement records* (client not named) — credible, not defensive.
- **Consultation-led contact:** "Let's engineer your next technology
  environment," accessible form, real Windhoek details, static office map.
- **Command palette (⌘K):** focus-trapped, focus-restoring, clamped highlight,
  clean labels (no raw route paths).

---

## 5. Animation / motion improvements

- Consolidated toward the repo's own `MOTION.md` principles: transform/opacity
  only, shared easing tokens, disclosure-only nav motion.
- **Fixed the anime.js crash** (v4 named API) and gated the JS hero draw on
  `prefers-reduced-motion`; corrected a malformed scroll selector.
- Removed the redundant global `.eyebrow` anime effect; entrance motion now
  lives in Framer Motion / the Reveal system.
- Global reduced-motion guard in CSS **and** `MotionConfig reducedMotion="user"`
  **and** per-component `useReducedMotion()`.

---

## 6. Performance improvements

- **Real route-level code splitting** (`React.lazy` per route) — initial bundle
  carries only the shell + Home.
- **Removed duplicate React** (unpkg UMD + bundled ESM) from `index.html`.
- **Vendor chunking** (react / motion) via `vite.config.js`.
- **Removed per-visitor Nominatim geocoding** in FindUsMap → static coordinate.
- **Dropped the `animejs` dependency** and the vendored `anime.min.js` duplicate.
- Fonts via `preconnect` + `display=swap`; SVG topology instead of WebGL.

---

## 7. Responsive improvements

- `overflow-x: hidden` + `.wrap` clamps guard horizontal overflow.
- Fluid `clamp()` type scale prevents oversized "template showcase" headlines.
- Every grid collapses cleanly (3→2→1); nav → accessible burger sheet < 1024px;
  hero stacks < 900px; detail asides de-stick on mobile.
- Tested breakpoints documented in `qa/QA-CHECKLIST.md`: 1440/1280/1024/768/480/390/360.

---

## 8. SEO / accessibility improvements

- **SEO:** Organization JSON-LD (name, 2008, Windhoek address, phone, area
  served), OG + Twitter cards, descriptive `<title>`/meta, semantic structure,
  Namibia-targeted keywords without stuffing.
- **A11y:** skip link, semantic landmarks, single visible focus-ring token,
  `aria-expanded/controls` on nav + accordions, combobox/listbox ARIA in search,
  labelled form fields with `aria-live` status, iframe titles, one `<h1>` per
  route, reduced-motion support throughout.
- A **console QA script** (`qa/qa-audit.js`) checks overflow, alt text, heading
  order, accessible names, tap targets, iframe titles, and brand-colour sanity.

---

## 9. Remaining issues / your decisions

1. **Photography:** add real server-room / Windhoek / deployment images to
   `/public/img/services/…`; the Services rows already fall back to a schematic
   panel until then.
2. **Verify `site.js` field names:** pages read verified fields
   (`serviceAreas`, `solutions`, `industries`, `projects`, `partners`,
   `process`, `vision`, `identity`, `hardware`). If local keys differ, adjust the
   reads. Populate any `verified:false` items with real evidence — never invent.
3. **Contact backend:** the form composes a `mailto` to the verified sales
   address (nothing is lost); wire a real endpoint when available.
4. **Apply the brand patches** in `syntex-patches/` if you keep your original
   files instead of the drop-in versions — PATCH-2 (crash) and PATCH-1 (tokens)
   are the two that matter most.
5. **Build/lockfile:** after removing `animejs`, run
   `rm -rf node_modules package-lock.json && npm install` for a clean lockfile.

---

### Final quality bar
The site now reads as a serious technology partner: engineered, trusted,
enterprise, local. The remove-the-logo test passes, and the same page could not
be reused as-is for an AI startup, fintech, or generic SaaS company — the blue+gold
infrastructure identity and the real Namibian ICT content are specific to Syntex.
