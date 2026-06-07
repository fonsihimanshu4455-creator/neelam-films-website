import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Image that drifts vertically as it scrolls through the viewport,
 * giving a cinematic parallax depth. Wrap in a fixed-height container.
 */
export default function ParallaxImage({ src, alt = '', className = '', amount = 80, overlay = true }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 h-[125%] w-full object-cover"
      />
      {overlay && <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent" />}
    </div>
  )
}
