import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { serviceAreas } from '../data/site'
import './pages.css'
const order=[];serviceAreas.forEach(s=>{if(!order.includes(s.category))order.push(s.category)})
const grouped=order.map(cat=>({category:cat,slug:serviceAreas.find(s=>s.category===cat).categorySlug,items:serviceAreas.filter(s=>s.category===cat)}))
export default function Services(){
  return(<><section className="page-header"><div className="wrap"><span className="eyebrow">Services</span><h1>The capabilities behind every Syntex system.</h1><p className="page-lead">Eleven verified service areas across security, enterprise systems, utility &amp; billing and consulting — each a discrete capability we design, integrate and support end to end.</p></div></section>
  {grouped.map((g,gi)=><section key={g.category} className="wrap svc-group"><Reveal className="svc-group-head"><span className="svc-group-n">{String(gi+1).padStart(2,'0')}</span><h2>{g.category}</h2><span className="svc-group-count">{g.items.length} services</span></Reveal>
    <div className="svc-list">{g.items.map((s,i)=><Reveal as="div" key={s.slug} delay={i*50}><Link to={s.url} className="svc-item"><div className="svc-item-main"><span className="svc-item-n">{g.slug.slice(0,3).toUpperCase()}.{String(i+1).padStart(2,'0')}</span><h3>{s.title}</h3><p>{s.intro}</p></div><span className="svc-item-go" aria-hidden="true">→</span></Link></Reveal>)}</div></section>)}
  <CtaBand heading="Not sure which capability you need?" primaryLabel="Talk to Syntex" primary="/contact"/></>)
}
