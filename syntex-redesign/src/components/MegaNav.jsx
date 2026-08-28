import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { nav } from '../data/nav'
import { ArrowIcon } from './BrandMark'
import './MegaNav.css'

export default function MegaNav({ onOpenSearch, overHero = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setMobileOpen(false) }, [location.pathname, location.search])
  useEffect(() => {
    document.documentElement.classList.toggle('page-locked', mobileOpen)
    return () => document.documentElement.classList.remove('page-locked')
  }, [mobileOpen])
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path.split('?')[0])
  const showTransparent = overHero && !scrolled && !mobileOpen

  return (
    <header className={['meganav', scrolled ? 'is-scrolled' : '', showTransparent ? 'is-over-hero' : ''].join(' ')}>
      <div className="meganav-inner">
        <Link to="/" className="brand" aria-label="Syntex Technologies — home">
          <img className="brand-logo" src="/img/syntex-logo.png" alt="" width="210" height="34"
               onError={(e) => { e.currentTarget.style.display = 'none' }} />
          <span className="brand-fallback">Syn<b>tex</b></span>
        </Link>
        <nav className="meganav-navigable" aria-label="Primary">
          <ul className="meganav-links">
            {nav.map((top) => (
              <li key={top.label} className="meganav-item">
                <DesktopItem top={top} active={isActive(top.path)} />
              </li>
            ))}
          </ul>
          <div className="meganav-actions">
            <button className="nav-search-toggle" onClick={onOpenSearch} aria-label="Open search (Command or Control + K)">
              <span>Search</span><kbd>⌘K</kbd>
            </button>
            <Link to="/contact" className="nav-cta-btn">Talk to Syntex</Link>
          </div>
        </nav>
        <button className="nav-burger" aria-expanded={mobileOpen} aria-controls="mobile-menu"
                aria-label="Toggle menu" onClick={() => setMobileOpen((v) => !v)}><span /></button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div id="mobile-menu" className="mobile-menu"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
            {nav.map((top, i) => <MobileItem key={top.label} top={top} index={i} onNavigate={() => setMobileOpen(false)} />)}
            <Link to="/contact" className="nav-cta-btn mm-cta" onClick={() => setMobileOpen(false)}>Talk to Syntex</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function DesktopItem({ top, active }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)
  const reduce = useReducedMotion()
  const topHref = top.label === 'Home' ? '/' : top.path
  const enter = () => { clearTimeout(closeTimer.current); setOpen(true) }
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(false), 120) }
  return (
    <div className="meganav-item-inner" onMouseEnter={enter} onMouseLeave={leave}>
      <Link to={topHref} className={`meganav-toplink ${active ? 'is-active' : ''}`} aria-expanded={open} aria-haspopup="true">{top.label}</Link>
      <AnimatePresence>
        {open && top.groups && (
          <motion.div className="mega-panel" role="menu" onMouseEnter={enter} onMouseLeave={leave}
            initial={reduce ? false : { opacity: 0, y: 8 }} animate={reduce ? false : { opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 8 }} transition={{ duration: 0.18, ease: 'easeOut' }}>
            <div className="mega-grid">
              <div className="mega-lede">
                <div className="mega-heading"><h4>{top.heading}</h4></div>
                <p>{top.description}</p>
                <Link to={topHref} className="mega-explore">Explore all <ArrowIcon /></Link>
              </div>
              {top.groups.map((g) => (
                <div key={g.title}>
                  <div className="mega-group-title">{g.title}</div>
                  <ul className="mega-group-list">
                    {g.items.map((it) => (
                      <li key={it.path}>
                        <Link to={it.path} className="mega-link" role="menuitem">
                          <span className="mega-link-label">{it.label}</span>
                          {it.verified === false && <span className="mega-unverified">Soon</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileItem({ top, index, onNavigate }) {
  const [open, setOpen] = useState(index < 2)
  const topHref = top.label === 'Home' ? '/' : top.path
  return (
    <div className="mm-group">
      <div className="mm-group-head" style={{ display: 'flex', alignItems: 'center' }}>
        <Link to={topHref} className="mm-group-link" onClick={onNavigate}>{top.label}</Link>
        {top.groups && (
          <button className="mm-arrow" aria-expanded={open} aria-label={`Toggle ${top.label} submenu`} onClick={() => setOpen((v) => !v)}><ArrowIcon /></button>
        )}
      </div>
      {open && top.groups && (
        <div className="mm-sub">
          {top.groups.map((g) => (
            <div key={g.title} className="mm-sub-group">
              <div className="mm-sub-title">{g.title}</div>
              {g.items.map((it) => (
                <Link key={it.path} to={it.path} className="mm-sub-link" onClick={onNavigate}>
                  {it.label}{it.verified === false && <span className="mm-unverified">Soon</span>}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
