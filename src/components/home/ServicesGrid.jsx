import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import SectionHeader from '../common/SectionHeader'
import Icon from '../common/Icon'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function ServicesGrid() {
  const { data } = useData()
  const services = data.services

  return (
    <section className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What We Do"
          title="Six Pillars of Excellence"
          subtitle="From cinematic production to live event mastery and digital growth — one trusted partner for every story you want to tell."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div key={s.id} variants={item} whileHover={{ y: -6 }}>
              <Link
                to={s.slug}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-primary-500 shadow">
                    <Icon name={s.icon} size={22} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-dark-900">{s.title}</h3>
                    <ArrowUpRight
                      size={20}
                      className="text-slate-400 transition group-hover:text-primary-500"
                    />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{s.short}</p>
                  <span className="mt-4 text-sm font-semibold text-primary-500">Learn more →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
