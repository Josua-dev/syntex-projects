# Syntex — Manual QA Checklist

Run alongside `qa/qa-audit.js` (paste into the console on each route).
The automated script covers overflow, alt text, headings, accessible names,
tap targets, iframe titles, brand colours and reduced motion. This list covers
what a script can't judge.

## Routes to walk
`/` · `/solutions` · `/solutions/:slug` · `/industries` · `/about` ·
`/services` · `/hardware` · `/projects` · `/contact` · a bad URL (`/nope` → NotFound)

## Breakpoints
Test at **1440 · 1280 · 1024 · 768 · 480 · 390 · 360**.

| Check | 1440 | 1024 | 768 | 390 |
|---|---|---|---|---|
| No horizontal scroll | ☐ | ☐ | ☐ | ☐ |
| Nav: transparent over hero → solid on scroll | ☐ | ☐ | — | — |
| Nav collapses to burger; menu locks body scroll | — | ☐ | ☐ | ☐ |
| Hero topology/diagram fits, no crop | ☐ | ☐ | ☐ | ☐ |
| Cards/rows reflow to 1 col cleanly | ☐ | ☐ | ☐ | ☐ |
| Footer collapses 4→2→1 columns | ☐ | ☐ | ☐ | ☐ |
| Headlines not oversized/awkward | ☐ | ☐ | ☐ | ☐ |

## Interaction
- [ ] ⌘K / Ctrl+K opens search; Esc closes; focus returns to the toggle.
- [ ] Search: ↑/↓ move highlight; Enter opens; Tab stays trapped.
- [ ] Mega-nav opens on hover AND keyboard focus; closes on Esc.
- [ ] All CTAs go somewhere valid (no dead `#`).
- [ ] Contact form: empty submit shows the aria-live message; valid submit opens mailto.
- [ ] FindUsMap shows the office (−22.57264, 17.1076775) or the address fallback.

## Accessibility
- [ ] Tab from top: **Skip to content** appears first and works.
- [ ] Focus ring visible on every interactive element (gold outline).
- [ ] DevTools → Rendering → emulate `prefers-reduced-motion: reduce`:
      hero draw is static, no parallax, page fully legible.
- [ ] Zoom to 200% — no content clipped or overlapping.
- [ ] Contrast: gold text is used for accents/labels only, not body copy on white.

## Content integrity (no fabrication)
- [ ] Partner count matches `partners.length` (not a hard-coded "12+").
- [ ] No invented clients, awards, employee counts or years.
- [ ] `verified:false` items show a "Soon"/placeholder, never fake data.
- [ ] Projects framed as scenarios/records, not named-client case studies
      (except the border-control "10+ countries" record).

## Performance (Lighthouse, mobile preset)
- [ ] Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] Only one React copy loads (Network tab — no unpkg react + bundle react).
- [ ] Route chunks load on navigation (code splitting working).
- [ ] Fonts use `display=swap` (no invisible-text flash).

## The identity test (do last)
- [ ] Hide the logo. Is it still unmistakably Syntex? (blue + gold, schematic
      motif, mono technical labels → yes.)
- [ ] Could this exact page be an AI startup / fintech / generic SaaS site?
      (should be **no**.)
