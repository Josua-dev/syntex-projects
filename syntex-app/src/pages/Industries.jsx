import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { industries } from '../data/site'
import './pages.css'
import './Industries.css'  // Premium Industries page styling
export default function Industries(){
  return(<><section className="page-header"><div className="wrap"><span className="eyebrow">Industries</span><h1>The capabilities behind every Syntex system.</h1><p className="page-lead">Syntex delivers security, enterprise and utility systems to sectors where availability, audit and scale are non-negotiable.</p></div></section>
    <section className="wrap">{industries.map((ind,i)=><Reveal as="div" key={ind.slug} delay={i*60}><Link to={`/industries/${ind.slug}`} className="ind-row"><span className="ind-row-n">{String(i+1).padStart(2,'0')}</span><div className="ind-row-body"><h2>{ind.title}</h2><p className="ind-row-intro">{ind.intro}</p><p className="ind-row-note">{ind.note}</p></div><span className="ind-row-go" aria-hidden="true">→</span></Link></Reveal>)}</section>
    <CtaBand heading="Building for one of these sectors?" primaryLabel="Talk to Syntex" primary="/contact"/></>)
  }