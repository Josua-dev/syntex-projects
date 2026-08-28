import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { hardware } from '../data/site'
import './pages.css'
export default function Hardware(){
  return(<><section className="page-header"><div className="wrap"><span className="eyebrow">Hardware</span><h1>The hardware that runs the system.</h1><p className="page-lead">{hardware.intro}</p></div></section>
  <section className="wrap hw-list">{hardware.categories.map((cat,i)=><Reveal as="article" key={cat.slug} delay={i*70} className="hw-cat"><div className="hw-cat-head"><span className="hw-cat-n">{String(i+1).padStart(2,'0')}</span><h2>{cat.title}</h2></div><p className="hw-cat-note">{cat.note}</p><div className="hw-brands"><span className="hw-brands-label">Sourced from</span><ul>{cat.brands.map(b=><li key={b}>{b}</li>)}</ul></div></Reveal>)}</section>
  <section className="hw-principle"><div className="wrap"><Reveal><span className="eyebrow">How we specify</span><p className="hw-principle-text">Hardware is specified against the workload a system is being deployed for, then procured and delivered to site <span>alongside the software rollout</span>.</p></Reveal></div></section>
  <CtaBand heading="Need hardware specified for a deployment?" primaryLabel="Talk to Syntex" primary="/contact"/></>)
}
