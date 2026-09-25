import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { useData } from '../context/DataContext'

/**
 * Post-submit "Thank you" page.
 * The contact form redirects here after a successful submission — this page
 * fires the Google Ads conversion (Contact / lead) on load.
 */
export default function ThankYou() {
  const { data } = useData()
  const { contact } = data

  // Fire the Google Ads "Contact" conversion when this page loads
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-18234415584/CS9ECKCS5IQdEOCz7PZD',
        value: 1.0,
        currency: 'INR',
      })
    }
  }, [])

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-5 py-24 md:px-8">
      {/* soft brand glows */}
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-gold-400/10 blur-[130px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-primary-600/10 blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-xl text-center"
      >
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800 shadow-glow">
          <CheckCircle2 size={40} className="text-white" />
        </div>

        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-400">Message received</span>
        <h1 className="mt-4 font-display text-4xl font-bold text-primary-700 md:text-5xl">
          Thank you!
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-ink-700 md:text-lg">
          Your request has reached the Neelam Films team. We'll get back to you within
          <b className="text-ink-900"> 24 hours</b> with the details. For anything urgent,
          reach us directly below.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${contact.whatsapp}?text=Hi%20Neelam%20Films`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
          >
            <MessageCircle size={18} fill="currentColor" /> Chat on WhatsApp
          </a>
          <a
            href={`tel:${contact.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full border border-cream-300 bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition hover:border-gold-400"
          >
            <Phone size={18} /> {contact.phone}
          </a>
        </div>

        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-ink-900 transition hover:text-primary-700"
          >
            Back to home <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
