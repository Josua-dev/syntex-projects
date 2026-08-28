# Syntex Redesign — Complete File Manifest

Every file delivered, mapped to what it does. Paths are relative to the repo root
unless noted. Two folders:
- `syntex-redesign/` — full drop-in files (new + rewritten).
- `syntex-patches/` — targeted patches against your ORIGINAL files.

---

## A. Application shell
| File | Status | What it does |
|------|--------|--------------|
| `src/main.jsx` | rewritten | Single `global.css` import; adds `no-motion` class for reduced motion; `MotionConfig reducedMotion="user"`. |
| `src/App.jsx` | rewritten | Real `React.lazy` route splitting for **every** route; honest placeholders as named exports; removed `'use client'` + broken anime effect. |
| `src/Layout.jsx` | rewritten | `overHero` handoff to nav, skip link, global ⌘K, `ScrollToTop`. |
| `index.html` | rewritten | Removed duplicate React; navy `theme-color`; Organization JSON-LD; OG/Twitter cards. |
| `vite.config.js` | new | Manual vendor chunking (react / motion). |
| `package.json` | rewritten | Dropped unused/broken `animejs`; clean scripts. |

## B. Design system / styles
| File | Status | What it does |
|------|--------|--------------|
| `src/styles/tokens.css` | new | Blue+gold enterprise palette, type scale, spacing, motion tokens, reveal + reduced-motion base. Back-compat aliases so old components compile. |
| `src/styles/utilities.css` | new | Skip link, `visually-hidden`, route-fallback loader. |
| `src/styles/global.css` | new | `@import`s tokens+utilities; shared primitives: `.btn`, `.cta-band`, `.page-header`, `.breadcrumbs`, `no-motion`. |

## C. Components
| File | Status | What it does |
|------|--------|--------------|
| `src/components/Hero.jsx` + `.css` | new | Enterprise hero + animated SVG topology; reduced-motion aware. |
| `src/components/MegaNav.jsx` + `.css` | rewritten | Glass-pill → full-width architectural header; accessible mega-panel + mobile sheet. |
| `src/components/Footer.jsx` + `.css` | rewritten | Dynamic year; single column set (removed duplicate sitemap); navy + gold. |
| `src/components/SearchModal.jsx` + `.css` | rewritten | Focus trap/restore, highlight clamp, combobox ARIA, no raw paths shown, no render-time mutation. |
| `src/components/FindUsMap.jsx` + `.css` | rewritten | Removed per-visitor geocoding; static verified coordinate; accessible iframe title. |
| `src/components/SimplePage.jsx` + `.css` | new | Reusable content-page shell for lighter routes. |

## D. Pages (all art-directed)
| File | Status | Notes |
|------|--------|-------|
| `src/pages/Home.jsx` + `.css` | rewritten | Hero + operating statement + capability index + industries + values + process timeline + ecosystem. Fixed invented "12+ partners" → data-derived count. |
| `src/pages/Solutions.jsx` + `.css` | rewritten | Problem→Technology→Capability→Outcome; "composed of" verified service stacks. |
| `src/pages/Services.jsx` + `.css` | rewritten | Category-grouped editorial rows; image slot with schematic fallback. |
| `src/pages/ServiceDetail.jsx` + `.css` | new | `/services/:slug`; overview/systems/outcomes; `<Unverified/>` for gaps. |
| `src/pages/About.jsx` + `.css` | rewritten | Lede + vision panel + philosophy + focus + values + ecosystem; dropped "Coming Soon" people tiles. |
| `src/pages/Contact.jsx` + `.css` | rewritten | "Let's engineer…"; accessible form (mailto compose); FindUsMap. |
| `src/pages/Industries.jsx` + `.css` | new | Primary/secondary sector hierarchy. |
| `src/pages/IndustryDetail.jsx` + `.css` | new | `/industries/:slug`; challenge/response + capability links. |
| `src/pages/Projects.jsx` + `.css` | new | **Honest relabel**: Published deployments vs Engagement records. |
| `src/pages/ProjectDetail.jsx` + `.css` | new | Confidentiality note for unverified records; no fake case studies. |
| `src/pages/Hardware.jsx` + `.css` | new | Real supplied brands; partner-procurement note. |
| `src/pages/Global.jsx` | new | Grounded in the verified 10+ countries border fact. |
| `src/pages/Insights.jsx` | new | Honest hub; links only to real Approach content. |
| `src/pages/insights/Approach.jsx` | new | Delivery lifecycle from `process[]`. |
| `src/pages/insights/Placeholders.jsx` | new | News / Resources / CaseStudies — honest, unclaimed. |
| `src/pages/about/Story.jsx` | new | Verified founding narrative. |
| `src/pages/about/Vision.jsx` | new | Vision + mission + values. |
| `src/pages/about/Values.jsx` | new | Core values. |
| `src/pages/about/Placeholders.jsx` | new | Leadership / Team / Careers / Departments — honest, unclaimed. |
| `src/pages/NotFound.jsx` + `.css` | new | On-brand 404 with primary routes. |

## E. Data
| File | Status | What it does |
|------|--------|--------------|
| `src/data/site.hq.patch.js` | patch | Adds **verified** office coordinate `-22.57264, 17.1076775` to `identity.hq`. |

## F. Brand patches (apply to ORIGINAL files) — `syntex-patches/`
| File | Target | What it does |
|------|--------|--------------|
| `APPLY_THESE_PATCHES.md` | — | Order of operations + verification. |
| `PATCH-1_global.css_root.css` | `global.css :root` | Blue+gold tokens (keeps variable names → whole-site re-skin). |
| `PATCH-2_App.jsx.diff` | `App.jsx` | Fixes anime.js v4 default-import **crash**. |
| `PATCH-3_hero-diagram.css` | `Home.css` | Recolours hero diagram (blue nodes, gold links). |
| `PATCH-4_tokens.js` | `tokens.js` | Removes 3rd conflicting colour source. |
| `PATCH-5_anime-hero-reduced-motion.diff` | `anime-animejs.jsx` | Reduced-motion gate + selector fix. |
| `anime-animejs.jsx` | full file | Complete corrected animation module (supersedes PATCH-5). |

## G. QA & docs
| File | What it does |
|------|--------------|
| `qa/qa-audit.js` | Paste-in console audit: overflow, alt, headings, a11y names, tap targets, iframe titles, brand-colour sanity, reduced motion. |
| `qa/QA-CHECKLIST.md` | Manual checklist: breakpoints, interaction, a11y, content integrity, Lighthouse, identity test. |
| `INTEGRATION.md` | How to wire everything in (import order, replacements, run/QA). |
| `IMPLEMENTATION_REPORT.md` | The 9-section report your brief requested (final version). |
| `FILE_MANIFEST.md` | This file. |

---

## Integration order (quick)
1. Styles: import `tokens.css` → `utilities.css` → `global.css` (via one import in `main.jsx`).
2. Replace shell (`main`, `App`, `Layout`, `index.html`, `vite.config`, `package.json`).
3. Drop in components + pages (+ their CSS).
4. Apply `site.hq.patch.js` to `site.js`.
5. `rm -rf node_modules package-lock.json && npm install` (clears animejs drift).
6. Run `qa/qa-audit.js` on each route; work the checklist.

## Field-name caveat
These pages read verified fields from `site.js` (`serviceAreas`, `solutions`,
`industries`, `projects`, `partners`, `process`, `vision`, `identity`,
`hardware`). If your local keys differ, adjust the reads — the structure follows
the verified content, not guessed names.
