import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { industries } from '../data/site'
import './Industries.css'

/*
  SYNTEX — Industries index.
  Verified industries[] from site.js, presented with a deliberate hierarchy:
  the first (primary) sectors get larger editorial treatment, the rest sit in
  a compact grid. No sector is claimed that isn't backed by real capability.
*/
const primary = industries.slice(0, 3)
const secondary = industries.slice(3)

export default function Industries() {
  return (
    <>
      <section className="ind-hero">
        <div className="wrap">
          <span className="eyebrow">Industries</span>
          <h1>Built for environments where downtime isn't an option.</h1>
          <p>
            Syntex delivers into sectors where security, revenue integrity and
            continuity are non-negotiable — from government border posts to
            utility revenue systems. Each sector below maps to capabilities we
            actually deliver.
          </p>
        </div>
      </section>

      {/* Primary sectors — large editorial cards */}
      <section className="wrap ind-primary">
        {primary.map((ind, i) => (
          <Reveal key={ind.slug} delay={i * 60} className="ind-primary-card">
            <Link to={`/industries/${ind.slug}`}>
              <span className="ind-n">{String(i + 1).padStart(2, '0')}</span>
              <h2>{ind.short || ind.title}</h2>
              <p>{ind.intro}</p>
              <span className="ind-go">Explore sector →</span>
            </Link>
          </Reveal>
        ))}
      </section>

      {/* Secondary sectors — compact grid */}
      {secondary.length > 0 && (
        <section className="ind-secondary">
          <div className="wrap">
            <Reveal className="ind-sec-head">
              <span className="eyebrow">Also serving</span>
              <h2>Additional sectors.</h2>
            </Reveal>
            <div className="ind-sec-grid">
              {secondary.map((ind, i) => (
                <Reveal key={ind.slug} delay={i * 50}>
                  <Link to={`/industries/${ind.slug}`} className="ind-sec-item">
                    <span className="ind-sec-n">{String(primary.length + i + 1).padStart(2, '0')}</span>
                    <h3>{ind.short || ind.title}</h3>
                    <p>{ind.intro}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        heading="Working in a regulated or high-availability sector?"
        primaryLabel="Talk to Syntex"
        primary="/contact"
      />
    </>
  )
}
