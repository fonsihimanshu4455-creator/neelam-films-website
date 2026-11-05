import { useEffect } from 'react'

const SITE = 'https://www.neelamfilms.com'

/**
 * Lightweight per-page SEO (no external dependency).
 * Sets <title>, meta description, Open Graph tags, canonical URL and robots
 * on route change. Falls back to sensible defaults when a field is omitted.
 *
 * Props: title, description, path (e.g. "/services/live-events"), image, noindex, schema
 * `schema` is a JSON-LD object (or array) injected per route for rich results.
 */
export default function Seo({ title, description, path = '', image, noindex = false, schema }) {
  useEffect(() => {
    if (title) document.title = title

    const setMeta = (key, val, useProperty = false) => {
      if (!val) return
      const sel = useProperty ? `meta[property="${key}"]` : `meta[name="${key}"]`
      let el = document.head.querySelector(sel)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(useProperty ? 'property' : 'name', key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', val)
    }

    setMeta('description', description)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('twitter:title', title, true)
    setMeta('twitter:description', description, true)
    if (image) {
      setMeta('og:image', image, true)
      setMeta('twitter:image', image, true)
    }
    setMeta('robots', noindex ? 'noindex, follow' : 'index, follow')

    // Canonical URL
    const href = SITE + (path.startsWith('/') ? path : '/' + path)
    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', href)

    // Per-route JSON-LD structured data (replaced on each route change)
    const existing = document.getElementById('ld-json-page')
    if (schema) {
      let s = existing
      if (!s) {
        s = document.createElement('script')
        s.type = 'application/ld+json'
        s.id = 'ld-json-page'
        document.head.appendChild(s)
      }
      s.textContent = JSON.stringify(schema)
    } else if (existing) {
      existing.remove()
    }
  }, [title, description, path, image, noindex, schema])

  return null
}
