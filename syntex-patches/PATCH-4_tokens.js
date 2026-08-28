// PATCH 4 — src/.../tokens.js corrected to match the brand-true CSS :root.
// Removes the third, conflicting colour source. If nothing in JS consumes
// these, prefer DELETING this file and keeping global.css :root as the SSOT.
export const colors = {
  brandBlue: '#1F6FC4', brandBlueDeep: '#0B2A4A', brandBlueInk: '#071B30',
  brandBlueLite: '#2E86D8', brandGold: '#E5A93C', brandGoldDeep: '#C6871B',
  navy: '#0B2A4A', bronze: '#071B30',
  orange: '#E5A93C', // was '#575554' grey
  paper: '#FAFAF8', paperDim: '#F1F4F8', ink: '#16202B',
  inkSoft: '#46525F', inkFaint: '#8A94A0', line: '#E2E7EE', border: '#E2E7EE',
  link: '#2E86D8', signal: '#E5A93C', signalDeep: '#C6871B', signalTint: '#FBF1DC',
}
export const radius = { sm: '10px', md: '14px', lg: '18px', pill: '999px' }
export const typography = {
  display: "'Source Serif 4', Georgia, serif",
  body: "'Source Sans 3', -apple-system, 'Segoe UI', sans-serif",
  mono: "'IBM Plex Mono', Menlo, monospace",
}
export default { colors, radius, typography }
