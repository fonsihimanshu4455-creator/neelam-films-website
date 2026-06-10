import { Quote } from 'lucide-react'
import { useData } from '../context/DataContext'
import PageHero from '../components/common/PageHero'
import CTASection from '../components/common/CTASection'
import CountUp from '../components/common/CountUp'
import Reveal from '../components/common/Reveal'

export default function About() {
  const { data } = useData()
  const { team, hero } = data
  const { founder, timeline, mission, vision } = team

  return (
    <>
      <PageHero
        eyebrow="Page 02 — About"
        title="Thirty years, one phone number."
        subtitle="Neelam Films started in 1995 with one camera and a small room in Pandav Nagar. The room is bigger now and the cameras are 4K — the way we work hasn't changed much."
      />

      {/* Story + numbers */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <div className="rule-heavy pt-3">
              <span className="doc-label text-primary-600">The story</span>
            </div>
          </Reveal>
          <div className="md:col-span-8 md:col-start-5">
            <Reveal>
              <div className="space-y-5 text-base leading-relaxed text-ink-700 md:text-lg">
                <p>
                  We've shot television commercials, corporate films, documentaries and music
                  videos. We've built stages, rigged sound and lights, and run multi-camera
                  streams for cricket matches and jagrans. Somewhere along the way we added a
                  recording studio, a rental inventory, and a digital team for websites and ads.
                </p>
                <p>
                  We've worked with HP, Indian Oil, Audi, DHL and Colgate — and with plenty of
                  local businesses, artists and committees whose names you won't recognise but
                  whose events kept us busy every season. Both kinds of work get the same crew
                  and the same care.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="rule-heavy mt-10 grid grid-cols-3 gap-px border-b-2 border-ink-900 bg-ink-900/20">
                {hero.stats.map((s) => (
                  <div key={s.label} className="bg-paper-50 px-4 py-5">
                    <dt className="doc-label text-ink-500">{s.label}</dt>
                    <dd className="mt-2 font-serif text-3xl text-ink-950 md:text-4xl">
                      <CountUp value={s.value} suffix={s.suffix} />
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Timeline — production diary */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <div className="rule-heavy pt-3">
              <span className="doc-label text-primary-600">The diary</span>
            </div>
          </Reveal>
          <div className="border-t border-ink-900/20 md:col-span-8 md:col-start-5">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={Math.min(i * 0.04, 0.16)} amount={0.3}>
                <div className="grid grid-cols-[5rem_1fr] items-baseline gap-6 border-b border-ink-900/20 py-5">
                  <span className="font-mono text-sm font-bold text-primary-600">{t.year}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-ink-950">{t.title}</h3>
                    <p className="mt-1 text-sm text-ink-600">{t.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision — two ruled columns */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          {[
            { label: 'Mission', text: mission },
            { label: 'Vision', text: vision },
          ].map((b, i) => (
            <Reveal key={b.label} delay={i * 0.08}>
              <div className="rule-heavy pt-4">
                <span className="doc-label text-primary-600">{b.label}</span>
                <p className="mt-5 font-serif text-xl leading-relaxed text-ink-900 md:text-2xl">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder */}
      {founder.show !== false && (
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="border-2 border-ink-900 bg-paper-100 p-8 shadow-[6px_6px_0_0_rgba(29,25,19,1)] md:p-12">
                <span className="doc-label text-primary-600">Directed by</span>
                <div className="mt-6 grid items-center gap-8 md:grid-cols-[auto,1fr]">
                  <img
                    src={founder.avatar}
                    alt={founder.name}
                    loading="lazy"
                    className="mx-auto h-40 w-40 border-2 border-ink-900 object-cover"
                  />
                  <div>
                    <Quote className="mb-3 text-primary-500" size={28} />
                    <p className="font-serif text-2xl italic text-ink-900">“{founder.quote}”</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-600">{founder.bio}</p>
                    <p className="mt-4 font-serif text-xl text-ink-950">{founder.name}</p>
                    <p className="doc-label mt-1 text-ink-500">{founder.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
