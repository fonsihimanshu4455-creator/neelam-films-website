import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Send, ArrowUpRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Logo from '../common/Logo'

/* ---- Brand social logos (inline SVG, crisp at any size) ---- */
const InstagramLogo = () => (
  <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
    <defs>
      <radialGradient id="nf-ig" cx="28%" cy="100%" r="130%">
        <stop offset="0" stopColor="#FFD776" />
        <stop offset="0.35" stopColor="#F3736B" />
        <stop offset="0.6" stopColor="#D4258E" />
        <stop offset="0.9" stopColor="#6E2AC2" />
      </radialGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="url(#nf-ig)" />
    <rect x="14" y="14" width="20" height="20" rx="6" fill="none" stroke="#fff" strokeWidth="2.6" />
    <circle cx="24" cy="24" r="5.2" fill="none" stroke="#fff" strokeWidth="2.6" />
    <circle cx="32" cy="16" r="1.9" fill="#fff" />
  </svg>
)

const WhatsAppLogo = () => (
  <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#25D366" />
    <path
      fill="#fff"
      transform="translate(11 11) scale(1.083)"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
    />
  </svg>
)

const GmailLogo = () => (
  <svg viewBox="0 0 48 48" className="h-11 w-11" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#fff" stroke="#eae1d4" />
    <g transform="translate(5 7) scale(0.8)">
      <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z" />
      <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z" />
      <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17" />
      <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0 C4.924,8,3,9.924,3,12.298z" />
      <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z" />
    </g>
  </svg>
)

export default function Footer() {
  const { data } = useData()
  const { contact, services } = data
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative overflow-hidden border-t border-cream-300 bg-cream-100 text-ink-700">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary-600/5 blur-[120px]" />
      {/* Giant brand wordmark */}
      <div className="pointer-events-none relative select-none overflow-hidden">
        <p className="-mb-4 whitespace-nowrap text-center font-display text-[18vw] leading-none text-primary-700/[0.05] md:-mb-8">
          NEELAM FILMS
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Logo className="h-32 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-ink-700">
              Delhi's trusted production house & live event specialists since 1995. Three decades of
              crafting stories that move and events that matter.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Logo: InstagramLogo, href: contact.instagramUrl, label: 'Instagram' },
                { Logo: WhatsAppLogo, href: `https://wa.me/${contact.whatsapp}`, label: 'WhatsApp' },
                { Logo: GmailLogo, href: `mailto:${contact.email}`, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="block rounded-xl shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <s.Logo />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links — Admin removed */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-primary-700">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ink-700 transition hover:text-primary-700">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-primary-700">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={s.slug} className="text-ink-700 transition hover:text-primary-700">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-primary-700">
              Get in touch
            </h4>
            <ul className="space-y-4 text-sm text-ink-700">
              <li className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-gold-500" />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={17} className="shrink-0 text-gold-500" />
                <a href={`tel:${contact.phoneRaw}`} className="hover:text-primary-700">{contact.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail size={17} className="shrink-0 text-gold-500" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary-700">{contact.email}</a>
              </li>
            </ul>

            <form onSubmit={handleSubscribe} className="mt-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email for updates"
                  className="w-full rounded-full border border-cream-300 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-600 outline-none focus:border-gold-400"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-grad text-ink-900 transition hover:brightness-105"
                >
                  <Send size={15} />
                </button>
              </div>
              {subscribed && <p className="mt-2 text-xs text-primary-700">Thanks for subscribing! 🎉</p>}
            </form>
          </div>
        </div>
      </div>

      <div className="relative border-t border-cream-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-ink-700 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Neelam Films. All rights reserved.</p>
          <p className="flex items-center gap-1">Crafted in Delhi <ArrowUpRight size={12} /></p>
        </div>
      </div>
    </footer>
  )
}
