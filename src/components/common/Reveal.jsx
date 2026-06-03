import { motion } from 'framer-motion'

/**
 * Scroll-triggered reveal with a smooth, premium easing.
 * Variants: up | down | left | right | scale | blur
 */
const OFFSET = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  scale: { scale: 0.92 },
  blur: { y: 30, filter: 'blur(12px)' },
}

export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 0.8,
  once = true,
  amount = 0.3,
  className = '',
  as = 'div',
}) {
  const from = OFFSET[variant] || OFFSET.up
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      initial={{ opacity: 0, ...from }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
