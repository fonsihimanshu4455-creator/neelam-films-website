import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from './Button'

/**
 * Reusable final CTA band — vibrant blue gradient card with white text.
 */
export default function CTASection({
  title = "Let's create something unforgettable",
  subtitle = 'Tell us about your project and get a free, no-obligation quote within 24 hours.',
}) {
  const { data } = useData()
  const contact = data.contact

  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 px-6 py-20 text-center shadow-glow md:px-16 md:py-28"
      >
        {/* decorative glows */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-12 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="relative">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary-100">
            <span className="h-px w-8 bg-white/60" /> Let's talk
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-primary-50 md:text-lg">{subtitle}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="white">
              Get a free quote
              <ArrowRight size={18} />
            </Button>
            <Button href={`tel:${contact.phoneRaw}`} variant="outline" className="border-white/40 text-white before:bg-white hover:text-primary-700">
              <Phone size={16} />
              {contact.phone}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
