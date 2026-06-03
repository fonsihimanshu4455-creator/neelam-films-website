import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from './Button'
import Aurora from './Aurora'

/**
 * Reusable final CTA band — dark glass card with aurora glow.
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
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-ink-900 px-6 py-20 text-center md:px-16 md:py-28"
      >
        <Aurora />
        <div className="relative">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary-400">
            <span className="h-px w-8 bg-primary-500" /> Let's talk
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-400 md:text-lg">{subtitle}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/contact">
              Get a free quote
              <ArrowRight size={18} />
            </Button>
            <Button href={`tel:${contact.phoneRaw}`} variant="ghost">
              <Phone size={16} />
              {contact.phone}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
