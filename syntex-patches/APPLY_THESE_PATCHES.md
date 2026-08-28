# Syntex — Brand-True Patch Set

Apply if you keep your ORIGINAL files instead of the drop-in `syntex-redesign/` set.

| # | File | Target | Effect |
|---|------|--------|--------|
| 1 | PATCH-1_global.css_root.css | global.css :root | Blue+gold tokens (whole-site re-skin) |
| 2 | PATCH-2_App.jsx.diff | App.jsx | Fixes anime.js v4 default-import CRASH |
| 3 | PATCH-3_hero-diagram.css | Home.css | Recolours hero diagram |
| 4 | PATCH-4_tokens.js | tokens.js | Removes 3rd conflicting colour source |
| 5 | PATCH-5_...diff | anime-animejs.jsx | Reduced-motion gate + selector fix |
| — | anime-animejs.jsx | full file | Complete corrected module (supersedes #5) |

## Order
1. PATCH-2 first (stops the crash so the site renders).
2. PATCH-1 (the big visual change).
3. PATCH-3, then PATCH-4, then PATCH-5 / the full module.

## Also
- Delete any committed anime.min.js (duplicates the npm package).
- Remove 'use client' from App.jsx / Layout.jsx (no-ops in Vite).
- Hide verified:false routes from the nav until populated.
