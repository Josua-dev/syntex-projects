import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { projects } from '../data/site'
import './Projects.css'

/*
  SYNTEX — Projects / deployments.
  Honest-projects handling: only records explicitly verified in site.js are
  presented as published deployment evidence (e.g. the border-control record
  running in 10+ countries). Everything else is clearly framed as an
  "engagement record — client not publicly named", never as a named case study
  with implied endorsement. Leads with capability, not a defensive disclaimer.
*/
const verified = projects.filter((p) => p.verified === true)
const records = projects.filter((p) => p.verified !== true)

export default function Projects() {
  return (
    <>
      <section className="prj-hero">
        <div className="wrap">
          <span className="eyebrow">Projects &amp; deployments</span>
          <h1>Where Syntex technology is deployed.</h1>
          <p>
            A view of the environments Syntex has delivered and supports. Where a
            client is under confidentiality, the deployment is described by its
            systems and outcomes rather than named — we don't imply endorsements
            we can't publish.
          </p>
        </div>
      </section>

      {/* Verified, publishable deployments */}
      {verified.length > 0 && (
        <section className="wrap prj-verified">
          <Reveal className="prj-sec-head">
            <span className="prj-rule" />
            <h2>Published deployments</h2>
          </Reveal>
          <div className="prj-grid">
            {verified.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <Link to={`/projects/${p.slug}`} className="prj-card is-verified">
                  <span className="prj-badge">Verified deployment</span>
                  <h3>{p.title}</h3>
                  <p>{p.summary || p.intro}</p>
                  <dl className="prj-meta">
                    {p.reach && <div><dt>Reach</dt><dd>{p.reach}</dd></div>}
                    {p.status && <div><dt>Status</dt><dd>{p.status}</dd></div>}
                  </dl>
                  <span className="prj-go">View deployment →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Confidential / not-yet-published engagement records */}
      {records.length > 0 && (
        <section className="prj-records">
          <div className="wrap">
            <Reveal className="prj-sec-head">
              <span className="prj-rule" />
              <h2>Engagement records</h2>
              <p className="prj-sec-note">
                Client not publicly named. Described by systems and outcomes.
              </p>
            </Reveal>
            <div className="prj-grid">
              {records.map((p, i) => (
                <Reveal key={p.slug} delay={i * 50}>
                  <Link to={`/projects/${p.slug}`} className="prj-card">
                    <span className="prj-badge is-muted">Engagement record</span>
                    <h3>{p.title}</h3>
                    <p>{p.summary || p.intro}</p>
                    <span className="prj-go">View record →</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        heading="Want a reference relevant to your sector?"
        primaryLabel="Talk to Syntex"
        primary="/contact"
      />
    </>
  )
}
