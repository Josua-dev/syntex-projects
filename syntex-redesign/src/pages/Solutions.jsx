import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { solutions, serviceAreas } from '../data/site'
import './Solutions.css'

const withServices = solutions.map((sol) => ({
  ...sol,
  areas: sol.services.map((slug) => serviceAreas.find((s) => s.slug === slug)).filter(Boolean),
}))
const LENSES = ['By Capability', 'By Function']

function SolutionRow({ sol, index }) {
  const reduce = useReducedMotion()
  const flip = index % 2 === 1
  return (
    <Reveal className={`sol-row ${flip ? 'is-flipped' : ''}`}>
      <div className="sol-row-body">
        <span className="sol-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="eyebrow">{sol.lens}</span>
        <h3>{sol.title}</h3>
        <p className="sol-intro">{sol.intro}</p>
        <p className="sol-desc">{sol.body}</p>
        <Link to={`/solutions/${sol.slug}`} className="sol-link">Explore {sol.title} →</Link>
      </div>
      <div className="sol-row-stack" aria-label={`Systems in ${sol.title}`}>
        <div className="sol-stack-label">Composed of</div>
        <ul>
          {sol.areas.map((a, i) => (
            <motion.li key={a.slug}
              initial={reduce ? false : { opacity: 0, x: flip ? -10 : 10 }} whileInView={reduce ? false : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}>
              <Link to={a.url}><span className="sol-stack-cat">{a.category}</span><span className="sol-stack-title">{a.title}</span></Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default function Solutions() {
  return (
    <>
      <section className="sol-hero">
        <div className="wrap sol-hero-grid">
          <div><span className="eyebrow">Solutions</span><h1>How Syntex solves specific business and technical problems.</h1></div>
          <p className="sol-hero-lead">Each solution below is a problem-lens over the systems we design, integrate and support — enterprise, security, utility and the hardware that runs them. Every capability shown traces to work Syntex actually delivers.</p>
        </div>
      </section>
      <section className="wrap sol-index-rail" aria-label="Solutions index">
        {withServices.map((sol, i) => (
          <a key={sol.slug} href={`#${sol.slug}`} className="sol-chip"><span className="sol-chip-n">{String(i + 1).padStart(2, '0')}</span>{sol.title}</a>
        ))}
      </section>
      {LENSES.map((lens) => (
        <section key={lens} className="wrap sol-group">
          <div className="sol-group-head"><span className="sol-group-rule" /><h2>{lens}</h2></div>
          {withServices.filter((s) => s.lens === lens).map((sol, i) => (
            <div id={sol.slug} key={sol.slug}><SolutionRow sol={sol} index={i} /></div>
          ))}
        </section>
      ))}
      <CtaBand heading="Have a systems problem to solve?" primaryLabel="Talk to Syntex" primary="/contact" />
    </>
  )
}
