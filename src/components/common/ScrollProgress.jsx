import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Thin gradient progress bar fixed to the top of the viewport.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold-400 via-primary-600 to-gold-400"
    />
  )
}
