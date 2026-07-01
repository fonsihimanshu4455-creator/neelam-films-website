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
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary-600">
                <span className="h-px w-8 bg-primary-500" /> Selected work
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Frames we're <span className="font-serif font-normal italic text-primary-600">proud</span> of
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
              className={`group relative overflow-hidden rounded-3xl text-left ${SPANS[i] || ''}`}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
              <div className="absolute inset-0 bg-primary-500/0 transition-colors duration-500 group-hover:bg-primary-500/10" />

              <span className="absolute right-4 top-4 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-white/90 text-primary-600 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <Play size={20} fill="currentColor" />
              </span>

              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary-300">
                  {p.category} · {p.year}
                </span>
                <h3 className="font-display text-xl font-bold text-white">{p.title}</h3>
                <p className="text-sm text-slate-300">{p.client}</p>
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
