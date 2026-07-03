import { useData } from '../../context/DataContext'

/**
 * Dual-row infinite client-logo marquee on light.
 */
export default function ClientsMarquee() {
  const { data } = useData()
  const clients = data.clients
  const mid = Math.ceil(clients.length / 2)
  const rowA = [...clients.slice(0, mid), ...clients.slice(0, mid)]
  const rowB = [...clients.slice(mid), ...clients.slice(mid)]

  const Logo = ({ c }) => (
    <div className="group flex h-16 min-w-[10rem] shrink-0 items-center justify-center rounded-2xl border border-cream-300 bg-cream-100 px-7 transition hover:border-gold-400/50 hover:bg-cream-200">
      <span className="whitespace-nowrap text-center text-sm font-bold uppercase tracking-wide text-primary-700/70 transition group-hover:text-primary-700">
        {c.name}
      </span>
    </div>
  )

  return (
    <section className="overflow-hidden border-y border-cream-300 bg-cream-50 py-16">
      <div className="mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
          30 years · 500+ brands · one promise
        </span>
      </div>

      <div className="relative space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream-50 to-transparent" />

        <div className="flex w-max animate-marquee gap-4">
          {rowA.map((c, i) => <Logo key={i} c={c} />)}
        </div>
        <div className="flex w-max animate-marquee-reverse gap-4">
          {rowB.map((c, i) => <Logo key={i} c={c} />)}
        </div>
      </div>
    </section>
  )
}
