import { motion } from 'framer-motion'
import { useData } from '../../context/DataContext'
import CountUp from '../common/CountUp'

/**
 * Animated stats counter band.
 */
export default function Stats() {
  const { data } = useData()
  const stats = data.hero.stats

  return (
    <section className="relative z-10 -mt-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60 md:p-10">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-extrabold text-primary-500 md:text-5xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
