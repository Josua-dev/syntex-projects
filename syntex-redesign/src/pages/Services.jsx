import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { serviceAreas } from '../data/site'
import './Services.css'

/*
  SYNTEX — Services index.
  Rebuilt from the verified serviceAreas[] in site.js. Instead of the old
  "category → cards → category → cards" repetition, services are grouped by
  category and rendered as editorial rows (large image slot + outcome-led
  copy + the specific systems inside each area). No invented services.
*/

// Group verified service areas by their category, preserving order.
const byCategory = serviceAreas.reduce((acc, s) => {
  (acc[s.category] ||= []).push(s)
  return acc
}, {})
const categories = Object.keys(byCategory)

export default function Services() {
  return (
    <>
      <section className="svc-hero">
        <div className="wrap">
          <span className="eyebrow">Services</span>
          <h1>Enterprise systems, security and infrastructure — end to end.</h1>
          <p>
            Syntex delivers each area below as a complete capability: design,
            integration, deployment and ongoing support, with project and change
            management built in. Explore any area for the systems it includes.
          </p>
        </div>
      </section>

      {/* Category index rail */}
      <nav className="wrap svc-rail" aria-label="Service categories">
        {categories.map((cat, i) => (
          <a key={cat} href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`} className="svc-chip">
            <span className="svc-chip-n">{String(i + 1).padStart(2, '0')}</span>
            {cat}
          </a>
        ))}
      </nav>

      {categories.map((cat) => (
        <section
          key={cat}
          id={cat.toLowerCase().replace(/\s+/g, '-')}
          className="wrap svc-category"
        >
          <div className="svc-cat-head">
            <span className="svc-cat-rule" />
            <h2>{cat}</h2>
          </div>

          {byCategory[cat].map((s, i) => (
            <Reveal key={s.slug} className={`svc-row ${i % 2 ? 'is-flipped' : ''}`}>
              {/* Visual slot — real image if present, else a labelled schematic panel */}
              <Link to={s.url} className="svc-row-visual" aria-hidden="true" tabIndex={-1}>
                <img
                  src={`/img/services/${s.slug}.jpg`}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.classList.add('is-fallback')
                  }}
                />
                <span className="svc-visual-tag">{s.category}</span>
              </Link>

              <div className="svc-row-body">
                <h3>{s.title}</h3>
                <p className="svc-intro">{s.intro}</p>
                {s.body && <p className="svc-desc">{s.body}</p>}

                {Array.isArray(s.systems) && s.systems.length > 0 && (
                  <ul className="svc-systems">
                    {s.systems.map((sys) => (
                      <li key={sys}>{sys}</li>
                    ))}
                  </ul>
                )}

                <Link to={s.url} className="svc-link">
                  Explore {s.title} →
                </Link>
              </div>
            </Reveal>
          ))}
        </section>
      ))}

      <CtaBand
        heading="Not sure which capability fits your problem?"
        primaryLabel="Talk to Syntex"
        primary="/contact"
      />
    </>
  )
}
