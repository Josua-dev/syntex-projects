import { Link } from 'react-router-dom'
export default function CtaBand({heading='Let\u2019s engineer your next technology environment.',primaryLabel='Talk to Syntex',primary='/contact',secondaryLabel,secondary}){
  return(<section className="cta-band"><div className="wrap"><h3>{heading}</h3><div className="cta-band-actions">{primary&&<Link to={primary} className="btn btn-primary">{primaryLabel}</Link>}{secondary&&<Link to={secondary} className="btn btn-ghost">{secondaryLabel}</Link>}</div></div></section>)
}
