import { useParams, Link, Navigate } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Breadcrumbs from '../components/Breadcrumbs'
import { solutions, serviceAreas } from '../data/site'
import './pages.css'
export default function SolutionDetail(){
  const { slug }=useParams();const solution=solutions.find(s=>s.slug===slug)
  if(!solution)return <Navigate to="/solutions" replace/>
  const areas=solution.services.map(sl=>serviceAreas.find(s=>s.slug===sl)).filter(Boolean)
  const related=solutions.filter(s=>s.lens===solution.lens&&s.slug!==slug)
  return(<><section className="page-header"><div className="wrap"><Breadcrumbs items={[{label:'Solutions',to:'/solutions'},{label:solution.title}]}/><span className="eyebrow">{solution.lens}</span><h1>{solution.title}</h1><p className="page-lead">{solution.intro}</p></div></section>
  <section className="wrap detail-approach"><Reveal><span className="detail-kicker">The approach</span><p className="detail-lead">{solution.body}</p></Reveal></section>
  <section className="wrap"><Reveal className="siblings-head"><span className="rule"/><h2>What this solution is composed of</h2></Reveal>
    <div className="sold-stack">{areas.map((a,i)=><Reveal as="article" key={a.slug} delay={i*60} className="sold-service"><div className="sold-service-index">{String(i+1).padStart(2,'0')}</div><div><span className="sold-service-cat">{a.category}</span><h3>{a.title}</h3><p className="sold-service-intro">{a.intro}</p><p className="sold-service-detail">{a.body}</p><Link to={a.url} className="sol-link">Full service detail →</Link></div></Reveal>)}</div></section>
  {related.length>0&&<section className="wrap siblings"><div className="siblings-head"><span className="rule"/><h2>More {solution.lens.toLowerCase()} solutions</h2></div><div className="siblings-grid">{related.map(r=><Link key={r.slug} to={`/solutions/${r.slug}`} className="sibling-card"><h3>{r.title}</h3><p>{r.intro}</p><span className="card-go">Explore →</span></Link>)}</div></section>}
  <CtaBand/></>)
}
