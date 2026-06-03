import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'

export default function ServicesGrid() {
  const { data } = useData()
  const services = data.services
  const [hovered, setHovered] = useState(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 150, damping: 20, mass: 0.5 })
  const y = useSpring(my, { stiffness: 150, damping: 20, mass: 0.5 })
  const areaRef = useRef(null)

  const onMove = (e) => {
    const rect = areaRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  return (
    <section className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
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
              One trusted partner for every story — from cinematic production to grand live events,
              websites, apps and digital growth.
            </p>
          </Reveal>
        </div>

        <div ref={areaRef} onMouseMove={onMove} className="relative border-t border-slate-200">
          <AnimatePresence>
            {hovered && (
              <motion.div
                style={{ x, y }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25 }}
                className="pointer-events-none absolute left-0 top-0 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
              >
                <div className="h-52 w-80 overflow-hidden rounded-2xl border border-white shadow-soft">
                  <img src={hovered.image} alt={hovered.title} className="h-full w-full object-cover" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
            >
              <Link
                to={s.slug}
                onMouseEnter={() => setHovered(s)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex items-center justify-between gap-4 border-b border-slate-200 py-7 md:py-9"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-primary-50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative flex items-center gap-5 md:gap-8">
                  <span className="font-display text-sm font-bold text-primary-500 md:text-base">0{i + 1}</span>
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="h-12 w-16 shrink-0 rounded-lg object-cover lg:hidden"
                  />
                  <h3 className="font-display text-2xl font-bold text-ink-900 transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {s.title}
                  </h3>
                </div>

                <div className="relative flex items-center gap-5">
                  <span className="hidden max-w-xs text-right text-sm text-slate-500 md:block">{s.short}</span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-300 text-ink-900 transition-all duration-500 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white">
                    <ArrowUpRight size={20} />
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
