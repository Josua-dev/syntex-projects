/* =============================================================
   SYNTEX — Browser QA audit script
   -------------------------------------------------------------
   HOW TO USE:
   1. Run `npm run dev` and open the site.
   2. Open DevTools → Console, paste this whole file, press Enter.
   3. Read the grouped report. Re-run on each route (Home, Solutions,
      About, Contact, a detail page, and NotFound).
   It performs non-destructive checks only — no DOM is modified.
   ============================================================= */
(function syntexQA() {
  const pass = (m) => console.log('%c✓ ' + m, 'color:#1a8f4b');
  const warn = (m) => console.warn('⚠ ' + m);
  const fail = (m) => console.error('✗ ' + m);
  const group = (t) => console.group('%c' + t, 'font-weight:bold;color:#1F6FC4');
  const end = () => console.groupEnd();

  // 1) Horizontal overflow -----------------------------------
  group('1. Horizontal overflow');
  const docW = document.documentElement.clientWidth;
  const offenders = [...document.querySelectorAll('*')].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.right > docW + 1 || r.left < -1;
  });
  if (!offenders.length) pass('No elements exceed viewport width (' + docW + 'px).');
  else {
    fail(offenders.length + ' element(s) overflow horizontally:');
    offenders.slice(0, 8).forEach((el) =>
      console.log('   ', el.tagName.toLowerCase() + (el.className ? '.' + String(el.className).split(' ').join('.') : ''), el));
  }
  end();

  // 2) Images missing alt ------------------------------------
  group('2. Image alt text');
  const imgs = [...document.images];
  const noAlt = imgs.filter((i) => !i.hasAttribute('alt'));
  const emptyAltDecorative = imgs.filter((i) => i.getAttribute('alt') === '');
  if (!noAlt.length) pass(imgs.length + ' images checked; all have an alt attribute (' + emptyAltDecorative.length + ' intentionally empty/decorative).');
  else fail(noAlt.length + ' image(s) missing alt attribute:'), noAlt.forEach((i) => console.log('   ', i.src));
  end();

  // 3) Heading hierarchy -------------------------------------
  group('3. Heading hierarchy');
  const heads = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')];
  const h1s = heads.filter((h) => h.tagName === 'H1');
  if (h1s.length === 1) pass('Exactly one <h1>: "' + h1s[0].textContent.trim().slice(0, 60) + '"');
  else if (h1s.length === 0) fail('No <h1> on this route.');
  else warn(h1s.length + ' <h1> elements found (expected 1).');
  let prev = 1, skips = 0;
  heads.forEach((h) => { const lvl = +h.tagName[1]; if (lvl - prev > 1) skips++; prev = lvl; });
  skips ? warn(skips + ' heading-level skip(s) detected (e.g. h2→h4).') : pass('No heading-level skips.');
  end();

  // 4) Buttons / links without accessible names --------------
  group('4. Accessible names (buttons & links)');
  const clickables = [...document.querySelectorAll('button, a[href]')];
  const unnamed = clickables.filter((el) => {
    const txt = (el.textContent || '').trim();
    const aria = el.getAttribute('aria-label') || el.getAttribute('aria-labelledby');
    const title = el.getAttribute('title');
    return !txt && !aria && !title;
  });
  unnamed.length ? fail(unnamed.length + ' interactive element(s) have no accessible name:') : pass(clickables.length + ' interactive elements all have accessible names.');
  unnamed.slice(0, 8).forEach((el) => console.log('   ', el));
  end();

  // 5) Tap target size (mobile) ------------------------------
  group('5. Tap target size (≥ 40×40)');
  if (window.innerWidth <= 768) {
    const small = clickables.filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width && r.height && (r.width < 40 || r.height < 40);
    });
    small.length ? warn(small.length + ' tap target(s) below 40px on this width.') : pass('All visible tap targets ≥ 40px.');
    small.slice(0, 8).forEach((el) => console.log('   ', el));
  } else pass('Skipped (viewport > 768px). Resize to test mobile.');
  end();

  // 6) iframes need a title ----------------------------------
  group('6. iframe titles');
  const frames = [...document.querySelectorAll('iframe')];
  if (!frames.length) pass('No iframes on this route.');
  else {
    const noTitle = frames.filter((f) => !f.getAttribute('title'));
    noTitle.length ? fail(noTitle.length + ' iframe(s) missing a title (e.g. FindUsMap).') : pass(frames.length + ' iframe(s) all have titles.');
  }
  end();

  // 7) Colour: leftover near-black / grey accent -------------
  group('7. Brand colour sanity');
  const rootStyle = getComputedStyle(document.documentElement);
  const navy = rootStyle.getPropertyValue('--navy').trim();
  const orange = rootStyle.getPropertyValue('--orange').trim();
  const legacyBlack = ['#0e0e0e', '#141414'].includes(navy.toLowerCase());
  const legacyGrey = ['#575554'].includes(orange.toLowerCase());
  legacyBlack ? fail('--navy is still near-black (' + navy + '). Apply PATCH-1.') : pass('--navy is brand blue (' + (navy || 'set') + ').');
  legacyGrey ? fail('--orange accent is still grey (' + orange + '). Apply PATCH-1/4.') : pass('--orange accent is set (' + (orange || 'ok') + ').');
  end();

  // 8) Reduced-motion awareness ------------------------------
  group('8. Reduced motion');
  const rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  console.log('   OS reduced-motion currently:', rm ? 'ON' : 'off');
  console.log('   Toggle in DevTools → Rendering → "Emulate prefers-reduced-motion" and re-run.');
  const noMotionClass = document.documentElement.classList.contains('no-motion');
  console.log('   <html>.no-motion class:', noMotionClass ? 'present' : 'absent', rm && !noMotionClass ? '← expected present when RM is on' : '');
  end();

  // 9) Console-error hint ------------------------------------
  group('9. Runtime');
  pass('If you saw NO red errors above app boot, the anime.js import fix (PATCH-2) is working.');
  console.log('   Watch specifically for "anime is not a function" — that means PATCH-2 is not applied.');
  end();

  console.log('%cSYNTEX QA complete — re-run on each route.', 'font-weight:bold;color:#C6871B');
})();
