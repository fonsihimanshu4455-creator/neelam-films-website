import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Camera, Send, ArrowUpRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Logo from '../common/Logo'

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
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 text-slate-400">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-primary-600/15 blur-[120px]" />
      {/* Giant brand wordmark */}
      <div className="pointer-events-none relative select-none overflow-hidden">
        <p className="-mb-4 whitespace-nowrap text-center font-display text-[18vw] leading-none text-white/[0.04] md:-mb-8">
          NEELAM FILMS
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Delhi's trusted production house & live event specialists since 1995. Three decades of
              crafting stories that move and events that matter.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Camera, href: contact.instagramUrl, label: 'Instagram' },
                { icon: Phone, href: `tel:${contact.phoneRaw}`, label: 'Phone' },
                { icon: Mail, href: `mailto:${contact.email}`, label: 'Email' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-primary-500 hover:bg-primary-500 hover:text-white"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links — Admin removed */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-slate-400 transition hover:text-primary-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={s.slug} className="text-slate-400 transition hover:text-primary-600">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-primary-500" />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={17} className="shrink-0 text-primary-500" />
                <a href={`tel:${contact.phoneRaw}`} className="hover:text-primary-600">{contact.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail size={17} className="shrink-0 text-primary-500" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary-600">{contact.email}</a>
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
                  className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-400 outline-none focus:border-primary-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white transition hover:bg-primary-600"
                >
                  <Send size={15} />
                </button>
              </div>
              {subscribed && <p className="mt-2 text-xs text-primary-600">Thanks for subscribing! 🎉</p>}
            </form>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-slate-400 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Neelam Films. All rights reserved.</p>
          <p className="flex items-center gap-1">Crafted in Delhi <ArrowUpRight size={12} /></p>
        </div>
      </div>
    </footer>
  )
}
