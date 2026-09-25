import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls window to top on every route change, and fires a Meta Pixel
 * PageView for SPA navigations (fbq doesn't auto-track client-side routes).
 * The first load is already counted by the base pixel in index.html.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  const first = useRef(true)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
    if (first.current) {
      first.current = false
      return
    }
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView')
    }
  }, [pathname])
  return null
}
