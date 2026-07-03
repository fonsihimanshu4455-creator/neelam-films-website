import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'

export default function Testimonials() {
  const { data } = useData()
  const items = data.testimonials
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length])
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  useEffect(() => {
    const t = setInterval(next, 6500)
    return () => clearInterval(t)
  }, [next])

  if (!items.length) return null
  const t = items[index]

  return (
    <section className="bg-navy relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="pattern-diamond-dark pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute right-[-10rem] top-1/4 h-80 w-80 rounded-full bg-primary-500/10 blur-[130px]" />
      <Quote className="pointer-events-none absolute -left-6 top-10 text-white/[0.04]" size={260} />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <span className="mb-12 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
            <span className="h-px w-8 bg-gold-400" /> Client love <span className="h-px w-8 bg-gold-400" />
          </span>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <div className="mb-6 flex justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} className="text-amber-400" fill="currentColor" />
              ))}
            </div>
            <p className="mx-auto max-w-3xl font-display text-2xl font-semibold leading-snug text-white md:text-4xl md:leading-[1.25]">
              “{t.quote}”
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-400/60 bg-primary-700 font-display text-lg font-bold text-white">
                {t.name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()}
              </div>
              <div className="text-left">
                <p className="font-display font-bold text-white">{t.name}</p>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-gold-400 hover:bg-gold-400 hover:text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-7 bg-primary-500' : 'w-2 bg-white/25'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-gold-400 hover:bg-gold-400 hover:text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
