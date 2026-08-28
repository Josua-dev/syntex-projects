import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Unverified from '../components/Unverified'
import { serviceAreas } from '../data/site'
import './ServiceDetail.css'

/*
  SYNTEX — Service detail (/services/:slug).
  Renders a single verified service area with a clear engineering narrative:
  Overview → Systems included → Where it applies → Related areas.
  Anything not present in site.js is shown via <Unverified/>, never invented.
  Unknown slugs redirect to the Services index.
*/
export default function ServiceDetail() {
  const { slug } = useParams()
  const service = serviceAreas.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services" replace />

  const related = serviceAreas
    .filter((s) => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3)

  return (
    <>
      {/* Header on navy with breadcrumb */}
      <section className="sd-header">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span>{service.category}</span>
          </nav>
          <span className="eyebrow on-dark">{service.category}</span>
          <h1>{service.title}</h1>
          <p className="sd-intro">{service.intro}</p>
        </div>
      </section>

      <section className="wrap sd-body">
        {/* Main column */}
        <div className="sd-main">
          <Reveal>
            <h2>Overview</h2>
            {service.body ? (
              <p className="sd-lead">{service.body}</p>
            ) : (
              <Unverified label="Detailed overview" />
            )}
          </Reveal>

          {Array.isArray(service.systems) && service.systems.length > 0 && (
            <Reveal className="sd-block">
              <h2>Systems included</h2>
              <ul className="sd-systems">
                {service.systems.map((sys) => (
                  <li key={sys}>
                    <span className="sd-sys-dot" aria-hidden="true" />
                    {sys}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {Array.isArray(service.outcomes) && service.outcomes.length > 0 && (
            <Reveal className="sd-block">
              <h2>Business outcomes</h2>
              <ul className="sd-outcomes">
                {service.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>

        {/* Aside */}
        <aside className="sd-aside" aria-label="Service summary">
          <div className="sd-card">
            <span className="sd-card-label">Capability area</span>
            <h3>{service.title}</h3>
            <dl>
              <div><dt>Category</dt><dd>{service.category}</dd></div>
              <div><dt>Delivery</dt><dd>Design · Integrate · Deploy · Support</dd></div>
            </dl>
            <Link to="/contact" className="btn btn-primary sd-card-cta">
              Discuss this area
            </Link>
          </div>

          {related.length > 0 && (
            <div className="sd-related">
              <span className="sd-card-label">Related in {service.category}</span>
              <ul>
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link to={r.url}>{r.title} →</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </section>

      <CtaBand
        heading={`Deploying ${service.title.toLowerCase()}? Let's scope it.`}
        primaryLabel="Talk to Syntex"
        primary="/contact"
      />
    </>
  )
}
