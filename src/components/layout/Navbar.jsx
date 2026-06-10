import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Logo from '../common/Logo'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
]

const MOBILE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const { data } = useData()
  const { services, contact } = data
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `link-underline font-mono text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${
      isActive ? 'text-primary-600' : 'text-ink-900 hover:text-primary-600'
    }`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-900/20 bg-paper-50/95 backdrop-blur">
      {/* letterhead strip */}
      <div className="hidden border-b border-ink-900/15 md:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-5 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-600 md:px-8">
          <span>Production House &amp; Live Events — Est. 1995</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary-500" />
            Pandav Nagar, Delhi 110091
          </span>
        </div>
      </div>

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo className="h-10 w-auto" />

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-ink-900 transition-colors hover:text-primary-600">
              Services
              <ChevronDown size={14} className={`transition ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3"
                >
                  <div className="border-2 border-ink-900 bg-paper-50 shadow-[4px_4px_0_0_rgba(29,25,19,1)]">
                    {services.map((s, i) => (
                      <Link
                        key={s.id}
                        to={s.slug}
                        className="flex items-baseline gap-3 border-b border-ink-900/10 px-4 py-2.5 text-sm text-ink-900 transition last:border-b-0 hover:bg-paper-100 hover:text-primary-600"
                      >
                        <span className="font-mono text-[10px] text-primary-500">{String(i + 1).padStart(2, '0')}</span>
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/portfolio" className={linkClass}>Portfolio</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>

        <a
          href={`tel:${contact.phoneRaw}`}
          className="hidden items-center gap-2 border-2 border-ink-900 px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-ink-900 transition hover:bg-ink-900 hover:text-paper-50 lg:flex"
        >
          <Phone size={13} /> {contact.phone}
        </a>

        <button
          className="relative z-[70] text-ink-900 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Full-screen mobile menu — paper sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex h-[100dvh] flex-col overflow-y-auto bg-paper-50 px-6 pb-10 pt-24 lg:hidden"
          >
            <nav className="flex flex-col">
              {MOBILE_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.35, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-ink-900/15"
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `flex items-baseline gap-4 py-4 font-serif text-4xl ${
                        isActive ? 'text-primary-600' : 'text-ink-950'
                      }`
                    }
                  >
                    <span className="font-mono text-xs text-primary-500">{String(i + 1).padStart(2, '0')}</span>
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <p className="doc-label mt-8 text-primary-600">Services</p>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {services.map((s) => (
                <Link key={s.id} to={s.slug} className="text-sm text-ink-700 transition hover:text-primary-600">
                  {s.title}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-10">
              <a
                href={`tel:${contact.phoneRaw}`}
                className="flex items-center justify-center gap-2 border-2 border-ink-900 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink-900"
              >
                <Phone size={14} /> {contact.phone}
              </a>
              <Link
                to="/contact"
                className="mt-3 flex items-center justify-center bg-primary-500 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-paper-50"
              >
                Get a free quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
