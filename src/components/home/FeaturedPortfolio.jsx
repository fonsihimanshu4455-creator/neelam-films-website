import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, ArrowRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'
import VideoModal from '../common/VideoModal'

/**
 * Film log — selected work as a register, not a card grid.
 * Thumbnail · year · title · client · category, row by row.
 */
export default function FeaturedPortfolio() {
  const { data } = useData()
  const items = data.portfolio.slice(0, 7)
  const [active, setActive] = useState(null)

  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rule-heavy flex flex-wrap items-baseline justify-between gap-4 pt-3">
            <span className="doc-label text-primary-600">Scene 03 — Film log (selected)</span>
            <Link to="/portfolio" className="doc-label link-underline text-ink-900">
              Full log →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-ink-900/20">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i * 0.03, 0.12)} amount={0.2}>
              <button
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
              </button>
            </Reveal>
          ))}
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
