import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Camera as Instagram } from 'lucide-react'
import { useData } from '../context/DataContext'
import PageHero from '../components/common/PageHero'

const INITIAL = { name: '', phone: '', email: '', service: '', message: '' }

export default function Contact() {
  const { data } = useData()
  const { contact, services } = data
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet — simulate success & log payload
    console.log('Contact form submission:', form)
    setSent(true)
    setForm(INITIAL)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Talk About Your Project"
        subtitle="Whether it's a film, an event, or a digital campaign — our team is ready to make it happen. Reach out for a free quote."
        image="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&q=80"
      />

      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:p-10"
          >
            <h2 className="font-display text-2xl font-bold text-dark-900">Send Us a Message</h2>
            <p className="mt-2 text-sm text-slate-500">
              Fill the form and we'll get back within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" value={form.name} onChange={handleChange} required />
                <Field
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <Field
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />

              <div>
                <label className="mb-1.5 block text-sm font-medium text-dark-700">Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-dark-700">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-600"
              >
                <Send size={18} />
                Send Message
              </motion.button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700"
                >
                  <CheckCircle2 size={18} />
                  Thank you! Your message has been received.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Info + map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="rounded-3xl bg-dark-900 p-8 text-white md:p-10">
              <h2 className="font-display text-2xl font-bold">Contact Information</h2>
              <p className="mt-2 text-sm text-slate-400">
                Reach us directly through any of these channels.
              </p>

              <ul className="mt-7 space-y-5 text-sm">
                <InfoRow icon={MapPin} label="Address" value={contact.address} />
                <InfoRow
                  icon={Phone}
                  label="Phone"
                  value={contact.phone}
                  href={`tel:${contact.phoneRaw}`}
                />
                <InfoRow
                  icon={Mail}
                  label="Email"
                  value={contact.email}
                  href={`mailto:${contact.email}`}
                />
                <InfoRow
                  icon={Instagram}
                  label="Instagram"
                  value={contact.instagram}
                  href={contact.instagramUrl}
                />
                <InfoRow icon={Clock} label="Working Hours" value={contact.hours} />
              </ul>

              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hi%20Neelam%20Films`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-semibold text-white transition hover:bg-[#1ebe57]"
              >
                <MessageCircle size={18} fill="white" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
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

/* ---- small presentational helpers ---- */

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-dark-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
      />
    </div>
  )
}

function InfoRow({ icon: IconCmp, label, value, href }) {
  const content = (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-500/15 text-primary-400">
        <IconCmp size={18} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
        <p className="text-slate-200">{value}</p>
      </div>
    </div>
  )
  return href ? (
    <li>
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="transition hover:text-primary-400">
        {content}
      </a>
    </li>
  ) : (
    <li>{content}</li>
  )
}
