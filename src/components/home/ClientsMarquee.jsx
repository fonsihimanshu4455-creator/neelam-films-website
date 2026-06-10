import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'

/**
 * Plain client list — names, no animation, no fake logos.
 */
export default function ClientsMarquee() {
  const { data } = useData()
  const clients = data.clients

  return (
    <section className="border-y border-cream-50/10 bg-ink-900/40 px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
            Brands we've shot for
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-4xl font-display text-2xl uppercase leading-relaxed text-cream-300 md:text-4xl">
            {clients.map((c, i) => (
              <span key={c.name}>
                <span className="transition-colors hover:text-cream-50">{c.name}</span>
                {i < clients.length - 1 && <span className="px-3 text-primary-500/60">·</span>}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
