import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
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
        eyebrow="Page 03 — Film log"
        title="Thirty years on the record."
        subtitle="TVCs, corporate films, live events, documentaries and music videos — logged year by year. Tap a row to watch."
      />

      <section className="px-5 pb-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Filters — index tabs */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`doc-label pb-1 transition ${
                  filter === f
                    ? 'border-b-2 border-primary-500 text-primary-600'
                    : 'border-b-2 border-transparent text-ink-600 hover:text-ink-950'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Log rows */}
          <motion.div layout className="mt-10 border-t border-ink-900/20">
            <AnimatePresence mode="popLayout">
              {items.map((p) => (
                <motion.button
                  key={p.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActive(p)}
                  className="group grid w-full grid-cols-[4.5rem_1fr_2rem] items-center gap-4 border-b border-ink-900/20 py-4 text-left transition-colors hover:bg-paper-100 md:grid-cols-[6rem_4rem_minmax(0,1.4fr)_minmax(0,1fr)_9rem_2rem] md:gap-6"
                >
                  <span className="relative block aspect-[4/3] w-full overflow-hidden border border-ink-900/20 bg-paper-200">
                    <img
                      src={p.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-ink-950/0 transition group-hover:bg-ink-950/30">
                      <Play size={16} fill="currentColor" className="text-paper-50 opacity-0 transition group-hover:opacity-100" />
                    </span>
                  </span>
                  <span className="hidden font-mono text-xs text-ink-500 md:block">{p.year}</span>
                  <span className="min-w-0">
                    <span className="block truncate font-serif text-xl leading-tight text-ink-950 transition-colors group-hover:text-primary-600 md:text-2xl">
                      {p.title}
                    </span>
                    <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500 md:hidden">
                      {p.client} — {p.category} · {p.year}
                    </span>
                  </span>
                  <span className="hidden truncate text-sm text-ink-600 md:block">{p.client}</span>
                  <span className="hidden text-right font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500 md:block">
                    {p.category}
                  </span>
                  <ArrowRight size={16} className="justify-self-end text-ink-400 transition-all group-hover:translate-x-1 group-hover:text-primary-500" />
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>

          {items.length === 0 && (
            <p className="py-16 text-center font-mono text-sm text-ink-500">
              No entries under this heading yet.
            </p>
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
