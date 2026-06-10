import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Camera as Instagram } from 'lucide-react'
import { useData } from '../context/DataContext'
import PageHero from '../components/common/PageHero'

const INITIAL = { name: '', phone: '', email: '', service: '', message: '' }

const FIELD_CLASS =
  'w-full border border-cream-50/15 bg-ink-950 px-4 py-3 text-sm text-cream-50 placeholder-cream-500 outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20'

export default function Contact() {
  const { data } = useData()
  const { contact, services } = data
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // No backend — compose the enquiry into a pre-filled WhatsApp message.
  const handleSubmit = (e) => {
    e.preventDefault()
    const msg =
      `Hi Neelam Films! I'd like a quote.\n\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Service: ${form.service}\n\n` +
      `${form.message}`
    window.open(`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
    setForm(INITIAL)
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about your project"
        subtitle="Whether it's a film, an event, a website or an app — our team is ready to make it happen. Reach out for a free quote."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
      />

      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-cream-50/10 bg-ink-900 p-8 shadow-soft md:p-10"
          >
            <h2 className="font-display text-3xl uppercase text-cream-50">Send us a message</h2>
            <p className="mt-2 text-sm text-cream-400">
              Fill the form — it opens WhatsApp with your enquiry ready to send, and we reply within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" value={form.name} onChange={handleChange} required />
                <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
              </div>
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />

              <div>
                <label className="mb-1.5 block text-sm font-medium text-cream-200">Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className={FIELD_CLASS}
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-cream-200">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className={FIELD_CLASS}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 bg-primary-500 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-ink-950 shadow-glow transition hover:bg-primary-400"
              >
                <Send size={18} />
                Send via WhatsApp
              </motion.button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 border border-primary-500/40 bg-primary-500/10 px-4 py-3 text-sm text-primary-300"
                >
                  <CheckCircle2 size={18} />
                  WhatsApp is opening with your message pre-filled — just hit send!
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Info + map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-8 text-ink-950 shadow-soft md:p-10">
              <h2 className="font-display text-3xl uppercase">Contact information</h2>
              <p className="mt-2 text-sm text-ink-900/70">Reach us directly through any of these channels.</p>

              <ul className="mt-7 space-y-5 text-sm">
                <InfoRow icon={MapPin} label="Address" value={contact.address} />
                <InfoRow icon={Phone} label="Phone" value={contact.phone} href={`tel:${contact.phoneRaw}`} />
                <InfoRow icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
                <InfoRow icon={Instagram} label="Instagram" value={contact.instagram} href={contact.instagramUrl} />
                <InfoRow icon={Clock} label="Working hours" value={contact.hours} />
              </ul>

              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hi%20Neelam%20Films`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2 bg-ink-950 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-cream-50 transition hover:bg-ink-800"
              >
                <MessageCircle size={18} className="text-[#25D366]" fill="currentColor" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden border border-cream-50/10 shadow-soft">
              <iframe
                title="Neelam Films location"
                src={contact.mapEmbed}
                width="100%"
                height="280"
                style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(0.9)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-cream-200">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={FIELD_CLASS}
      />
    </div>
  )
}

function InfoRow({ icon: IconCmp, label, value, href }) {
  const content = (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink-950/10 text-ink-950">
        <IconCmp size={18} />
      </span>
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink-900/60">{label}</p>
        <p className="font-medium text-ink-950">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <li>
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="transition hover:opacity-75">
        {content}
      </a>
    </li>
  ) : (
    <li>{content}</li>
  )
}
