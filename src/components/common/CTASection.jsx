import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from './Button'

/**
 * Reusable final call-to-action band with a sky-blue gradient.
 */
export default function CTASection({
  title = "Let's Create Something Unforgettable",
  subtitle = 'Tell us about your project and get a free, no-obligation quote within 24 hours.',
}) {
  const { data } = useData()
  const contact = data.contact

  return (
    <section className="px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 px-6 py-16 text-center shadow-2xl shadow-primary-500/30 md:px-16 md:py-20"
      >
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -right-8 h-52 w-52 rounded-full bg-white/10 blur-2xl" />

        <h2 className="relative font-display text-3xl font-extrabold text-white md:text-4xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-2xl text-base text-primary-50 md:text-lg">
          {subtitle}
        </p>

        <div className="relative mt-9 flex flex-wrap justify-center gap-4">
          <Button to="/contact" variant="white">
            Get a Free Quote
            <ArrowRight size={18} />
          </Button>
          <Button href={`tel:${contact.phoneRaw}`} variant="ghost">
            <Phone size={18} />
            {contact.phone}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
