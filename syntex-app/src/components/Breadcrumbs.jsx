import { Link } from 'react-router-dom'
import { ArrowIcon } from './BrandMark'
export default function Breadcrumbs({items=[]}){
  const full=[{label:'Home',to:'/'},...items]
  return(<nav className="breadcrumbs" aria-label="Breadcrumb"><ol style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:8,listStyle:'none',margin:0,padding:0}}>{full.map((it,i)=>{const last=i===full.length-1;return(<li key={i} style={{display:'flex',alignItems:'center',gap:8}}>{it.to&&!last?<Link to={it.to}>{it.label}</Link>:<span aria-current={last?'page':undefined}>{it.label}</span>}{!last&&<ArrowIcon aria-hidden="true"/>}</li>)})}</ol></nav>)
}
