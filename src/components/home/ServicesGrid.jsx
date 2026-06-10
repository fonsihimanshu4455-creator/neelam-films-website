import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'

/** Lowest "from ₹X" figure across a service's pricing rows, if any. */
function fromPrice(pricing) {
  if (!pricing?.length) return null
  const nums = pricing
    .map((p) => {
      const m = String(p.price).match(/[\d,]+/)
      return m ? Number(m[0].replace(/,/g, '')) : null
    })
    .filter((n) => n)
  if (!nums.length) return null
  return `from ₹${Math.min(...nums).toLocaleString('en-IN')}`
}

/**
 * Services as a call-sheet ledger: numbered rows, scope column, rate column.
 */
export default function ServicesGrid() {
  const { data } = useData()
  const services = data.services

  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rule-heavy flex flex-wrap items-baseline justify-between gap-4 pt-3">
            <span className="doc-label text-primary-600">Scene 01 — What we do</span>
            <span className="doc-label hidden text-ink-500 md:block">8 departments, one phone number</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-3xl font-serif text-4xl leading-[1.02] text-ink-950 md:text-6xl">
            Shoots, shows, streams, studio &amp; the digital to go with it.
          </h2>
        </Reveal>

        {/* ledger */}
        <div className="mt-12 border-t border-ink-900/20">
          {services.map((s, i) => {
            const rate = fromPrice(s.pricing)
            return (
              <Reveal key={s.id} delay={Math.min(i * 0.03, 0.12)} amount={0.2}>
                <Link
                  to={s.slug}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 border-b border-ink-900/20 py-5 transition-colors hover:bg-paper-100 md:grid-cols-[3rem_minmax(0,1.2fr)_minmax(0,1fr)_8rem_2rem] md:gap-6"
                >
                  <span className="font-mono text-xs font-bold text-primary-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-2xl leading-tight text-ink-950 transition-colors group-hover:text-primary-600 md:text-3xl">
                    {s.title}
                  </span>
                  <span className="hidden text-sm leading-snug text-ink-600 md:block">
                    {s.short}
                  </span>
                  <span className="hidden text-right font-mono text-xs text-ink-700 md:block">
                    {rate || 'on quote'}
                  </span>
                  <ArrowRight
                    size={18}
                    className="hidden justify-self-end text-ink-400 transition-all group-hover:translate-x-1 group-hover:text-primary-500 md:block"
                  />
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-4 text-right font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
            Rates indicative — final quote depends on scale &amp; dates
          </p>
        </Reveal>
      </div>
    </section>
  )
}
