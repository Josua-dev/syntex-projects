# syntex-projects

Source for **Syntex Technologies** (Windhoek, Namibia) — a Namibian ICT
systems integrator. The repo is organised as three subprojects; only one is
the source of truth at a time.

## Which one is "the site"?

`syntex-app/` is the **current live site** (deployed on Vercel from this
repo's root). It was patched in place after the audit:

- Build errors in `src/pages/Industries.jsx`, `src/pages/Projects.jsx`,
  `src/pages/Solutions.jsx` (orphan/missing JSX section tags) — fixed.
- `src/anim/eyebrow.js` was importing `animejs` without declaring it in
  `package.json`; rewritten as a no-op so framer-motion handles reveal.
- `vercel.json` is a Vite SPA rewrite, so all routes resolve to `/`.

`syntex-redesign/` is a **drop-in replacement** that rethinks the design
system (brand-true blue + gold, architectural header, network-topology
hero, no animejs). It builds cleanly with `npm install && npm run build`.
Use it when you next want to refresh the look — don't run both at once.

`syntex-patches/` is an **archive** of diffs that were applied to an
earlier external Syntex codebase. Targets like `global.css :root` and
`App.jsx` don't exist in this repo anymore. Keep for reference, don't
re-apply.

## Run syntex-app locally

```bash
cd syntex-app
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
```

## Run syntex-redesign locally

```bash
cd syntex-redesign
npm install
npm run dev      # http://localhost:5173
```

## Deployment

Vercel watches this repo. The `syntex-app/` workspace is what gets shipped.
If you want to switch over to `syntex-redesign/`, move its contents up to
the repo root (or point Vercel at that subdirectory) — don't try to merge
the two.

## Repo hygiene notes

- `node_modules/` is ignored per-subproject. Don't commit it.
- `vercel.json` lives in `syntex-app/` (where the framework config is).
- No CI yet. Add a `npm run build` check if you start touching this from
  multiple machines.
