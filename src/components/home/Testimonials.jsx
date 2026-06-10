import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'

function initials(name = '') {
  return name
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

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
    <section className="relative overflow-hidden border-y border-cream-50/10 bg-ink-900/50 px-5 py-24 md:px-8 md:py-32">
      <Quote className="pointer-events-none absolute -left-6 top-10 text-primary-500/[0.06]" size={260} />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <span className="mb-12 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
            <span className="h-px w-8 bg-primary-500" /> ( 04 ) — Client love <span className="h-px w-8 bg-primary-500" />
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
                <Star key={i} size={18} className="text-primary-400" fill="currentColor" />
              ))}
            </div>
            <p className="mx-auto max-w-3xl font-serif text-2xl italic leading-snug text-cream-100 md:text-4xl md:leading-[1.3]">
              “{t.quote}”
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary-500/50 bg-primary-500/10 font-display text-xl text-primary-400">
                {initials(t.name)}
              </span>
              <div className="text-left">
                <p className="font-display text-lg uppercase tracking-wide text-cream-50">{t.name}</p>
                <p className="text-sm text-cream-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-100 transition hover:border-primary-500 hover:bg-primary-500 hover:text-ink-950"
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
                  i === index ? 'w-7 bg-primary-500' : 'w-2 bg-cream-50/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-100 transition hover:border-primary-500 hover:bg-primary-500 hover:text-ink-950"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
