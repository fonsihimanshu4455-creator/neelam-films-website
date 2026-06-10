import { useState } from 'react'
import { MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { useData } from '../context/DataContext'
import PageHero from '../components/common/PageHero'
import Reveal from '../components/common/Reveal'

const INITIAL = { name: '', phone: '', email: '', service: '', message: '' }

const FIELD_CLASS =
  'w-full border-0 border-b-2 border-ink-900/30 bg-transparent px-0 py-2.5 font-mono text-sm text-ink-950 placeholder-ink-500/50 outline-none transition focus:border-primary-500'

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
        eyebrow="Page 04 — Contact"
        title="Tell us the plan."
        subtitle="A film, an event, a stream, a website — write it down below or just call. We reply within a day, usually sooner."
      />

      <section className="px-5 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
          {/* Enquiry form — typewriter sheet */}
          <Reveal className="lg:col-span-7">
            <div className="rule-heavy pt-3">
              <span className="doc-label text-primary-600">Enquiry form</span>
            </div>
            <p className="mt-4 text-sm text-ink-600">
              Submitting opens WhatsApp with your enquiry typed out and ready to send.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <Field label="01 — Full name" name="name" value={form.name} onChange={handleChange} required />
                <Field label="02 — Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} required />
              </div>
              <Field label="03 — Email" name="email" type="email" value={form.email} onChange={handleChange} required />

              <div>
                <label className="doc-label mb-1 block text-ink-600">04 — Service required</label>
                <select name="service" value={form.service} onChange={handleChange} required className={FIELD_CLASS}>
                  <option value="">— select —</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="doc-label mb-1 block text-ink-600">05 — The plan</label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Dates, venue, scale, budget if you have one…"
                  className={FIELD_CLASS}
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 border-2 border-primary-500 bg-primary-500 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-paper-50 transition hover:border-primary-600 hover:bg-primary-600 sm:w-auto sm:px-10"
              >
                <Send size={15} />
                Send via WhatsApp
              </button>

              {sent && (
                <p className="flex items-center gap-2 border-l-2 border-primary-500 pl-4 text-sm text-ink-700">
                  <CheckCircle2 size={16} className="text-primary-600" />
                  WhatsApp is opening with your message typed out — just hit send.
                </p>
              )}
            </form>
          </Reveal>

          {/* Office card */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="border-2 border-ink-900 bg-paper-100 shadow-[6px_6px_0_0_rgba(29,25,19,1)]">
              <div className="border-b-2 border-ink-900 px-6 py-4">
                <span className="doc-label text-primary-600">The office</span>
              </div>
              <dl className="space-y-5 px-6 py-6 text-sm">
                {[
                  ['Address', contact.address],
                  ['Phone', contact.phone, `tel:${contact.phoneRaw}`],
                  ['Email', contact.email, `mailto:${contact.email}`],
                  ['Instagram', contact.instagram, contact.instagramUrl],
                  ['Hours', contact.hours],
                ].map(([k, v, href]) => (
                  <div key={k}>
                    <dt className="doc-label text-ink-500">{k}</dt>
                    <dd className="mt-1 font-mono text-ink-900">
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="underline decoration-primary-500 decoration-2 underline-offset-4 transition hover:text-primary-600"
                        >
                          {v}
                        </a>
                      ) : (
                        v
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hi%20Neelam%20Films`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-t-2 border-ink-900 bg-ink-950 py-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-paper-50 transition hover:bg-ink-900"
              >
                <MessageCircle size={16} className="text-[#25D366]" fill="currentColor" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-6 overflow-hidden border border-ink-900/30">
              <iframe
                title="Neelam Films location"
                src={contact.mapEmbed}
                width="100%"
                height="240"
                style={{ border: 0, filter: 'grayscale(1) contrast(0.95)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="doc-label mb-1 block text-ink-600">{label}</label>
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
