import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animated number count-up that triggers when scrolled into view.
 */
export default function CountUp({ value, suffix = '', duration = 2000 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      // easeOutExpo for a smooth finish
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(value)
    }
    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
