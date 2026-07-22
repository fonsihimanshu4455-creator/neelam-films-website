import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Fade out the instant loading screen once the app has mounted
;(() => {
  const loader = document.getElementById('app-loader')
  if (!loader) return
  const start = performance.now()
  const MIN_MS = 650 // keep the branded loader visible at least this long
  const hide = () => {
    const wait = Math.max(0, MIN_MS - (performance.now() - start))
    setTimeout(() => {
      loader.classList.add('hide')
      setTimeout(() => loader.remove(), 600)
    }, wait)
  }
  if (document.readyState === 'complete') hide()
  else window.addEventListener('load', hide, { once: true })
})()
