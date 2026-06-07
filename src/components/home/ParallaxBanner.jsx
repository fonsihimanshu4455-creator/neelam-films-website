import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import CountUp from '../common/CountUp'
import { useData } from '../../context/DataContext'

/**
 * Full-bleed cinematic parallax banner with overlaid stats.
 */
export default function ParallaxBanner() {
  const { data } = useData()
  const stats = data.hero.stats
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden">
      <motion.img
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1800&q=80"
        alt="On set with Neelam Films"
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 h-[125%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink-950/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-5 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-extrabold leading-tight text-white md:text-7xl"
        >
          30 years behind <br />
          <span className="font-serif font-normal italic text-primary-300">the lens.</span>
        </motion.h2>

        <div className="mt-14 grid w-full grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-extrabold text-white md:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60 md:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
