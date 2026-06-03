import { motion } from 'framer-motion'
import { useData } from '../../context/DataContext'
import CountUp from '../common/CountUp'

/**
 * Oversized stats band on dark, with a hairline divider grid.
 */
export default function Stats() {
  const { data } = useData()
  const stats = data.hero.stats

  return (
    <section className="border-y border-white/10 bg-ink-900/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`border-white/10 px-6 py-12 text-center md:py-16 ${
              i % 2 === 0 ? 'border-r' : ''
            } ${i < 2 ? 'border-b lg:border-b-0' : ''} ${i === 2 ? 'lg:border-r' : ''}`}
          >
            <div className="font-display text-5xl font-extrabold tracking-tightest text-white md:text-7xl">
              <span className="text-gradient">
                <CountUp value={s.value} suffix={s.suffix} />
              </span>
            </div>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 md:text-sm">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
