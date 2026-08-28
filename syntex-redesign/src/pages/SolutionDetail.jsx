import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { solutions, serviceAreas } from '../data/site'
import './ServiceDetail.css'

/* /solutions/:slug — reuses ServiceDetail styling. Problem → Technology →
   Capability → Outcome, composed from the verified service areas. */
export default function SolutionDetail() {
  const { slug } = useParams()
  const sol = solutions.find((s) => s.slug === slug)
  if (!sol) return <Navigate to="/solutions" replace />
  const areas = sol.services.map((x) => serviceAreas.find((a) => a.slug === x)).filter(Boolean)

  return (
    <>
      <section className="sd-header">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/solutions">Solutions</Link><span aria-hidden="true">/</span><span>{sol.lens}</span>
          </nav>
          <span className="eyebrow on-dark">{sol.lens}</span>
          <h1>{sol.title}</h1>
          <p className="sd-intro">{sol.intro}</p>
        </div>
      </section>

      <section className="wrap sd-body">
        <div className="sd-main">
          <Reveal><h2>How Syntex solves it</h2><p className="sd-lead">{sol.body}</p></Reveal>
          <Reveal className="sd-block">
            <h2>Systems in this solution</h2>
            <ul className="sd-systems">
              {areas.map((a) => (
                <li key={a.slug}><span className="sd-sys-dot" aria-hidden="true" /><Link to={a.url}>{a.title}</Link></li>
              ))}
            </ul>
          </Reveal>
        </div>
        <aside className="sd-aside" aria-label="Solution summary">
          <div className="sd-card">
            <span className="sd-card-label">Solution</span>
            <h3>{sol.title}</h3>
            <dl>
              <div><dt>Lens</dt><dd>{sol.lens}</dd></div>
              <div><dt>Delivery</dt><dd>Design · Integrate · Deploy · Support</dd></div>
            </dl>
            <Link to="/contact" className="btn btn-primary sd-card-cta">Discuss this solution</Link>
          </div>
        </aside>
      </section>

      <CtaBand heading={`Ready to scope ${sol.title.toLowerCase()}?`} primaryLabel="Talk to Syntex" primary="/contact" />
    </>
  )
}
