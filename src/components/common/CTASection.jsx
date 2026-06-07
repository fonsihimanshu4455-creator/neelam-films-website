import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from './Button'

/**
 * Cinematic full-bleed CTA banner with a parallax image & blue-tinted overlay.
 */
export default function CTASection({
  title = "Let's create something unforgettable",
  subtitle = 'Tell us about your project and get a free, no-obligation quote within 24 hours.',
  image = 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1800&q=80',
}) {
  const { data } = useData()
  const contact = data.contact
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 h-[125%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink-950/75" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-700/70 via-primary-900/40 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-28 text-center md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary-200">
            <span className="h-px w-8 bg-white/50" /> Let's talk
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-200 md:text-lg">{subtitle}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="white">
              Get a free quote
              <ArrowRight size={18} />
            </Button>
            <Button
              href={`tel:${contact.phoneRaw}`}
              variant="outline"
              className="border-white/40 text-white before:bg-white hover:text-primary-700"
            >
              <Phone size={16} />
              {contact.phone}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
