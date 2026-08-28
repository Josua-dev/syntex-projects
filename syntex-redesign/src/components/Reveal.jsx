import { useEffect, useRef, useState } from 'react'

/* Lightweight IntersectionObserver reveal. Honours reduced motion.
   Supports `as` (element/component), `delay` (ms), and className passthrough. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setSeen(true); return }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } })
    }, { threshold: 0.12, rootMargin: '-40px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${seen ? 'is-in' : ''} ${className}`.trim()}
         style={{ transitionDelay: seen ? `${delay}ms` : '0ms' }} {...rest}>
      {children}
    </Tag>
  )
}
