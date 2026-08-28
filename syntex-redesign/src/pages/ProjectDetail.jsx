import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Unverified from '../components/Unverified'
import { projects } from '../data/site'
import './ProjectDetail.css'

/*
  SYNTEX — Project detail (/projects/:slug).
  Verified records show full detail. Unverified records carry an explicit
  confidentiality note at the top so the page can never be mistaken for a
  named, endorsed case study. No invented clients, metrics or logos.
*/
export default function ProjectDetail() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)
  if (!p) return <Navigate to="/projects" replace />

  const isVerified = p.verified === true

  return (
    <>
      <section className="pdt-header">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/projects">Projects</Link>
            <span aria-hidden="true">/</span>
            <span>{p.title}</span>
          </nav>
          <span className="eyebrow on-dark">
            {isVerified ? 'Verified deployment' : 'Engagement record'}
          </span>
          <h1>{p.title}</h1>
          {(p.summary || p.intro) && <p className="pdt-intro">{p.summary || p.intro}</p>}
        </div>
      </section>

      {!isVerified && (
        <div className="wrap">
          <p className="pdt-confidential" role="note">
            <strong>Client not publicly named.</strong> This record describes the
            systems delivered and outcomes achieved. It is not a named-client
            endorsement, and figures are shown only where Syntex can publish them.
          </p>
        </div>
      )}

      <section className="wrap pdt-body">
        <div className="pdt-main">
          <Reveal>
            <h2>Overview</h2>
            {p.body ? <p className="pdt-lead">{p.body}</p> : <Unverified label="Deployment overview" />}
          </Reveal>

          {Array.isArray(p.systems) && p.systems.length > 0 && (
            <Reveal className="pdt-block">
              <h2>Systems delivered</h2>
              <ul className="pdt-list">
                {p.systems.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </Reveal>
          )}

          {Array.isArray(p.outcomes) && p.outcomes.length > 0 && (
            <Reveal className="pdt-block">
              <h2>Outcomes</h2>
              <ul className="pdt-outcomes">
                {p.outcomes.map((o) => <li key={o}>{o}</li>)}
              </ul>
            </Reveal>
          )}
        </div>

        <aside className="pdt-aside" aria-label="Record summary">
          <div className="pdt-card">
            <span className="pdt-card-label">Record</span>
            <dl>
              {p.sector && <div><dt>Sector</dt><dd>{p.sector}</dd></div>}
              {isVerified && p.reach && <div><dt>Reach</dt><dd>{p.reach}</dd></div>}
              {isVerified && p.status && <div><dt>Status</dt><dd>{p.status}</dd></div>}
              <div><dt>Evidence</dt><dd>{isVerified ? 'Publishable' : 'Confidential'}</dd></div>
            </dl>
            <Link to="/contact" className="btn btn-primary pdt-cta">Request a reference</Link>
          </div>
        </aside>
      </section>

      <CtaBand
        heading="Need something similar delivered and supported?"
        primaryLabel="Talk to Syntex"
        primary="/contact"
      />
    </>
  )
}
