import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const BRAND = 'NEELAM FILMS'
const SEEN_KEY = 'nf_intro_seen'

/**
 * Cinematic intro: brand letters rise behind a noir curtain, a gold rule
 * draws across, then the curtain wipes up. Plays once per session.
 */
export default function Preloader() {
  const [done, setDone] = useState(() => {
    try {
      return sessionStorage.getItem(SEEN_KEY) === '1'
    } catch {
      return false
    }
  })

  useEffect(() => {
    if (done) return
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => {
      setDone(true)
      try {
        sessionStorage.setItem(SEEN_KEY, '1')
      } catch {
        // ignore
      }
    }, 2100)
    return () => {
      clearTimeout(t)
      document.body.style.overflow = ''
    }
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-950"
          aria-hidden="true"
        >
          <div className="overflow-hidden">
            <div className="flex">
              {BRAND.split('').map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-5xl text-cream-50 sm:text-7xl md:text-8xl"
                >
                  {ch === ' ' ? '  ' : ch}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 h-px w-48 origin-left bg-primary-500 sm:w-64"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-5 text-[10px] font-semibold uppercase tracking-[0.5em] text-cream-400"
          >
            Est. 1995 — Delhi
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
