import { Link } from 'react-router-dom'
import './BrandLogo.css'
export default function BrandLogo({variant='full',tone='dark',to='/',className=''}){
  const inner=(<span className={`brandlogo brandlogo-${tone} ${className}`}><img className="brandlogo-mark" src="/images/syntex-mark.png" alt="" width="40" height="40" loading="lazy" aria-hidden="true"/>{variant!=='mark'&&<span className="brandlogo-text"><span className="brandlogo-name">Syntex <b>Technologies</b></span>{variant==='tag'&&<span className="brandlogo-tag">Synergy to Excel</span>}</span>}</span>)
  return to?<Link to={to} className="brandlogo-link" aria-label="Syntex Technologies — home">{inner}</Link>:inner
}
