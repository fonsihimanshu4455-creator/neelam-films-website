import { useData } from '../../context/DataContext'
import SectionHeader from '../common/SectionHeader'

/**
 * Infinite client-logo marquee (duplicated track for a seamless loop).
 */
export default function ClientsMarquee() {
  const { data } = useData()
  const clients = data.clients
  const track = [...clients, ...clients]

  return (
    <section className="bg-white px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Trusted By"
          title="Brands That Believe In Us"
          subtitle="For 30 years, India's leading brands have trusted Neelam Films with their most important stories."
        />
      </div>

      <div className="relative overflow-hidden">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee gap-6">
          {track.map((c, i) => (
            <div
              key={i}
              className="flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-6 transition hover:border-primary-200 hover:bg-primary-50"
            >
              <img
                src={c.logo}
                alt={c.name}
                loading="lazy"
                className="max-h-10 w-auto opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
