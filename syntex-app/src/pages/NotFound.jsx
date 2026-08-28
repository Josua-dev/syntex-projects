import { Link } from 'react-router-dom'
import './pages.css'
export default function NotFound(){
  return(<section className="nf"><div className="wrap nf-inner"><span className="eyebrow">Error 404</span><h1 className="nf-code">Route not found.</h1><p className="nf-text">The page you're looking for doesn't exist or may have moved.</p><div className="nf-links"><Link to="/" className="btn btn-primary">Back to home</Link><Link to="/solutions" className="btn btn-ghost nf-ghost">Explore solutions</Link></div></div></section>)
}
