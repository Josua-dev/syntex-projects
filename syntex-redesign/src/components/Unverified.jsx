/* Honest placeholder for content not yet publicly published.
   Never renders invented data — just an explicit "not published" state. */
export default function Unverified({ label = 'This information' }) {
  return (
    <p className="unverified" role="note" style={{
      fontSize: '0.9rem', color: 'var(--ink-faint)',
      background: 'var(--paper-dim)', border: '1px dashed var(--border)',
      borderRadius: 'var(--r-md)', padding: 'var(--s-4)',
    }}>
      {label} is not publicly published yet. We’re happy to share it directly —
      please <a href="/contact" style={{ color: 'var(--signal-deep)' }}>contact Syntex</a>.
    </p>
  )
}
