import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'

/**
 * Plain editorial service index — numbered rows, quiet hover.
 */
export default function ServicesGrid() {
  const { data } = useData()
  const services = data.services

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
                What we do
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 max-w-2xl font-display text-5xl uppercase leading-[0.9] text-cream-50 md:text-7xl">
                Everything under <span className="font-serif lowercase italic tracking-normal text-primary-400">one roof</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-sm text-cream-300">
              Shoots, events, streams, studio time, gear on rent — and the websites and ads to go
              with them. One call covers all of it.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Index list */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="border-t border-cream-50/10">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={Math.min(i * 0.03, 0.15)} amount={0.15}>
              <Link
                to={s.slug}
                className="group flex items-center gap-5 border-b border-cream-50/10 py-6 md:gap-10 md:py-7"
              >
                <span className="w-10 shrink-0 font-display text-base text-cream-500 md:text-lg">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 font-display text-3xl uppercase leading-none text-cream-50 transition-colors duration-300 group-hover:text-primary-400 sm:text-4xl md:text-5xl">
                  {s.title}
                </span>
                <span className="hidden max-w-xs text-sm leading-snug text-cream-400 lg:block">
                  {s.short}
                </span>
                <ArrowUpRight
                  size={22}
                  className="shrink-0 text-cream-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-400"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
