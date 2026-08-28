import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Breadcrumbs from '../components/Breadcrumbs'
import { serviceAreas, solutions } from '../data/site'
import './pages.css'
export default function ServiceDetail(){
  const { slug }=useParams();const service=serviceAreas.find(s=>s.slug===slug)
  if(!service)return <Navigate to="/services" replace/>
  const related=solutions.filter(sol=>sol.services.includes(slug))
  const siblings=serviceAreas.filter(s=>s.category===service.category&&s.slug!==slug).slice(0,4)
  return(<><section className="page-header"><div className="wrap"><Breadcrumbs items={[{label:'Services',to:'/services'},{label:service.category},{label:service.title}]}/><span className="eyebrow">{service.category}</span><h1>{service.title}</h1><p className="page-lead">{service.intro}</p></div></section>
  <section className="wrap detail-body"><div className="detail-main"><Reveal><span className="detail-kicker">What it is</span><p className="detail-lead">{service.body}</p></Reveal>
    {service.keywords?.length>0&&<Reveal className="detail-tags"><span className="detail-kicker">Focus areas</span><ul>{service.keywords.map(k=><li key={k}>{k}</li>)}</ul></Reveal>}</div>
    <aside className="detail-rail" aria-label="Related">{related.length>0&&<div className="rail-block glass"><h2 className="rail-title">Part of these solutions</h2><ul>{related.map(sol=><li key={sol.slug}><Link to={`/solutions/${sol.slug}`}><span>{sol.title}</span><em>{sol.lens}</em></Link></li>)}</ul></div>}
    <div className="rail-block rail-cta"><h2 className="rail-title">Scope this capability</h2><p>Tell us the environment you're working in and we'll map it to a delivery plan.</p><Link to="/contact" className="btn btn-primary">Talk to Syntex</Link></div></aside></section>
  {siblings.length>0&&<section className="wrap siblings"><div className="siblings-head"><span className="rule"/><h2>More in {service.category}</h2></div><div className="siblings-grid">{siblings.map(s=><Link key={s.slug} to={s.url} className="sibling-card"><h3>{s.title}</h3><p>{s.intro}</p><span className="card-go">View service →</span></Link>)}</div></section>}
  <CtaBand/></>)
}
