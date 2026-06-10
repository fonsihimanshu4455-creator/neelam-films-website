import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'

/**
 * Editorial service index: numbered rows with a champagne sweep on hover
 * and a floating image preview that follows the cursor (desktop).
 */
export default function ServicesGrid() {
  const { data } = useData()
  const services = data.services
  const [hovered, setHovered] = useState(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 150, damping: 20, mass: 0.4 })
  const y = useSpring(my, { stiffness: 150, damping: 20, mass: 0.4 })

  const onMove = (e) => {
    mx.set(e.clientX)
    my.set(e.clientY)
  }

  const active = services.find((s) => s.id === hovered)

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
                <span className="h-px w-8 bg-primary-500" /> ( 01 ) — What we do
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 max-w-2xl font-display text-5xl uppercase leading-[0.9] text-cream-50 md:text-7xl">
                Everything under <span className="font-serif lowercase italic tracking-normal text-primary-400">one roof</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-cream-300">
              From cinematic production & live events to websites, apps and digital growth — one
              trusted partner for every story.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Index list */}
      <div
        className="mx-auto max-w-7xl px-5 md:px-8"
        onMouseMove={onMove}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="border-t border-cream-50/10">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i * 0.04, 0.2)} amount={0.15}>
              <Link
                to={s.slug}
                onMouseEnter={() => setHovered(s.id)}
                className="group relative block overflow-hidden border-b border-cream-50/10"
              >
                {/* champagne sweep */}
                <span className="absolute inset-0 translate-y-full bg-primary-500 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:translate-y-0" />

                <span className="relative z-10 flex items-center gap-5 py-6 md:gap-10 md:py-8">
                  <span className="w-10 shrink-0 font-display text-base text-primary-500 transition-colors duration-500 group-hover:text-ink-950 md:text-lg">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1 font-display text-3xl uppercase leading-none text-cream-50 transition-colors duration-500 group-hover:text-ink-950 sm:text-4xl md:text-6xl">
                    {s.title}
                  </span>
                  <span className="hidden max-w-xs text-sm leading-snug text-cream-400 transition-colors duration-500 group-hover:text-ink-900 lg:block">
                    {s.short}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream-50/20 text-cream-50 transition-all duration-500 group-hover:rotate-45 group-hover:border-ink-950 group-hover:text-ink-950 md:h-14 md:w-14">
                    <ArrowUpRight size={20} />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Floating preview (desktop only) */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
        aria-hidden="true"
      >
        <AnimatePresence>
          {active && (
            <motion.img
              key={active.id}
              src={active.image}
              alt=""
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85, rotate: 3 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute h-52 w-80 -translate-x-1/2 -translate-y-[110%] border border-cream-50/20 object-cover shadow-soft"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
