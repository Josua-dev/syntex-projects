import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'
import { projects } from '../data/site'
import './pages.css'
import './Projects.css'  // Premium Projects page styling
const verified=projects.filter(p=>p.verified),scenarios=projects.filter(p=>!p.verified)
function Card({p,scenario}){return(<Link to={`/projects/${p.slug}`} className={`proj-card ${scenario?'':'is-verified'}`}><div className="proj-card-top"><span className="proj-cat">{p.category}</span><span className={`proj-status ${scenario?'is-scenario':''}`}>{scenario?'Scenario':p.status}</span></div><h3>{p.title}</h3><p>{p.overview}</p><div className="proj-meta">{p.meta.map(m=><span key={m}>{m}</span>)}</div><span className="card-go">View detail →</span></Link>)}
export default function Projects(){
  return(<><section className="page-header"><div className="wrap"><span className="eyebrow">Projects</span><h1>Work that reflects how Syntex delivers.</h1><p className="page-lead">One published deployment and a set of representative engagement scenarios. Client identities are not publicly disclosed.</p></div></section>
    {verified.length>0&&<section className="wrap block"><div className="siblings-head"><span className="rule"/><h2>Verified deployment</h2></div><div className="proj-grid">{verified.map(p=><Card key={p.slug} p={p}/>)}</div></section>
    {scenarios.length>0&&<section className="wrap block"><div className="siblings-head"><span className="rule"/><h2>Engagement scenarios</h2></div><p className="block-note">Representative of the work Syntex delivers. Specific clients, locations and figures are illustrative and not publicly published.</p><div className="proj-grid">{scenarios.map(p=><Card key={p.slug} p={p} scenario/>)}</div></section>
    <CtaBand heading="Have a project to scope?" primaryLabel="Talk to Syntex" primary="/contact"/></>)
  }