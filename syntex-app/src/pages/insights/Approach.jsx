import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import Breadcrumbs from '../../components/Breadcrumbs'
import { process, vision } from '../../data/site'
import '../pages.css'
export default function InsightsApproach(){
  return(<><section className="page-header"><div className="wrap"><Breadcrumbs items={[{label:'Insights',to:'/insights'},{label:'Approach'}]}/><span className="eyebrow">Insights · Approach</span><h1>How Syntex delivers complex systems.</h1><p className="page-lead">Syntex solves complex business and systems problems using a proven process built on best practices and international standards.</p></div></section>
  <section className="wrap home-process"><ol className="home-timeline">{process.map((st,i)=><Reveal as="li" key={st.n} delay={i*60} className="home-step"><div className="home-step-marker"><span>{st.n}</span></div><div className="home-step-body"><h2 style={{fontSize:'1.3rem',margin:'6px 0 8px'}}>{st.title}</h2><p>{st.text}</p></div></Reveal>)}</ol></section>
  <section className="about-vision"><div className="wrap"><Reveal className="about-vision-head"><span className="eyebrow">The standards we hold</span><p className="about-vision-text">{vision.text}</p></Reveal><div className="about-values">{vision.values.map((v,i)=><Reveal key={v.n} delay={i*70} className="about-value"><span className="about-value-n">{v.n}</span><h3>{v.title}</h3><p>{v.text}</p></Reveal>)}</div></div></section>
  <CtaBand/></>)
}
