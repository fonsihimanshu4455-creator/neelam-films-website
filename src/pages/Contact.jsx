import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Camera as Instagram } from 'lucide-react'
import { useData } from '../context/DataContext'
import PageHero from '../components/common/PageHero'

const INITIAL = { name: '', phone: '', email: '', service: '', message: '' }

// Same Google Apps Script endpoint used by the landing pages → logs to the "Leads" sheet
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyfg6fbi_k9mB1cOA6SgAWI1T-qHb8Fdw996LB8iFmVuGnhsuGPEg6aFS67qzOka6teuA/exec'

export default function Contact() {
  const { data } = useData()
  const { contact, services } = data
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      eventType: form.service || 'General Enquiry',
      message: form.message,
      source: 'Website Contact Form',
      timestamp: new Date().toISOString(),
    }

    try {
      await fetch(SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch {
      // no-cors: we can't read the response; treat submission as sent
    }

    setSending(false)
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
            className="rounded-3xl border border-cream-300 bg-cream-100 p-8 shadow-soft md:p-10"
          >
            <h2 className="font-display text-2xl font-bold text-primary-700">Send us a message</h2>
            <p className="mt-2 text-sm text-ink-700">Fill the form and we'll get back within 24 hours.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" value={form.name} onChange={handleChange} required />
                <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
              </div>
              <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />

              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-900">Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-cream-300 bg-cream-100 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-ink-900">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-cream-300 bg-cream-100 px-4 py-3 text-sm text-ink-900 placeholder-slate-400 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.02 }}
                whileTap={{ scale: sending ? 1 : 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 py-3.5 text-sm font-semibold text-ink-900 shadow-glow transition hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-900/30 border-t-ink-900" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send message
                  </>
                )}
              </motion.button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                >
                  <CheckCircle2 size={18} />
                  Thank you! Your message has been received.
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
            <div className="rounded-3xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 text-white shadow-soft md:p-10">
              <h2 className="font-display text-2xl font-bold !text-white">Contact information</h2>
              <p className="mt-2 text-sm text-white/70">Reach us directly through any of these channels.</p>

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
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-semibold text-primary-700 transition hover:bg-cream-100"
              >
                <MessageCircle size={18} className="text-[#25D366]" fill="currentColor" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-cream-300 shadow-sm">
              <iframe
                title="Neelam Films location"
                src={contact.mapEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
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
      <label className="mb-1.5 block text-sm font-medium text-ink-900">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-cream-300 bg-cream-100 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20"
      />
    </div>
  )
}

function InfoRow({ icon: IconCmp, label, value, href }) {
  const content = (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
        <IconCmp size={18} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-gold-300">{label}</p>
        <p className="text-white">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <li>
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="transition hover:opacity-80">
        {content}
      </a>
    </li>
  ) : (
    <li>{content}</li>
  )
}
