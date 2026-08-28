import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Breadcrumbs from '../components/Breadcrumbs'
import { projects, serviceAreas, industries } from '../data/site'
import './pages.css'
export default function ProjectDetail(){
  const { slug }=useParams();const project=projects.find(p=>p.slug===slug)
  if(!project)return <Navigate to="/projects" replace/>
  const services=(project.services||[]).map(idx=>serviceAreas[idx]).filter(Boolean)
  const industry=industries.find(i=>i.slug===project.industry);const scenario=!project.verified
  return(<><section className="page-header"><div className="wrap"><Breadcrumbs items={[{label:'Projects',to:'/projects'},{label:project.title}]}/><div className="pd-status-row"><span className="eyebrow">{project.category}</span><span className={`pd-status ${scenario?'is-scenario':'is-verified'}`}>{scenario?'Engagement scenario':project.status}</span></div><h1>{project.title}</h1><p className="page-lead">{project.overview}</p></div></section>
  {scenario&&<section className="wrap"><Reveal className="pd-notice">Representative scenario. This illustrates the kind of engagement Syntex delivers. The specific client, location and figures are not publicly published.</Reveal></section>}
  <section className="wrap detail-body"><div className="detail-main">{services.length>0&&<Reveal><span className="detail-kicker">Systems involved</span><div className="pd-service-list">{services.map(s=><Link key={s.slug} to={s.url} className="pd-service"><span className="sold-service-cat">{s.category}</span><h3>{s.title}</h3><p>{s.intro}</p></Link>)}</div></Reveal>}</div>
    <aside className="detail-rail"><dl className="pd-facts"><div><dt>Category</dt><dd>{project.category}</dd></div><div><dt>Status</dt><dd>{scenario?'Scenario':project.status}</dd></div>{industry&&<div><dt>Sector</dt><dd><Link to={`/industries/${industry.slug}`}>{industry.short}</Link></dd></div>}{project.meta?.map((m,i)=><div key={i}><dt>Detail</dt><dd>{m}</dd></div>)}</dl><Link to="/contact" className="btn btn-primary" style={{width:'100%',justifyContent:'center'}}>Discuss a similar project</Link></aside></section>
  <CtaBand/></>)
}
