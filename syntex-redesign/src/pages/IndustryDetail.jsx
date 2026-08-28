import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Unverified from '../components/Unverified'
import { industries, serviceAreas } from '../data/site'
import './IndustryDetail.css'

/*
  SYNTEX — Industry detail (/industries/:slug).
  Verified industry from site.js. Shows the challenge, how Syntex responds,
  and the relevant capability areas. Missing content → <Unverified/>.
*/
export default function IndustryDetail() {
  const { slug } = useParams()
  const ind = industries.find((i) => i.slug === slug)
  if (!ind) return <Navigate to="/industries" replace />

  // Link this sector to capability areas it references (if provided), else show
  // a curated subset of verified serviceAreas.
  const areas = Array.isArray(ind.services) && ind.services.length
    ? ind.services.map((s) => serviceAreas.find((a) => a.slug === s)).filter(Boolean)
    : serviceAreas.slice(0, 3)

  return (
    <>
      <section className="idt-header">
        <div className="wrap">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/industries">Industries</Link>
            <span aria-hidden="true">/</span>
            <span>{ind.short || ind.title}</span>
          </nav>
          <span className="eyebrow on-dark">Industry</span>
          <h1>{ind.title || ind.short}</h1>
          <p className="idt-intro">{ind.intro}</p>
        </div>
      </section>

      <section className="wrap idt-body">
        <div className="idt-main">
          <Reveal>
            <h2>The challenge</h2>
            {ind.challenge ? <p className="idt-lead">{ind.challenge}</p> : <Unverified label="Sector challenge detail" />}
          </Reveal>

          <Reveal className="idt-block">
            <h2>How Syntex responds</h2>
            {ind.response ? (
              <p>{ind.response}</p>
            ) : (
              <p>
                We combine the capability areas below into a single supported
                environment — designed to sector requirements, integrated with
                existing systems, and maintained through their lifecycle.
              </p>
            )}
          </Reveal>
        </div>

        <aside className="idt-aside" aria-label="Relevant capabilities">
          <span className="idt-aside-label">Relevant capabilities</span>
          <ul className="idt-areas">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link to={a.url}>
                  <span className="idt-area-cat">{a.category}</span>
                  <span className="idt-area-title">{a.title} →</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary idt-cta">Discuss this sector</Link>
        </aside>
      </section>

      <CtaBand
        heading={`Delivering technology into ${(ind.short || ind.title).toLowerCase()}?`}
        primaryLabel="Talk to Syntex"
        primary="/contact"
      />
    </>
  )
}
