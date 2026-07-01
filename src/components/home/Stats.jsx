import { motion } from 'framer-motion'
import { useData } from '../../context/DataContext'
import CountUp from '../common/CountUp'

/**
 * Dark-navy "proof of outcome" band — oversized stats on deep navy with a
 * subtle dot pattern & gold detailing (editorial premium feel).
 */
export default function Stats() {
  const { data } = useData()
  const stats = data.hero.stats

  return (
    <section className="bg-navy relative overflow-hidden">
      {/* pattern + edge glow */}
      <div className="pattern-dots-dark pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="mb-14 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
            Proof of outcome
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tightest text-white md:text-6xl">
            Real results.{' '}
            <span className="font-serif italic font-normal text-gold">not just noise.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-ink-950/40 px-6 py-12 text-center backdrop-blur-sm md:py-14"
            >
              <div className="font-display text-5xl font-extrabold tracking-tightest text-white md:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400 md:text-sm">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
