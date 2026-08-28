import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { identity, serviceAreas } from '../data/site'
import './pages.css'
const border=serviceAreas.find(s=>s.slug==='border-control-management')
export default function Global(){
  return(<><section className="page-header"><div className="wrap"><span className="eyebrow">Global reach</span><h1>Engineered in Windhoek. Deployed across borders.</h1><p className="page-lead">Syntex operates from {identity.region}, {identity.country}, with a stated focus on Southern Africa — and systems that reach considerably further.</p></div></section>
  <section className="wrap gl-facts"><Reveal className="gl-fact"><span className="gl-fact-num">10+</span><div><h2>Countries with border deployments</h2><p>{border?.intro}</p><Link to={border?.url||'/services'} className="sol-link">Border Control Management →</Link></div></Reveal>
  <Reveal className="gl-fact" delay={80}><span className="gl-fact-num">SADC</span><div><h2>Southern Africa focus</h2><p>Syntex's stated vision is to be a trusted provider of technology solutions across Southern Africa, measured by innovation, accountability and consistency.</p><Link to="/about" className="sol-link">About Syntex →</Link></div></Reveal>
  <Reveal className="gl-fact" delay={160}><span className="gl-fact-num">1</span><div><h2>Head office</h2><p>{identity.hq.line1}, {identity.hq.line2}, {identity.hq.line3}.</p><Link to="/contact#locations" className="sol-link">Find us →</Link></div></Reveal></section>
  <CtaBand heading="Operating across the region?" primaryLabel="Talk to Syntex" primary="/contact"/></>)
}
