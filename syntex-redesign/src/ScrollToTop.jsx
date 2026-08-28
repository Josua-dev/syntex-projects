import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Scrolls to top on route change; honours in-page hash anchors with a
   sticky-nav offset. Kept from the original app, lightly hardened. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 90
        window.scrollTo({ top: y, behavior: 'auto' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}
