import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Film, MapPin, Phone, Mail, Camera as Instagram, Send } from 'lucide-react'
import { useData } from '../../context/DataContext'

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
    <footer className="bg-dark-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                <Film size={22} />
              </span>
              <span className="font-display text-lg font-extrabold text-white">
                Neelam<span className="text-primary-500"> Films</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Delhi's trusted production house & live event specialists since 1995. Three decades
              of crafting stories that move and events that matter.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary-500"
              >
                <Instagram size={18} />
              </a>
              <a
                href={`tel:${contact.phoneRaw}`}
                aria-label="Phone"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary-500"
              >
                <Phone size={18} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary-500"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-display text-base font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Contact', to: '/contact' },
                { label: 'Admin', to: '/admin' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-slate-400 transition hover:text-primary-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-display text-base font-semibold text-white">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={s.slug} className="text-slate-400 transition hover:text-primary-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h4 className="mb-4 font-display text-base font-semibold text-white">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary-400" />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-primary-400" />
                <a href={`tel:${contact.phoneRaw}`} className="hover:text-primary-400">
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-primary-400" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary-400">
                  {contact.email}
                </a>
              </li>
            </ul>

            <form onSubmit={handleSubscribe} className="mt-5">
              <label className="mb-2 block text-xs font-medium text-slate-400">
                Subscribe to our newsletter
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-full bg-white/10 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white transition hover:bg-primary-600"
                >
                  <Send size={16} />
                </button>
              </div>
              {subscribed && (
                <p className="mt-2 text-xs text-primary-400">Thanks for subscribing! 🎉</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Neelam Films. All rights reserved.</p>
          <p>Delhi's Trusted Production House Since 1995</p>
        </div>
      </div>
    </footer>
  )
}
