import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useData } from '../../context/DataContext'
import SectionHeader from '../common/SectionHeader'

/**
 * Auto-advancing testimonials slider with manual controls.
 */
export default function Testimonials() {
  const { data } = useData()
  const items = data.testimonials
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length])
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  // Auto-play
  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  if (!items.length) return null
  const t = items[index]

  return (
    <section className="bg-dark-900 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          light
          eyebrow="Testimonials"
          title="What Our Clients Say"
          subtitle="Three decades of trust, in their own words."
        />

        <div className="relative">
          <Quote className="mx-auto mb-6 text-primary-500" size={48} />

          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-slate-200 md:text-2xl">
                “{t.quote}”
              </p>

              <div className="mt-8 flex flex-col items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="h-16 w-16 rounded-full border-2 border-primary-500 object-cover"
                />
                <div>
                  <div className="flex justify-center gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-1 font-display font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-6 bg-primary-500' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
