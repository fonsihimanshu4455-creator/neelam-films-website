import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Camera, ArrowUp, ArrowUpRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Logo from '../common/Logo'
import Button from '../common/Button'

function DelhiClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    const tick = () => setTime(fmt.format(new Date()).toUpperCase())
    tick()
    const t = setInterval(tick, 30000)
    return () => clearInterval(t)
  }, [])
  return <span>Delhi — {time} IST</span>
}

export default function Footer() {
  const { data } = useData()
  const { contact, services } = data

  return (
    <footer className="relative overflow-hidden border-t border-cream-50/10 bg-ink-950 text-cream-300">
      {/* Big CTA strip */}
      <div className="border-b border-cream-50/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-8 md:py-20">
          <h2 className="font-display text-5xl uppercase leading-[0.9] text-cream-50 md:text-7xl">
            Have a story?
            <br />
            <span className="font-serif lowercase italic tracking-normal text-primary-400">let's make it timeless.</span>
          </h2>
          <Button to="/contact" className="px-10 py-5 text-sm">
            Start a project <ArrowUpRight size={18} />
          </Button>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-cream-400">
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
                  className="flex h-10 w-10 items-center justify-center border border-cream-50/15 text-cream-300 transition hover:border-primary-500 hover:bg-primary-500 hover:text-ink-950"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
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
                  <Link to={l.to} className="text-cream-300 transition hover:text-primary-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={s.slug} className="text-cream-300 transition hover:text-primary-400">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
              Get in touch
            </h4>
            <ul className="space-y-4 text-sm text-cream-300">
              <li className="flex gap-3">
                <MapPin size={17} className="mt-0.5 shrink-0 text-primary-500" />
                <span>{contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={17} className="shrink-0 text-primary-500" />
                <a href={`tel:${contact.phoneRaw}`} className="hover:text-primary-400">{contact.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail size={17} className="shrink-0 text-primary-500" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary-400">{contact.email}</a>
              </li>
            </ul>
            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-cream-500">
              <DelhiClock />
            </p>
          </div>
        </div>
      </div>

      {/* Giant brand wordmark */}
      <div className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-3 whitespace-nowrap text-center font-display text-[19vw] leading-none text-cream-50/[0.04] md:-mb-6">
          NEELAM FILMS
        </p>
      </div>

      <div className="relative border-t border-cream-50/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-cream-400 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Neelam Films. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 uppercase tracking-[0.2em] transition hover:text-primary-400"
          >
            Back to top <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  )
}
