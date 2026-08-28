import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import CtaBand from './CtaBand'
import './SimplePage.css'

/*
  SYNTEX — SimplePage
  A reusable content-page shell so the remaining routes share one consistent,
  art-directed layout instead of duplicating markup. Renders:
    • navy header (eyebrow + title + optional lead + optional breadcrumb)
    • optional intro prose
    • optional `sections` (each: { heading, body, items[] })
    • optional CTA band
  Everything is data-driven; nothing is invented here.
*/
export default function SimplePage({
  eyebrow,
  title,
  lead,
  breadcrumb,           // { label, to } | undefined
  intro,                // string | string[]
  sections = [],        // [{ heading, body, items }]
  cta = { heading: "Let's engineer your next technology environment.", primaryLabel: 'Talk to Syntex', primary: '/contact' },
  children,
}) {
  const introParas = Array.isArray(intro) ? intro : intro ? [intro] : []

  return (
    <>
      <section className="sp-header">
        <div className="wrap">
          {breadcrumb && (
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
              <span aria-hidden="true">/</span>
              <span>{title}</span>
            </nav>
          )}
          {eyebrow && <span className="eyebrow on-dark">{eyebrow}</span>}
          <h1>{title}</h1>
          {lead && <p className="sp-lead">{lead}</p>}
        </div>
      </section>

      {(introParas.length > 0 || sections.length > 0 || children) && (
        <section className="wrap sp-body">
          {introParas.map((p, i) => (
            <Reveal key={i}><p className="sp-intro">{p}</p></Reveal>
          ))}

          {sections.map((s, i) => (
            <Reveal key={s.heading || i} className="sp-section">
              {s.heading && <h2>{s.heading}</h2>}
              {s.body && <p>{s.body}</p>}
              {Array.isArray(s.items) && s.items.length > 0 && (
                <ul className="sp-list">
                  {s.items.map((it) => (
                    <li key={typeof it === 'string' ? it : it.label}>
                      {typeof it === 'string' ? it : (
                        <>
                          <span className="sp-list-label">{it.label}</span>
                          {it.text && <span className="sp-list-text">{it.text}</span>}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          {children}
        </section>
      )}

      {cta && (
        <CtaBand heading={cta.heading} primaryLabel={cta.primaryLabel} primary={cta.primary} />
      )}
    </>
  )
}
