import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Breadcrumbs from '../components/Breadcrumbs'
import { industries, projects, serviceAreas } from '../data/site'
import './pages.css'
export default function IndustryDetail(){
  const { slug }=useParams();const industry=industries.find(i=>i.slug===slug)
  if(!industry)return <Navigate to="/industries" replace/>
  const sp=projects.filter(p=>p.industry===slug);const verified=sp.filter(p=>p.verified);const scenarios=sp.filter(p=>!p.verified)
  const rs=p=>(p.services||[]).map(idx=>serviceAreas[idx]).filter(Boolean)
  return(<><section className="page-header"><div className="wrap"><Breadcrumbs items={[{label:'Industries',to:'/industries'},{label:industry.short}]}/><span className="eyebrow">Industry</span><h1>{industry.title}</h1><p className="page-lead">{industry.intro}</p></div></section>
  <section className="wrap"><Reveal className="note-card glass"><span className="note-label">On the record</span><p>{industry.note}</p></Reveal></section>
  {verified.length>0&&<section className="wrap block"><div className="siblings-head"><span className="rule"/><h2>Verified deployments</h2></div><div className="proj-grid">{verified.map(p=><article key={p.slug} className="proj-card is-verified"><span className="proj-status">{p.status}</span><h3>{p.title}</h3><p>{p.overview}</p><ul className="proj-services">{rs(p).map(s=><li key={s.slug}><Link to={s.url}>{s.title}</Link></li>)}</ul></article>)}</div></section>}
  {scenarios.length>0&&<section className="wrap block"><div className="siblings-head"><span className="rule"/><h2>Typical engagement scenarios</h2></div><p className="block-note">Representative of the work Syntex delivers. Client identities and specific deployments are not publicly published.</p><div className="proj-grid">{scenarios.map(p=><article key={p.slug} className="proj-card"><span className="proj-status is-scenario">Scenario</span><h3>{p.title}</h3><p>{p.overview}</p><ul className="proj-services">{rs(p).map(s=><li key={s.slug}><Link to={s.url}>{s.title}</Link></li>)}</ul></article>)}</div></section>}
  <CtaBand/></>)
}
