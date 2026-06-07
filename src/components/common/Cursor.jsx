import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Trailing ring cursor (desktop only). Grows & fills when hovering
 * interactive elements. Uses mix-blend so it shows on light & media.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [hover, setHover] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 400, damping: 30, mass: 0.4 })
  const ry = useSpring(y, { stiffness: 400, damping: 30, mass: 0.4 })

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setEnabled(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const interactive = e.target.closest('a, button, [data-cursor], input, textarea, select')
      setHover(!!interactive)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      {/* outer ring */}
      <motion.div
        style={{ x: rx, y: ry }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <motion.div
          animate={{ scale: hover ? 1.8 : 1, opacity: hover ? 0.6 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="h-9 w-9 rounded-full border-2 border-white"
        />
      </motion.div>
      {/* center dot */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      >
        <div className="h-1.5 w-1.5 rounded-full bg-white" />
      </motion.div>
    </>
  )
}
