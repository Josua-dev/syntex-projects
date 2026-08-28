import { Link } from 'react-router-dom'
import './NotFound.css'

/*
  SYNTEX — 404. On-brand, useful (offers the primary routes), not a dead end.
*/
export default function NotFound() {
  return (
    <section className="nf">
      <div className="wrap nf-inner">
        <span className="eyebrow">Error 404</span>
        <h1>This page isn't part of the system.</h1>
        <p>
          The address you followed doesn't match a page on the Syntex site. It may
          have moved, or the link may be incomplete.
        </p>
        <div className="nf-links">
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/solutions" className="btn btn-ghost">Explore solutions</Link>
          <Link to="/contact" className="btn btn-ghost">Talk to Syntex</Link>
        </div>
        <nav className="nf-map" aria-label="Site sections">
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/hardware">Hardware</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </section>
  )
}
