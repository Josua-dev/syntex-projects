import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import Breadcrumbs from '../../components/Breadcrumbs'
import { vision, identity } from '../../data/site'
import '../pages.css'
export default function AboutVision(){
  return(<><section className="page-header"><div className="wrap"><Breadcrumbs items={[{label:'About',to:'/about'},{label:'Vision & Mission'}]}/><span className="eyebrow">Vision & Mission</span><h1>What Syntex is working toward.</h1></div></section>
  <section className="wrap abs-lead"><Reveal><p className="abs-vision">{vision.text}</p><p className="abs-sub">{identity.legal} pursues this through {vision.values.length} operating principles applied to every engagement.</p></Reveal></section>
  <section className="wrap abs-values">{vision.values.map((v,i)=><Reveal key={v.n} delay={i*70} className="abs-value"><span className="abs-value-n">{v.n}</span><h2>{v.title}</h2><p>{v.text}</p></Reveal>)}</section><CtaBand/></>)
}
