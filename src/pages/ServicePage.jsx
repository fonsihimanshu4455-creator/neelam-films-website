import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Play, ArrowRight } from 'lucide-react'
import { useData } from '../context/DataContext'
import PageHero from '../components/common/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import CTASection from '../components/common/CTASection'
import VideoModal from '../components/common/VideoModal'
import Button from '../components/common/Button'
import Icon from '../components/common/Icon'
import Reveal from '../components/common/Reveal'
import EquipmentGrid from '../components/services/EquipmentGrid'

/**
 * Generic light service page driven by the service id (services.json).
 */
export default function ServicePage({ serviceId }) {
  const { data } = useData()
  const service = data.services.find((s) => s.id === serviceId)
  const [videoOpen, setVideoOpen] = useState(false)

  if (!service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-ink-700">
        Service not found.
      </div>
    )
  }

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.tagline}
        subtitle={service.description}
        image={service.hero}
      >
        <Button to="/contact">
          Request a quote <ArrowRight size={18} />
        </Button>
      </PageHero>

      {/* What we offer */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <SectionHeader
              align="left"
              eyebrow="What we offer"
              title={`Our ${service.title} capabilities`}
              subtitle="A complete, end-to-end offering tailored to your needs."
            />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.offers.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-cream-300 bg-cream-100 p-7 shadow-sm transition hover:border-gold-400/50 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400/10 text-gold-400 transition group-hover:bg-gold-400 group-hover:text-ink-900">
                  <Icon name={service.icon} size={24} />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-primary-700">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment grid (equipment rental only) */}
      {service.id === 'equipment-rental' && <EquipmentGrid />}

      {/* Our process */}
      <section className="border-y border-white/60 bg-cream-1005 px-5 py-24 backdrop-blur-md md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex justify-center text-center">
            <SectionHeader
              eyebrow="How we work"
              title="Our process"
              subtitle="A proven, transparent workflow from first call to final delivery."
            />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-3xl border border-cream-300 bg-cream-100 p-7"
              >
                <span className="font-display text-6xl font-extrabold text-gold-400/25">{p.step}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-primary-700">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-700">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex justify-center text-center">
            <SectionHeader eyebrow="Showcase" title="Recent work" />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {service.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group aspect-square overflow-hidden rounded-2xl border border-cream-300"
              >
                <img
                  src={img}
                  alt={`${service.title} work ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample video */}
      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 flex justify-center text-center">
            <SectionHeader eyebrow="Watch" title="Sample reel" />
          </div>
          <Reveal variant="scale">
            <button
              onClick={() => setVideoOpen(true)}
              className="group relative block aspect-video w-full overflow-hidden rounded-3xl border border-cream-300 shadow-soft"
            >
              <img
                src={service.gallery[0]}
                alt="Sample reel"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink-900/30" />
              <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-gold-400 shadow-glow transition group-hover:scale-110">
                <Play size={32} fill="currentColor" />
              </span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      {service.pricing && service.pricing.length > 0 && (
        <section className="border-t border-white/60 bg-cream-1005 px-5 py-24 backdrop-blur-md md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex justify-center text-center">
              <SectionHeader
                eyebrow="Pricing"
                title="Transparent packages"
                subtitle="Indicative starting prices. Contact us for a custom quote."
              />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {service.pricing.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex flex-col rounded-3xl border p-8 ${
                    i === 1
                      ? 'border-gold-400 bg-gold-400/10 shadow-soft'
                      : 'border-cream-300 bg-cream-100 shadow-sm'
                  }`}
                >
                  <h3 className="font-display text-lg font-bold text-primary-700">{p.name}</h3>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-display text-3xl font-extrabold text-gradient">{p.price}</span>
                    <span className="mb-1 text-sm text-ink-700">/ {p.unit}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-ink-700">
                        <Check size={16} className="text-gold-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant={i === 1 ? 'primary' : 'outline'} className="mt-7 w-full">
                    Book now
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title={`Ready to start your ${service.title.toLowerCase()} project?`} />

      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoId={service.videoId}
        title={service.title}
      />
    </>
  )
}
