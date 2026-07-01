import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'
import ParallaxImage from '../common/ParallaxImage'

/**
 * Services as cinematic full-bleed image bands with parallax & hover zoom.
 */
export default function ServicesGrid() {
  const { data } = useData()
  const services = data.services

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-cream-100 py-24 md:py-32">
      {/* warm cream band with a subtle triangle weave */}
      <div
        className="pattern-triangles pointer-events-none absolute inset-0 opacity-80"
        style={{ maskImage: 'linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 12%, #000 88%, transparent)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary-600">
                <span className="h-px w-8 bg-primary-500" /> What we do
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-extrabold leading-tight text-ink-900 md:text-6xl">
                Everything under <span className="font-serif font-normal italic text-primary-600">one roof</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-slate-600">
              From cinematic production & live events to websites, apps and digital growth — one
              trusted partner for every story.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Bands */}
      <div className="relative z-10 flex flex-col gap-4 px-5 md:px-8">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-7xl"
          >
            <Link
              to={s.slug}
              data-cursor
              className="group relative block h-[300px] overflow-hidden rounded-[1.75rem] md:h-[400px]"
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <ParallaxImage src={s.image} alt={s.title} className="h-full w-full" amount={50} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-ink-950/40 to-transparent" />

              <div
                className={`absolute inset-0 flex flex-col justify-center p-8 md:p-14 ${
                  i % 2 === 1 ? 'items-end text-right' : 'items-start'
                }`}
              >
                <span className="font-display text-sm font-bold text-primary-300">0{i + 1}</span>
                <h3 className="mt-2 max-w-xl font-display text-3xl uppercase leading-[0.95] tracking-tightest text-white transition-transform duration-500 group-hover:translate-y-[-4px] md:text-6xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md text-sm text-slate-200 md:text-base">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-ink-900 transition group-hover:bg-primary-500 group-hover:text-white">
                  Explore <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
