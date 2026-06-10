import { useState } from 'react'
import { Check, Play, ArrowRight } from 'lucide-react'
import { useData } from '../context/DataContext'
import PageHero from '../components/common/PageHero'
import CTASection from '../components/common/CTASection'
import VideoModal from '../components/common/VideoModal'
import Button from '../components/common/Button'
import Reveal from '../components/common/Reveal'
import EquipmentGrid from '../components/services/EquipmentGrid'

/**
 * Service page set like a department sheet: scope list, working method,
 * recent frames, rate card.
 */
export default function ServicePage({ serviceId }) {
  const { data } = useData()
  const service = data.services.find((s) => s.id === serviceId)
  const [videoOpen, setVideoOpen] = useState(false)

  if (!service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center font-mono text-sm text-ink-500">
        Service not found.
      </div>
    )
  }

  return (
    <>
      <PageHero
        eyebrow={`Dept. — ${service.title}`}
        title={service.tagline}
        subtitle={service.description}
      >
        <Button to="/contact">
          Request a quote <ArrowRight size={15} />
        </Button>
      </PageHero>

      {/* Scope of work — ruled list */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <div className="rule-heavy pt-3">
              <span className="doc-label text-primary-600">Scope of work</span>
            </div>
          </Reveal>
          <div className="border-t border-ink-900/20 md:col-span-8 md:col-start-5">
            {service.offers.map((o, i) => (
              <Reveal key={o.title} delay={Math.min(i * 0.03, 0.12)} amount={0.3}>
                <div className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-ink-900/20 py-5">
                  <span className="font-mono text-xs font-bold text-primary-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-ink-950">{o.title}</h3>
                    <p className="mt-1 text-sm text-ink-600">{o.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment inventory (rental dept. only) */}
      {service.id === 'equipment-rental' && <EquipmentGrid />}

      {/* Working method — numbered strip */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rule-heavy flex items-baseline justify-between pt-3">
              <span className="doc-label text-primary-600">Working method</span>
              <span className="doc-label hidden text-ink-500 sm:block">First call → final delivery</span>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-px border border-ink-900/20 bg-ink-900/20 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06} className="bg-paper-50">
                <div className="h-full px-6 py-7">
                  <span className="font-mono text-xs font-bold text-primary-500">STEP {p.step}</span>
                  <h3 className="mt-3 font-serif text-2xl text-ink-950">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-600">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Frames — contact sheet */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="rule-heavy flex items-baseline justify-between pt-3">
              <span className="doc-label text-primary-600">Recent frames</span>
              <button onClick={() => setVideoOpen(true)} className="doc-label link-underline flex items-center gap-1.5 text-ink-900">
                <Play size={11} fill="currentColor" className="text-primary-500" /> Watch sample reel
              </button>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {service.gallery.map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05} amount={0.2}>
                <div className="group aspect-[4/3] overflow-hidden border border-ink-900/20 bg-paper-200">
                  <img
                    src={img}
                    alt={`${service.title} work ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rate card — table, not cards */}
      {service.pricing && service.pricing.length > 0 && (
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="rule-heavy flex items-baseline justify-between pt-3">
                <span className="doc-label text-primary-600">Rate card</span>
                <span className="doc-label hidden text-ink-500 sm:block">Indicative — final quote on scale &amp; dates</span>
              </div>
            </Reveal>
            <div className="mt-10 border-t-2 border-ink-900">
              {service.pricing.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.05}>
                  <div className="grid gap-4 border-b border-ink-900/20 py-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_10rem_auto] md:items-center md:gap-8">
                    <div>
                      <h3 className="font-serif text-2xl text-ink-950">{p.name}</h3>
                      <p className="doc-label mt-1 text-ink-500">per {p.unit}</p>
                    </div>
                    <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-center gap-1.5 text-sm text-ink-700">
                          <Check size={13} className="text-primary-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="font-mono text-xl font-bold text-ink-950 md:text-right">{p.price}</span>
                    <Button to="/contact" variant="outline" className="px-5 py-2.5 md:justify-self-end">
                      Book
                    </Button>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title={`Ready to book ${service.title.toLowerCase()}?`} />

      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoId={service.videoId}
        title={service.title}
      />
    </>
  )
}
