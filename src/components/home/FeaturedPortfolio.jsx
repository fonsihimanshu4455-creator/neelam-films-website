import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'
import Button from '../common/Button'
import VideoModal from '../common/VideoModal'

// Bento spans for the first 6 items
const SPANS = [
  'md:col-span-2 md:row-span-2',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-1 md:row-span-1',
  'md:col-span-2 md:row-span-1',
]

export default function FeaturedPortfolio() {
  const { data } = useData()
  const items = data.portfolio.slice(0, 6)
  const [active, setActive] = useState(null)

  return (
    <section className="relative px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
                Selected work
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] text-cream-50 md:text-7xl">
                Frames we're <span className="font-serif lowercase italic tracking-normal text-primary-400">proud</span> of
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="hidden md:block">
            <Button to="/portfolio" variant="outline">
              View all work
            </Button>
          </Reveal>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[230px]">
          {items.map((p, i) => (
            <motion.button
              key={p.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(p)}
              className={`group relative overflow-hidden border border-cream-50/10 text-left ${SPANS[i] || ''}`}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />

              <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-ink-950/70 text-cream-50 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                <Play size={18} fill="currentColor" />
              </span>

              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-400">
                  {p.category} · {p.year}
                </span>
                <h3 className="font-display text-2xl uppercase text-cream-50">{p.title}</h3>
                <p className="text-sm text-cream-300">{p.client}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button to="/portfolio" variant="outline">
            View all work
          </Button>
        </div>
      </div>

      <VideoModal
        open={!!active}
        onClose={() => setActive(null)}
        videoId={active?.videoId}
        title={active?.title}
      />
    </section>
  )
}
