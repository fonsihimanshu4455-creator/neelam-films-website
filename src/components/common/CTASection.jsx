import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from './Button'

/**
 * Plain dark CTA band — no stock photo, just the ask.
 */
export default function CTASection({
  title = 'Planning something?',
  subtitle = "Tell us what you have in mind. We'll come back within a day with what it'll take — cost, crew and dates.",
}) {
  const { data } = useData()
  const contact = data.contact

  return (
    <section className="border-t border-cream-50/10 bg-ink-900/40">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end"
        >
          <div>
            <h2 className="max-w-2xl font-display text-5xl uppercase leading-[0.9] text-cream-50 md:text-7xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base text-cream-300 md:text-lg">{subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button to="/contact">
              Get a quote
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
