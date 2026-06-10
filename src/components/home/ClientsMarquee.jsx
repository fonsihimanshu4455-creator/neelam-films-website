import { useData } from '../../context/DataContext'
import { useMemo } from 'react'

/**
 * Dual-row typographic client marquee — pure wordmarks, no logo files needed.
 * Alternates condensed caps with italic serif for an editorial rhythm.
 */
export default function ClientsMarquee() {
  const { data } = useData()
  const clients = data.clients

  const { rowA, rowB } = useMemo(() => {
    const mid = Math.ceil(clients.length / 2)
    const a = clients.slice(0, mid)
    const b = clients.slice(mid)
    return { rowA: [...a, ...a], rowB: [...b, ...b] }
  }, [clients])

  const Name = ({ c, i }) => (
    <span className="flex shrink-0 items-center">
      <span
        className={
          i % 2 === 0
            ? 'px-8 font-display text-3xl uppercase tracking-wide text-cream-200/70 transition hover:text-primary-400 md:text-5xl'
            : 'px-8 font-serif text-3xl italic text-cream-300/60 transition hover:text-primary-400 md:text-5xl'
        }
      >
        {c.name}
      </span>
      <span className="text-primary-500/60">✦</span>
    </span>
  )

  return (
    <section className="overflow-hidden border-y border-cream-50/10 bg-ink-900/50 py-16">
      <div className="mb-10 text-center">
        <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-cream-400">
          30 years · 500+ brands · one promise
        </span>
      </div>

      <div className="relative space-y-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent" />

        <div className="flex w-max animate-marquee items-center">
          {rowA.map((c, i) => <Name key={i} c={c} i={i} />)}
        </div>
        <div className="flex w-max animate-marquee-reverse items-center">
          {rowB.map((c, i) => <Name key={i} c={c} i={i + 1} />)}
        </div>
      </div>
    </section>
  )
}
