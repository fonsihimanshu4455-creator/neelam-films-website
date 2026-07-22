import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Brief branded loading overlay shown on route changes so navigation
 * always gives clear feedback. The initial page load / refresh is handled
 * by the instant #app-loader in index.html.
 */
export default function NeelamLoader() {
  const { pathname } = useLocation()
  const [show, setShow] = useState(false)
  const first = useRef(true)

  useEffect(() => {
    // Skip the very first mount (index.html loader already covered it)
    if (first.current) {
      first.current = false
      return
    }
    setShow(true)
    const t = setTimeout(() => setShow(false), 550)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center"
          style={{ background: 'radial-gradient(60% 60% at 50% 40%, #ffffff 0%, #fbf8f4 100%)' }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.img
              src="/logo.png"
              alt="Neelam Films"
              className="h-20 w-auto"
              style={{ filter: 'drop-shadow(0 8px 20px rgba(122,14,44,.18))' }}
              animate={{ scale: [1, 0.955, 1], opacity: [1, 0.82, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="h-9 w-9 animate-spin rounded-full border-[3px] border-cream-300 border-t-primary-700" />
            <span className="text-[11px] font-bold uppercase tracking-[0.34em] text-primary-600">
              Neelam Films
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
