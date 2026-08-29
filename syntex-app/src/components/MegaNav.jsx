import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { nav } from '../data/nav'
import { ArrowIcon } from './BrandMark'
import './MegaNav.css'

/*
  SYNTEX navigation — FIXED contrast.
  Before: on interior pages the nav sat transparent with dark ink over the
  dark navy .page-header → invisible links/logo (see /about/story).
  Fix: the nav is transparent+light ONLY on the homepage hero. On every
  other route it renders as solid glass immediately (readable dark ink on a
  frosted-light bar), regardless of the header colour behind it. It still
  turns glass on scroll on the homepage too.
*/
export default function MegaNav({ onOpenSearch, overHero=false }){
  const [scrolled,setScrolled]=useState(false),[mobileOpen,setMobileOpen]=useState(false)
  const location=useLocation()
  useEffect(()=>{const s=()=>setScrolled(window.scrollY>24);s();window.addEventListener('scroll',s,{passive:true});return()=>window.removeEventListener('scroll',s)},[])
  useEffect(()=>{setMobileOpen(false)},[location.pathname])
  useEffect(()=>{document.documentElement.classList.toggle('page-locked',mobileOpen);return()=>document.documentElement.classList.remove('page-locked')},[mobileOpen])
  useEffect(()=>{const k=e=>{if(e.key==='Escape')setMobileOpen(false)};window.addEventListener('keydown',k);return()=>window.removeEventListener('keydown',k)},[])
  const isActive=p=>p==='/'?location.pathname==='/':location.pathname.startsWith(p.split('?')[0])

  // Solid glass whenever we're NOT on a transparent hero, or once scrolled,
  // or while the mobile menu is open. Transparent+light only over the hero.
  const solid = !overHero || scrolled || mobileOpen
  const showT = overHero && !scrolled && !mobileOpen

  return(<header className={['meganav',solid?'is-scrolled':'',showT?'is-over-hero':''].join(' ')}>
    <div className="meganav-inner">
      <Link to="/" className="brand" aria-label="Syntex Technologies — home">
        <img className="brand-logo" src="/images/syntex-mark.png" alt="" width="40" height="40" loading="lazy" />
        <span className="brand-fallback">Syntex Technologies (Pty) Ltd </span>
      </Link>
      <nav className="meganav-navigable" aria-label="Primary">
        <ul className="meganav-links">{nav.map(t=><li key={t.label} className="meganav-item"><DesktopItem top={t} active={isActive(t.path)}/></li>)}</ul>
        <div className="meganav-actions">
          <button className="nav-search-toggle" onClick={onOpenSearch} aria-label="Open search (Ctrl/Cmd + K)"><span>Search</span><kbd>⌘K</kbd></button>
          <Link to="/contact" className="nav-cta-btn">Talk to Syntex</Link>
        </div>
      </nav>
      <button className="nav-burger" aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-label="Toggle menu" onClick={()=>setMobileOpen(v=>!v)}><span/></button>
    </div>
    <AnimatePresence>{mobileOpen&&<motion.div id="mobile-menu" className="mobile-menu" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:0.2}}>
      {nav.map((t,i)=><MobileItem key={t.label} top={t} index={i} onNavigate={()=>setMobileOpen(false)}/>)}
      <Link to="/contact" className="nav-cta-btn mm-cta" onClick={()=>setMobileOpen(false)}>Talk to Syntex</Link>
    </motion.div>}</AnimatePresence>
  </header>)
}
function DesktopItem({top,active}){
  const [open,setOpen]=useState(false);const timer=useRef(null);const reduce=useReducedMotion()
  const href=top.label==='Home'?'/':top.path
  const enter=()=>{clearTimeout(timer.current);setOpen(true)};const leave=()=>{timer.current=setTimeout(()=>setOpen(false),120)}
  return(<div className="meganav-item-inner" onMouseEnter={enter} onMouseLeave={leave}>
    <Link to={href} className={`meganav-toplink ${active?'is-active':''}`} aria-expanded={open} aria-haspopup="true">{top.label}</Link>
    <AnimatePresence>{open&&<motion.div className="mega-panel" role="menu" onMouseEnter={enter} onMouseLeave={leave} initial={reduce?false:{opacity:0,y:8}} animate={reduce?false:{opacity:1,y:0}} exit={reduce?undefined:{opacity:0,y:8}} transition={{duration:0.18,ease:'easeOut'}}>
      <div className="mega-grid">
        <div className="mega-lede"><div className="mega-heading"><h4>{top.heading}</h4></div><p>{top.description}</p><Link to={href} className="mega-explore">Explore all <ArrowIcon/></Link></div>
        {top.groups.map(g=><div key={g.title}><div className="mega-group-title">{g.title}</div><ul className="mega-group-list">{g.items.map(it=><li key={it.path}><Link to={it.path} className="mega-link" role="menuitem"><span>{it.label}</span>{it.verified===false&&<span className="mega-unverified">Soon</span>}</Link></li>)}</ul></div>)}
      </div>
    </motion.div>}</AnimatePresence>
  </div>)
}
function MobileItem({top,index,onNavigate}){
  const [open,setOpen]=useState(index<2);const href=top.label==='Home'?'/':top.path
  return(<div className="mm-group"><div className="mm-group-head" style={{display:'flex',alignItems:'center'}}>
    <Link to={href} className="mm-group-link" onClick={onNavigate}>{top.label}</Link>
    <button className="mm-arrow" aria-expanded={open} aria-label={`Toggle ${top.label}`} onClick={()=>setOpen(v=>!v)}><ArrowIcon/></button></div>
    {open&&<div className="mm-sub">{top.groups.map(g=><div key={g.title} className="mm-sub-group"><div className="mm-sub-title">{g.title}</div>{g.items.map(it=><Link key={it.path} to={it.path} className="mm-sub-link" onClick={onNavigate}>{it.label}{it.verified===false&&<span className="mm-unverified">Soon</span>}</Link>)}</div>)}</div>}
  </div>)
}
