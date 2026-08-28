import { Link } from 'react-router-dom'

/* Shared closing call-to-action band. */
export default function CtaBand({ heading, primaryLabel = 'Talk to Syntex', primary = '/contact', secondaryLabel, secondary }) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <h3>{heading}</h3>
        <div className="cta-band-actions">
          <Link to={primary} className="btn btn-primary">{primaryLabel}</Link>
          {secondary && <Link to={secondary} className="btn btn-ghost">{secondaryLabel}</Link>}
        </div>
      </div>
    </section>
  )
}
