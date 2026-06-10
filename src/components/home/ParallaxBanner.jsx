import CountUp from '../common/CountUp'
import Reveal from '../common/Reveal'
import { useData } from '../../context/DataContext'

/**
 * Production log — the numbers, set like a ledger total. Ink block on paper.
 */
export default function ParallaxBanner() {
  const { data } = useData()
  const stats = data.hero.stats

  return (
    <section className="px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="bg-ink-950 px-6 py-14 text-paper-50 md:px-12 md:py-20">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-paper-50/20 pb-4">
              <span className="doc-label text-primary-400">Production log — running totals</span>
              <span className="doc-label text-paper-50/50">1995 → today</span>
            </div>
            <div className="mt-10 grid gap-10 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-6xl font-light text-paper-50 md:text-7xl">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="doc-label mt-3 text-paper-50/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
