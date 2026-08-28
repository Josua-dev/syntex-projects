import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import Breadcrumbs from '../../components/Breadcrumbs'
import { vision } from '../../data/site'
import '../pages.css'
export default function AboutValues(){
  return(<><section className="page-header"><div className="wrap"><Breadcrumbs items={[{label:'About',to:'/about'},{label:'Core Values'}]}/><span className="eyebrow">Core Values</span><h1>The standards we build every system around.</h1><p className="page-lead">The same operating values apply to every engagement, whether a single hardware order or a multi-year systems rollout.</p></div></section>
  <section className="wrap abs-values">{vision.values.map((v,i)=><Reveal key={v.n} delay={i*70} className="abs-value abs-value-lg"><span className="abs-value-n">{v.n}</span><h2>{v.title}</h2><p>{v.text}</p></Reveal>)}</section><CtaBand/></>)
}
