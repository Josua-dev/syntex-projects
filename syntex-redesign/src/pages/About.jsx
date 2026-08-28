import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { vision, partners, identity } from '../data/site'
import './About.css'

/*
  SYNTEX — About hub, redesigned.
  Built only from verified site.js (identity, vision, partners).
  Layout is art-directed: lede split → vision panel → engineering
  philosophy → focus areas → technology ecosystem. Placeholder
  "people" routes (leadership/team/careers) are intentionally NOT
  surfaced here — enterprise buyers distrust "Coming Soon" walls.
*/

const focus = [
  { n: '01', title: 'Security Management Systems',
    text: 'Access control, biometric systems and border control management, including ICT and security audit.' },
  { n: '02', title: 'Enterprise Resource Planning',
    text: 'Unified systems for planning, monitoring and decision-making across core business operations.' },
  { n: '03', title: 'Business & Technology Consulting',
    text: 'Project management, change management and business process re-engineering.' },
  { n: '04', title: 'Hardware Supply & Delivery',
    text: 'Servers, laptops, desktops and printers sourced from technology partners and delivered to site.' },
]

export default function About() {
  return (
    <>
      {/* Lede — split editorial */}
      <section className="about-lede">
        <div className="wrap about-lede-grid">
          <div>
            <span className="eyebrow">About Syntex</span>
            <h1>Who we are</h1>
          </div>
          <div className="about-lede-copy">
            <p>
              {identity.legal} is a Namibian ICT company incorporated in{' '}
              {identity.incorporated}, and a subsidiary of {identity.parent}. We
              solve complex operational and systems challenges, and provide
              solutions that genuinely fit each customer's needs — rather than
              off-the-shelf answers stretched to fit.
            </p>
            <p>
              Project management, change management, business process
              re-engineering and knowledge transfer are run as part of every
              engagement, not offered as separate add-ons.
            </p>
          </div>
        </div>
      </section>

      {/* Vision panel — large type on navy */}
      <section className="wrap">
        <Reveal className="about-vision">
          <span className="eyebrow on-dark">Vision</span>
          <p>{vision.text}</p>
        </Reveal>
      </section>

      {/* Where we work + engineering philosophy */}
      <section className="wrap about-arch">
        <Reveal className="about-arch-row">
          <div>
            <h2>Where we work from</h2>
            <p>
              Headquartered in Klein Windhoek at {identity.hq.line1}, with a team
              sized to stay close to every engagement rather than hand clients off
              to a call centre.
            </p>
            <p>
              The people who scope a project are generally the people accountable
              for its outcome — from the first ICT and security audit through to
              post-deployment support.
            </p>
          </div>
          <div>
            <h2>How we build</h2>
            <p>
              Solutions are built on best practices and international standards,
              with a bias toward systems that a client's own team can operate
              independently once they are live.
            </p>
            <Link to="/about/vision-mission" className="about-inline-link">
              Read our vision &amp; mission →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Focus areas — verified specialties */}
      <section className="about-focus">
        <div className="wrap">
          <Reveal className="about-focus-head">
            <span className="eyebrow">Focus areas</span>
            <h2>What we're built to deliver.</h2>
            <p>Our specialties, as registered with our professional network.</p>
          </Reveal>
          <div className="about-focus-grid">
            {focus.map((f, i) => (
              <Reveal key={f.n} delay={i * 60} className="about-focus-item">
                <span className="aff-n">{f.n}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values row */}
      <section className="wrap about-values">
        <Reveal className="about-values-head">
          <span className="eyebrow">Operating values</span>
          <h2>The principles behind every engagement.</h2>
        </Reveal>
        <div className="about-values-grid">
          {vision.values.map((v, i) => (
            <Reveal key={v.n} delay={i * 50} className="about-value">
              <span className="av-n">{v.n}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Technology ecosystem — accurate count */}
      <section className="about-partners">
        <div className="wrap">
          <Reveal className="about-partners-head">
            <span className="eyebrow">Technology ecosystem</span>
            <h2>Platforms behind our delivery.</h2>
            <p>
              Syntex delivery spans {partners.length} vendor platforms and
              technologies across our engagements. Formal partnership tiers are
              shown only where publicly documented.
            </p>
          </Reveal>
          <div className="about-partner-wall">
            {partners.map((p) => (
              <span key={p} className="about-partner">{p}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Want to understand how we'd approach your environment?"
        primaryLabel="Talk to Syntex"
        primary="/contact"
      />
    </>
  )
}
