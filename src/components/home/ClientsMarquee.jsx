import { useData } from '../../context/DataContext'
import Reveal from '../common/Reveal'

/**
 * Client register — a plain typeset line, like names in a ledger.
 */
export default function ClientsMarquee() {
  const { data } = useData()
  const clients = data.clients

  return (
    <section className="px-5 pb-24 md:px-8 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="rule-heavy pt-3">
            <span className="doc-label text-primary-600">Client register</span>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-7 max-w-5xl font-serif text-2xl leading-relaxed text-ink-700 md:text-3xl">
            {clients.map((c, i) => (
              <span key={c.name}>
                <span className="transition-colors hover:text-ink-950">{c.name}</span>
                {i < clients.length - 1 && <span className="px-2.5 font-mono text-base text-primary-500">/</span>}
              </span>
            ))}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="doc-label mt-6 text-ink-500">…and the local businesses, artists &amp; committees that keep us booked every season.</p>
        </Reveal>
      </div>
    </section>
  )
}
