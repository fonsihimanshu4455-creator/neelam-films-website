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
import EquipmentGrid from '../components/services/EquipmentGrid'

/**
 * Generic service page driven by the service id (from services.json).
 * Renders hero, offers, process, gallery, sample video, pricing & CTA.
 */
export default function ServicePage({ serviceId }) {
  const { data } = useData()
  const service = data.services.find((s) => s.id === serviceId)
  const [videoOpen, setVideoOpen] = useState(false)

  if (!service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-slate-500">
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
          Request a Quote <ArrowRight size={18} />
        </Button>
      </PageHero>

      {/* What we offer */}
      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="What We Offer"
            title={`Our ${service.title} Capabilities`}
            subtitle="A complete, end-to-end offering tailored to your needs."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.offers.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-500">
                  <Icon name={service.icon} size={24} />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-dark-900">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment grid (only for equipment rental) */}
      {service.id === 'equipment-rental' && <EquipmentGrid />}

      {/* Our process */}
      <section className="bg-dark-900 px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            light
            eyebrow="How We Work"
            title="Our Process"
            subtitle="A proven, transparent workflow from first call to final delivery."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative rounded-3xl border border-white/10 bg-white/5 p-7"
              >
                <span className="font-display text-5xl font-extrabold text-primary-500/40">
                  {p.step}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Showcase" title="Recent Work" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {service.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="group aspect-square overflow-hidden rounded-2xl"
              >
                <img
                  src={img}
                  alt={`${service.title} work ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample video */}
      <section className="bg-white px-4 pb-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Watch" title="Sample Reel" />
          <motion.button
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setVideoOpen(true)}
            className="group relative block aspect-video w-full overflow-hidden rounded-3xl shadow-xl"
          >
            <img
              src={service.gallery[0]}
              alt="Sample reel"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark-900/40" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary-600 transition group-hover:scale-110">
              <Play size={32} fill="currentColor" />
            </span>
          </motion.button>
        </div>
      </section>

      {/* Pricing */}
      {service.pricing && service.pricing.length > 0 && (
        <section className="bg-[#F8FAFC] px-4 py-24 md:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Pricing"
              title="Transparent Packages"
              subtitle="Indicative starting prices. Contact us for a custom quote."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {service.pricing.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`flex flex-col rounded-3xl border p-8 shadow-sm ${
                    i === 1
                      ? 'border-primary-500 bg-white ring-2 ring-primary-500'
                      : 'border-slate-100 bg-white'
                  }`}
                >
                  <h3 className="font-display text-lg font-bold text-dark-900">{p.name}</h3>
                  <div className="mt-3 flex items-end gap-1">
                    <span className="font-display text-3xl font-extrabold text-primary-600">
                      {p.price}
                    </span>
                    <span className="mb-1 text-sm text-slate-400">/ {p.unit}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check size={16} className="text-primary-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button to="/contact" variant={i === 1 ? 'primary' : 'outline'} className="mt-7 w-full">
                    Book Now
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
