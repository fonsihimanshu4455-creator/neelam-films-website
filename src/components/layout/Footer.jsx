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
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white text-slate-600">
      {/* Giant brand wordmark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-4 whitespace-nowrap text-center font-display text-[18vw] font-extrabold leading-none text-slate-900/[0.035] md:-mb-8">
          NEELAM FILMS
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-slate-500">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-primary-500 hover:bg-primary-500 hover:text-white"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links — Admin removed */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-ink-900">
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
                  <Link to={l.to} className="text-slate-500 transition hover:text-primary-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-ink-900">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={s.slug} className="text-slate-500 transition hover:text-primary-600">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h4 className="mb-5 font-display text-sm font-semibold uppercase tracking-wider text-ink-900">
              Get in touch
            </h4>
            <ul className="space-y-4 text-sm text-slate-500">
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
                  className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-ink-900 placeholder-slate-400 outline-none focus:border-primary-500"
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

      <div className="relative border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-slate-500 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Neelam Films. All rights reserved.</p>
          <p className="flex items-center gap-1">Crafted in Delhi <ArrowUpRight size={12} /></p>
        </div>
      </div>
    </footer>
  )
}
