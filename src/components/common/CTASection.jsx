import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from './Button'

/**
 * Booking slip — dashed cut-out box, like a coupon stapled to a call sheet.
 */
export default function CTASection({
  title = 'Planning something?',
  subtitle = "Tell us what you have in mind. We'll come back within a day with what it'll take — cost, crew and dates.",
}) {
  const { data } = useData()
  const contact = data.contact

  return (
    <section className="px-5 pb-24 md:px-8 md:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-7xl border-2 border-dashed border-ink-900/50 bg-paper-100 px-6 py-12 md:px-12 md:py-16"
      >
        <span className="absolute -top-3 left-8 bg-paper-50 px-3 font-mono text-sm text-ink-600">✂</span>
        <span className="doc-label absolute -top-2 right-8 bg-paper-50 px-3 text-primary-600">Booking enquiry</span>

        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-4xl leading-[1.02] text-ink-950 md:text-6xl">{title}</h2>
            <p className="mt-4 max-w-xl text-base text-ink-600 md:text-lg">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact">
              Get a quote <ArrowRight size={15} />
            </Button>
            <Button href={`tel:${contact.phoneRaw}`} variant="outline">
              <Phone size={14} /> {contact.phone}
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
