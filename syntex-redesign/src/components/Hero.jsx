import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { heroMessage, company } from '../data/site'
import './Hero.css'

const NODES = [
  { id: 'core', x: 50, y: 50, label: 'Core' },
  { id: 'sec',  x: 20, y: 26, label: 'Security' },
  { id: 'erp',  x: 80, y: 24, label: 'Enterprise' },
  { id: 'util', x: 16, y: 74, label: 'Utility' },
  { id: 'brd',  x: 82, y: 72, label: 'Border' },
  { id: 'hw',   x: 50, y: 88, label: 'Hardware' },
]
const EDGES = [['core','sec'],['core','erp'],['core','util'],['core','brd'],['core','hw']]

function Topology() {
  const reduce = useReducedMotion()
  const node = (id) => NODES.find((n) => n.id === id)
  return (
    <svg className="hero-topo" viewBox="0 0 100 100" role="img"
         aria-label="Systems integration topology: a central core connected to security, enterprise, utility, border and hardware nodes.">
      {EDGES.map(([a, b], i) => {
        const A = node(a), B = node(b)
        return (
          <motion.line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} className="hero-edge"
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={reduce ? false : { pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.3 + i * 0.12, ease: 'easeOut' }} />
        )
      })}
      {NODES.map((n, i) => (
        <g key={n.id}>
          <motion.circle cx={n.x} cy={n.y} r={n.id === 'core' ? 3.4 : 2.2}
            className={`hero-node ${n.id === 'core' ? 'is-core' : ''}`}
            initial={reduce ? false : { scale: 0, opacity: 0 }}
            animate={reduce ? false : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: 'backOut' }} />
        </g>
      ))}
    </svg>
  )
}

export default function Hero() {
  const reduce = useReducedMotion()
  const rise = (d = 0) => reduce ? {} : {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: d, ease: [0.16, 1, 0.3, 1] },
  }
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid wrap">
        <div className="hero-copy">
          <motion.p className="eyebrow" {...rise(0)}>{heroMessage.eyebrow}</motion.p>
          <motion.h1 id="hero-title" className="hero-title" {...rise(0.08)}>
            Enterprise systems, <span>engineered</span> for real operations.
          </motion.h1>
          <motion.p className="hero-lead" {...rise(0.16)}>{heroMessage.sub}</motion.p>
          <motion.div className="hero-cta" {...rise(0.24)}>
            <Link to="/solutions" className="btn btn-primary">Explore Solutions</Link>
            <Link to="/contact" className="btn btn-ghost">Talk to Syntex →</Link>
          </motion.div>
          <motion.dl className="hero-stats" {...rise(0.32)}>
            <div><dt>Since</dt><dd>{company.founded}</dd></div>
            <div><dt>Border deployments</dt><dd>10+ countries</dd></div>
            <div><dt>Core areas</dt><dd>Security · Enterprise · Utility</dd></div>
          </motion.dl>
        </div>
        <div className="hero-visual">
          <Topology />
          <div className="hero-visual-caption">
            <span className="hero-visual-label">Systems Integration</span>
            <span>One operating record across security, enterprise and infrastructure.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
