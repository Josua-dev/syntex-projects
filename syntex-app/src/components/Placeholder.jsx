import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import CtaBand from './CtaBand'
import Breadcrumbs from './Breadcrumbs'
import './Placeholder.css'
export default function Placeholder({eyebrow='Coming soon',title,description,breadcrumbs=[],suggestions=[]}){
  return(<><section className="page-header ph-header"><div className="wrap">{breadcrumbs.length>0&&<Breadcrumbs items={breadcrumbs}/>}<span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{description&&<p className="page-lead">{description}</p>}</div></section>
  <section className="wrap ph-body"><Reveal className="ph-status glass"><span className="ph-status-dot" aria-hidden="true"/><p>This section is being prepared with verified content. We publish information here only once it can be substantiated.</p></Reveal>
  {suggestions.length>0&&<Reveal className="ph-suggestions" delay={80}><h2>In the meantime</h2><div className="ph-grid">{suggestions.map(s=><Link key={s.to} to={s.to} className="ph-card"><h3>{s.label}</h3>{s.note&&<p>{s.note}</p>}<span className="ph-go">Go →</span></Link>)}</div></Reveal>}</section>
  <CtaBand heading="Looking for something specific?" primaryLabel="Talk to Syntex" primary="/contact"/></>)
}
