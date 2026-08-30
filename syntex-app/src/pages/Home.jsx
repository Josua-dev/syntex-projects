import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { ArrowIcon } from '../components/BrandMark'
import { serviceAreas, partners, process, industries, identity } from '../data/site'
import './Home.css'

const capabilities = serviceAreas.filter(s => s.category !== 'Consulting').slice(0, 6)
const partnersTop = partners.slice(0, 10)

// Signal strip items — real, site-derived facts. No fabrication.
const signalItems = [
  { k: 'REGION',   v: 'Khomas, Namibia' },
  { k: 'OFFICE',   v: '340 Sam Nujoma Drive' },
  { k: 'INC.',     v: identity.incorporated },
  { k: 'BORDER',   v: '10+ countries deployed' },
  { k: 'SUPPORT',  v: 'Mon–Fri 08:00–17:00 SAST' },
  { k: 'STATUS',   v: 'OPERATIONAL', live: true },
]

export default function Home () {
  const reduce = useReducedMotion()
  const rise = (d = 0) => reduce
    ? {}
    : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, delay: d, ease: [0.16, 1, 0.3, 1] } }

  return (<>
    {/* ============================================================
       HERO — Industrial: pitch-black, mono, signal-strip ticker
       ============================================================ */}
    <header className="ind-hero">
      <div className="ind-hero-grid">
        <div className="ind-hero-meta">
          <span className="ind-tag">Namibia · Windhoek</span>
          <span className="ind-tag ind-tag-dim">ict.systems.integrator</span>
        </div>

        <motion.h1 className="ind-h1" {...rise(0)}>
          We engineer<br/>
          <span className="ind-sig">resilient ICT systems</span><br/>
          for Namibia&rsquo;s enterprises.
        </motion.h1>

        <motion.p className="ind-lead" {...rise(0.1)}>
          Syntex Technologies designs, integrates, and supports the infrastructure that keeps mid-market and government operations connected, secure, and available.
        </motion.p>

        <motion.div className="ind-actions" {...rise(0.18)}>
          <Link to="/solutions" className="ind-btn ind-btn-primary">
            Explore Solutions <ArrowIcon/>
          </Link>
          <Link to="/contact" className="ind-btn ind-btn-ghost">
            Talk to Syntex
          </Link>
        </motion.div>

        <motion.dl className="ind-facts" {...rise(0.26)}>
          <div className="ind-fact">
            <dt>Incorporated</dt>
            <dd>{identity.incorporated}</dd>
          </div>
          <div className="ind-fact">
            <dt>Border deployments</dt>
            <dd>10+</dd>
          </div>
          <div className="ind-fact">
            <dt>Head office</dt>
            <dd>Windhoek</dd>
          </div>
        </motion.dl>
      </div>

      {/* SIGNAL STRIP — the differentiator. Mono-typed, looping,
          real-site data. The page reads as a terminal that
          happens to have marketing content. */}
      <div className="ind-signal-strip" role="region" aria-label="Site signal">
        <div className="ind-signal-head">
          <span className="ind-signal-led" aria-hidden="true"/>
          <span className="ind-signal-label">SIGNAL</span>
          <span className="ind-signal-time">{new Date().toISOString().slice(0,10)}</span>
        </div>
        <div className="ind-signal-track">
          <div className="ind-signal-marquee">
            {[...signalItems, ...signalItems].map((s, i) => (
              <span key={i} className={`ind-signal-cell ${s.live ? 'is-live' : ''}`}>
                <span className="ind-signal-k">{s.k}</span>
                <span className="ind-signal-v">{s.v}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>

    {/* ============================================================
       STATEMENT — single line, mono, no decoration
       ============================================================ */}
    <section className="ind-statement">
      <div className="wrap">
        <Reveal>
          <p className="ind-statement-text">
            We design, integrate, and support the infrastructure
            that keeps enterprise and public-sector operations
            <span className="ind-sig"> connected, secure, and available.</span>
          </p>
        </Reveal>
      </div>
    </section>

    {/* ============================================================
       CAPABILITIES — grid, 1px borders, no shadows
       ============================================================ */}
    <section className="wrap ind-caps">
      <Reveal className="ind-caps-head">
        <div>
          <span className="ind-tag">CAPABILITIES</span>
          <h2 className="ind-h2">Solutions across the enterprise technology stack.</h2>
        </div>
        <Link to="/solutions" className="ind-caps-all">View all <ArrowIcon/></Link>
      </Reveal>
      <div className="ind-caps-grid">
        {capabilities.map((s, i) => (
          <Reveal key={s.slug} delay={i * 50}>
            <Link to={s.url} className="ind-cap">
              <div className="ind-cap-head">
                <span className="ind-cap-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="ind-cap-cat">{s.category}</span>
              </div>
              <h3 className="ind-cap-title">{s.title}</h3>
              <p className="ind-cap-intro">{s.intro}</p>
              <span className="ind-cap-go">Explore area <ArrowIcon/></span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>

    {/* ============================================================
       INDUSTRIES — single column, hairline rows (no card grid)
       ============================================================ */}
    <section className="ind-industries">
      <div className="wrap">
        <Reveal>
          <span className="ind-tag">SECTORS</span>
          <h2 className="ind-h2">Industries we serve.</h2>
        </Reveal>
        <ul className="ind-ind-list">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.slug} delay={i * 40}>
              <Link to={`/industries/${ind.slug}`} className="ind-ind-row">
                <span className="ind-ind-n">{String(i + 1).padStart(2, '0')}</span>
                <span className="ind-ind-name">{ind.short}</span>
                <span className="ind-ind-intro">{ind.intro}</span>
                <span className="ind-ind-go"><ArrowIcon/></span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>

    {/* ============================================================
       VALUES — three columns, signal top border, no card chrome
       ============================================================ */}
    <section className="ind-values">
      <div className="wrap">
        <Reveal className="ind-values-head">
          <span className="ind-tag">VALUES</span>
          <h2 className="ind-h2">The standards every system is built around.</h2>
          <p className="ind-values-lead">{identity.legal} applies the same operating values to every engagement, regardless of client size or sector.</p>
        </Reveal>
        <ol className="ind-values-grid">
          {[
            { n: '01', title: 'Innovation', text: 'Solutions matched to the client’s actual constraints and infrastructure, not a fixed product template.' },
            { n: '02', title: 'Accountability', text: 'The team that scopes an engagement stays accountable through delivery, with project and change management structured in from day one.' },
            { n: '03', title: 'Consistency', text: 'The same process discipline applies whether the engagement is a single hardware order or a multi-year systems rollout.' },
          ].map((v, i) => (
            <Reveal as="li" key={v.n} delay={i * 60} className="ind-value">
              <span className="ind-value-n">{v.n}</span>
              <h3 className="ind-value-title">{v.title}</h3>
              <p className="ind-value-text">{v.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    {/* ============================================================
       PROCESS — terminal log, 01..05
       ============================================================ */}
    <section className="ind-process">
      <div className="wrap">
        <Reveal>
          <span className="ind-tag">PROCESS</span>
          <h2 className="ind-h2">A proven delivery sequence.</h2>
        </Reveal>
        <ol className="ind-proc-list">
          {process.map((st, i) => (
            <Reveal as="li" key={st.n} delay={i * 50} className="ind-proc-row">
              <span className="ind-proc-n">{st.n}</span>
              <div className="ind-proc-body">
                <h3 className="ind-proc-title">{st.title}</h3>
                <p className="ind-proc-text">{st.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>

    {/* ============================================================
       PARTNERS — vendor wall, mono-typed
       ============================================================ */}
    <section className="ind-partners">
      <div className="wrap">
        <Reveal>
          <span className="ind-tag">ECOSYSTEM</span>
          <h2 className="ind-h2">Built on the platforms our clients already depend on.</h2>
          <p className="ind-partners-lead">Syntex delivery spans {partners.length} vendor platforms and technologies represented across our engagements.</p>
        </Reveal>
        <ul className="ind-partner-wall">
          {partnersTop.map((p, i) => (
            <motion.li
              key={p}
              className="ind-partner"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={reduce ? false : { opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
            >{p}</motion.li>
          ))}
        </ul>
      </div>
    </section>

    <CtaBand heading="Let’s engineer your next technology environment." primaryLabel="Talk to Syntex" primary="/contact"/>
  </>)
}
