import { useState } from 'react'
import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'
import Button from '../common/Button'

const FILTERS = ['All', 'Camera', 'Light', 'Audio', 'Studio']

/**
 * Rental inventory as a stock register — thumbnail, item, category, rate.
 */
export default function EquipmentGrid() {
  const { data } = useData()
  const equipment = data.equipment
  const [filter, setFilter] = useState('All')

  const items = filter === 'All' ? equipment : equipment.filter((e) => e.category === filter)

  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rule-heavy flex flex-wrap items-baseline justify-between gap-4 pt-3">
            <span className="doc-label text-primary-600">Stock register — rental inventory</span>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`doc-label pb-0.5 transition ${
                    filter === f
                      ? 'border-b-2 border-primary-500 text-primary-600'
                      : 'border-b-2 border-transparent text-ink-600 hover:text-ink-950'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 border-t border-ink-900/20">
          {items.map((e, i) => (
            <Reveal key={e.id} delay={Math.min(i * 0.02, 0.1)} amount={0.2}>
              <div className="grid grid-cols-[4.5rem_1fr_auto] items-center gap-4 border-b border-ink-900/20 py-4 md:grid-cols-[5.5rem_minmax(0,1.2fr)_minmax(0,1.4fr)_7rem_8rem_auto] md:gap-6">
                <span className="block aspect-[4/3] w-full overflow-hidden border border-ink-900/20 bg-paper-200">
                  <img src={e.image} alt={e.name} loading="lazy" className="h-full w-full object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-serif text-lg leading-tight text-ink-950 md:text-xl">{e.name}</span>
                  <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500 md:hidden">
                    {e.category} — {e.rate}/{e.unit}
                  </span>
                </span>
                <span className="hidden text-sm text-ink-600 md:block">{e.desc}</span>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-ink-500 md:block">
                  {e.category}
                </span>
                <span className="hidden text-right font-mono text-sm font-bold text-ink-950 md:block">
                  {e.rate}<span className="font-normal text-ink-500">/{e.unit}</span>
                </span>
                <Button to="/contact" variant="outline" className="px-4 py-2 text-[10px]">
                  Rent
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
