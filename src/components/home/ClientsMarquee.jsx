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
    <div className="flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 transition hover:border-primary-500/40 hover:bg-white/[0.06]">
      <img
        src={c.logo}
        alt={c.name}
        loading="lazy"
        className="max-h-9 w-auto opacity-50 brightness-0 invert transition hover:opacity-100"
      />
    </div>
  )

  return (
    <section className="overflow-hidden border-y border-white/10 bg-white/[0.015] py-16">
      <div className="mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-400">
          30 years · 500+ brands · one promise
        </span>
      </div>

      <div className="relative space-y-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#08090f] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#08090f] to-transparent" />

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
