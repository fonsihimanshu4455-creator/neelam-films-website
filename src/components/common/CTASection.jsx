import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from './Button'

/**
 * Cinematic full-bleed CTA banner with a parallax image & champagne glow.
 */
export default function CTASection({
  title = "Let's create something timeless",
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
        className="absolute inset-0 h-[125%] w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-ink-950/75" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 py-28 text-center md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
            <span className="h-px w-8 bg-primary-500" /> Let's talk <span className="h-px w-8 bg-primary-500" />
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-5xl uppercase leading-[0.92] text-cream-50 md:text-7xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-cream-300 md:text-lg">{subtitle}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/contact">
              Get a free quote
              <ArrowRight size={18} />
            </Button>
            <Button href={`tel:${contact.phoneRaw}`} variant="outline">
              <Phone size={16} />
              {contact.phone}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
