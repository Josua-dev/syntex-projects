import { Link } from 'react-router-dom'
import { identity } from '../data/site'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="wrap foot-inner">
        <div className="foot-brand">
          <Link to="/" className="foot-logo" aria-label="Syntex Technologies — home">
            <img src="/img/syntex-logo.png" alt="" width="200" height="34" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            <span className="foot-wordmark">Syn<b>tex</b></span>
          </Link>
          <p>{identity.legal}, a Namibian ICT systems integrator incorporated in {identity.incorporated}, delivering enterprise, security, utility and consulting systems from {identity.region}, {identity.country}.</p>
          {identity.parent && <p className="foot-parent">A subsidiary of {identity.parent}.</p>}
        </div>
        <nav className="foot-col" aria-label="Company">
          <h2 className="foot-title">Company</h2>
          <ul>
            <li><Link to="/about">About Syntex</Link></li>
            <li><Link to="/about/story">Our Story</Link></li>
            <li><Link to="/about/vision-mission">Vision &amp; Mission</Link></li>
            <li><Link to="/about/values">Core Values</Link></li>
          </ul>
        </nav>
        <nav className="foot-col" aria-label="Solutions">
          <h2 className="foot-title">Solutions</h2>
          <ul>
            <li><Link to="/solutions">All Solutions</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/hardware">Hardware Supply</Link></li>
          </ul>
        </nav>
        <div className="foot-col foot-contact">
          <h2 className="foot-title">Contact</h2>
          <ul>
            <li><a href={`mailto:${identity.emailSales}`}>{identity.emailSales}</a></li>
            <li><a href={`tel:${identity.phoneHref}`}>{identity.phone}</a></li>
            <li><address>{identity.hq.line1}<br />{identity.hq.line2}<br />{identity.hq.line3}</address></li>
          </ul>
          <Link to="/contact" className="foot-cta">Talk to Syntex →</Link>
        </div>
      </div>
      <div className="wrap foot-bottom">
        <span>© {year} {identity.legal}. All rights reserved.</span>
        <span className="foot-loc">{identity.region}, {identity.country}</span>
      </div>
    </footer>
  )
}
