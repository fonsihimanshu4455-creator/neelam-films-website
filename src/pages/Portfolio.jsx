import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'
import { useData } from '../context/DataContext'
import PageHero from '../components/common/PageHero'
import VideoModal from '../components/common/VideoModal'
import CTASection from '../components/common/CTASection'

const FILTERS = ['All', 'TVCs', 'Corporate', 'Live Events', 'Documentaries', 'Music Videos']

export default function Portfolio() {
  const { data } = useData()
  const portfolio = data.portfolio
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const items =
    filter === 'All' ? portfolio : portfolio.filter((p) => p.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="A portfolio built over 30 years"
        subtitle="Explore a selection of our productions across TVCs, corporate films, live events, documentaries and music videos."
        image="https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1600&q=80"
      />

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] transition ${
                  filter === f
                    ? 'bg-primary-500 text-ink-950 shadow-glow'
                    : 'border border-cream-50/15 text-cream-300 hover:border-primary-500/60 hover:text-primary-400'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {items.map((p) => (
                <motion.button
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActive(p)}
                  className="group relative aspect-[4/3] overflow-hidden border border-cream-50/10 text-left"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/25 to-transparent" />
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-500 text-ink-950 opacity-0 transition group-hover:opacity-100">
                    <Play size={22} fill="currentColor" />
                  </span>
                  <div className="absolute bottom-0 left-0 p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-400">
                      {p.category} • {p.year}
                    </span>
                    <h3 className="font-display text-2xl uppercase text-cream-50">{p.title}</h3>
                    <p className="text-sm text-cream-300">{p.client}</p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {items.length === 0 && (
            <p className="py-16 text-center text-cream-400">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <CTASection />

      <VideoModal
        open={!!active}
        onClose={() => setActive(null)}
        videoId={active?.videoId}
        title={active?.title}
      />
    </>
  )
}
