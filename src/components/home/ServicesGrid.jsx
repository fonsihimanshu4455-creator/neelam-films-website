import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'
import Icon from '../common/Icon'

/**
 * Services as a modern dark card grid — image + icon + title, blue hover glow.
 */
export default function ServicesGrid() {
  const { data } = useData()
  const services = data.services

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pattern-dots-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-primary-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary-400">
                <span className="h-px w-8 bg-primary-500" /> What we do
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 max-w-2xl font-display text-5xl uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
                Everything under <span className="text-gradient">one roof</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-slate-400">
              From cinematic production & live events to websites, apps and digital growth — one
              trusted partner for every story.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={s.slug}
                data-cursor
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:border-primary-500/50 hover:bg-white/[0.06]"
              >
                {/* image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-ink-950/70 text-primary-300 backdrop-blur-sm">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary-500 text-white opacity-0 transition duration-500 group-hover:opacity-100">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-display text-xs text-primary-400">0{i + 1}</span>
                  <h3 className="mt-1 font-heading text-xl font-bold text-white transition group-hover:text-primary-300">
                    {s.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-400">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-300 transition group-hover:text-primary-400">
                    Explore <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
