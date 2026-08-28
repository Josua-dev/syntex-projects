import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { searchIndex } from '../data/nav'
import './SearchModal.css'
export default function SearchModal({ open, onClose }){
  const [q,setQ]=useState(''),[hl,setHl]=useState(0)
  const inputRef=useRef(null),restoreRef=useRef(null);const navigate=useNavigate();const reduce=useReducedMotion()
  const results=useMemo(()=>{const s=q.trim().toLowerCase();return s?searchIndex.filter(it=>it.label.toLowerCase().includes(s)):searchIndex},[q])
  useEffect(()=>{setHl(h=>Math.min(h,Math.max(results.length-1,0)))},[results.length])
  useEffect(()=>{ if(open){restoreRef.current=document.activeElement;setQ('');setHl(0);requestAnimationFrame(()=>inputRef.current?.focus())} else if(restoreRef.current instanceof HTMLElement){restoreRef.current.focus();restoreRef.current=null} },[open])
  const go=useCallback(p=>{onClose();navigate(p)},[onClose,navigate])
  const onKey=e=>{ if(e.key==='ArrowDown'){e.preventDefault();setHl(h=>Math.min(h+1,results.length-1))} else if(e.key==='ArrowUp'){e.preventDefault();setHl(h=>Math.max(h-1,0))} else if(e.key==='Enter'&&results[hl]){e.preventDefault();go(results[hl].path)} else if(e.key==='Escape'){e.preventDefault();onClose()} else if(e.key==='Tab'){e.preventDefault();inputRef.current?.focus()} }
  const oid=i=>`sx-opt-${i}`
  return(<AnimatePresence>{open&&<motion.div className="search-overlay" initial={reduce?false:{opacity:0}} animate={reduce?false:{opacity:1}} exit={reduce?undefined:{opacity:0}} transition={{duration:0.16}} onMouseDown={onClose}>
    <motion.div className="search-palette" role="dialog" aria-modal="true" aria-label="Search Syntex" onMouseDown={e=>e.stopPropagation()} initial={reduce?false:{opacity:0,y:-14,scale:0.99}} animate={reduce?false:{opacity:1,y:0,scale:1}} exit={reduce?undefined:{opacity:0,y:-10}} transition={{duration:0.2,ease:'easeOut'}}>
      <div className="search-input-row"><svg viewBox="0 0 20 20" fill="none" width="20" height="20" aria-hidden="true" className="search-ico"><circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/><path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <input ref={inputRef} type="text" role="combobox" aria-expanded="true" aria-controls="sx-list" aria-activedescendant={results[hl]?oid(hl):undefined} aria-label="Search" placeholder="Search services, solutions, projects, about, contact…" value={q} onChange={e=>{setQ(e.target.value);setHl(0)}} onKeyDown={onKey}/><kbd>ESC</kbd></div>
      <div className="search-results" id="sx-list" role="listbox" aria-label="Results">
        {results.length===0?<div className="search-empty">No pages match <em>“{q}”</em>.<span className="search-suggestion">Try “security”, “ERP”, “contact”.</span></div>:results.slice(0,9).map((it,i)=><button key={it.id} id={oid(i)} type="button" role="option" aria-selected={i===hl} className={`search-result ${i===hl?'is-hl':''}`} onMouseEnter={()=>setHl(i)} onClick={()=>go(it.path)}><span className="sr-label">{it.label}</span>{it.verified===false&&<span className="sr-soon">Soon</span>}</button>)}
      </div>
      <div className="search-footer"><span><b>↑↓</b> navigate</span><span><b>↵</b> open</span><span><b>esc</b> close</span></div>
    </motion.div>
  </motion.div>}</AnimatePresence>)
}
