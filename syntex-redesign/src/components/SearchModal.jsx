import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { searchIndex } from '../data/nav'
import './SearchModal.css'

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState('')
  const [highlight, setHighlight] = useState(0)
  const inputRef = useRef(null)
  const restoreRef = useRef(null)
  const navigate = useNavigate()
  const reduce = useReducedMotion()

  const results = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return searchIndex
    return searchIndex.filter((it) => it.label.toLowerCase().includes(query))
  }, [q])

  useEffect(() => { setHighlight((h) => Math.min(h, Math.max(results.length - 1, 0))) }, [results.length])

  useEffect(() => {
    if (open) {
      restoreRef.current = document.activeElement
      setQ(''); setHighlight(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    } else if (restoreRef.current instanceof HTMLElement) {
      restoreRef.current.focus(); restoreRef.current = null
    }
  }, [open])

  const go = useCallback((path) => { onClose(); navigate(path) }, [onClose, navigate])

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlight((h) => Math.min(h + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHighlight((h) => Math.max(h - 1, 0)) }
    else if (e.key === 'Enter' && results[highlight]) { e.preventDefault(); go(results[highlight].path) }
    else if (e.key === 'Escape') { e.preventDefault(); onClose() }
    else if (e.key === 'Tab') { e.preventDefault(); inputRef.current?.focus() }
  }

  const listId = 'syntex-search-list'
  const optionId = (i) => `syntex-search-opt-${i}`

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="search-overlay"
          initial={reduce ? false : { opacity: 0 }} animate={reduce ? false : { opacity: 1 }} exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.16 }} onMouseDown={onClose}>
          <motion.div className="search-palette" role="dialog" aria-modal="true" aria-label="Search Syntex"
            onMouseDown={(e) => e.stopPropagation()}
            initial={reduce ? false : { opacity: 0, y: -14, scale: 0.99 }} animate={reduce ? false : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -10, scale: 0.99 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
            <div className="search-input-row">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="20" height="20" className="search-ico">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input ref={inputRef} type="text" role="combobox" aria-expanded="true" aria-controls={listId}
                aria-activedescendant={results[highlight] ? optionId(highlight) : undefined}
                aria-label="Search services, solutions, projects, about and contact"
                placeholder="Search services, solutions, projects, about, contact…"
                value={q} onChange={(e) => { setQ(e.target.value); setHighlight(0) }} onKeyDown={onKeyDown} />
              <kbd>ESC</kbd>
            </div>
            <div className="search-results" id={listId} role="listbox" aria-label="Search results">
              {results.length === 0 ? (
                <div className="search-empty">No pages match <em>“{q}”</em>.
                  <span className="search-suggestion">Try “security”, “ERP”, “contact”, “projects”.</span>
                </div>
              ) : (
                results.slice(0, 9).map((it, i) => (
                  <button key={it.id} id={optionId(i)} type="button" role="option" aria-selected={i === highlight}
                    className={`search-result ${i === highlight ? 'is-hl' : ''}`}
                    onMouseEnter={() => setHighlight(i)} onClick={() => go(it.path)}>
                    <span className="sr-label">{it.label}</span>
                    {it.verified === false && <span className="sr-soon">Soon</span>}
                  </button>
                ))
              )}
            </div>
            <div className="search-footer">
              <span><b>↑↓</b> navigate</span><span><b>↵</b> open</span><span><b>esc</b> close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
