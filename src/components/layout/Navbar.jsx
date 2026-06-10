import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
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
  const services = data.services
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }) =>
    `link-underline text-xs font-bold uppercase tracking-[0.15em] transition-colors ${
      isActive ? 'text-primary-400' : 'text-cream-100 hover:text-primary-400'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-cream-50/10 bg-ink-950/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo className="h-12 w-auto md:h-14" />

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
            <button className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] text-cream-100 transition-colors hover:text-primary-400">
              Services
              <ChevronDown size={15} className={`transition ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4"
                >
                  <div className="overflow-hidden border border-cream-50/10 bg-ink-900 p-2 shadow-soft">
                    {services.map((s, i) => (
                      <Link
                        key={s.id}
                        to={s.slug}
                        className="group flex items-center justify-between px-4 py-2.5 text-sm font-medium text-cream-200 transition hover:bg-primary-500 hover:text-ink-950"
                      >
                        <span className="flex items-center gap-3">
                          <span className="font-display text-xs text-primary-500 group-hover:text-ink-950">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          {s.title}
                        </span>
                        <ArrowUpRight size={14} className="opacity-40 group-hover:opacity-100" />
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

        <div className="hidden lg:block">
          <Button to="/contact" className="px-6 py-2.5">Get Quote</Button>
        </div>

        <button
          className="relative z-[70] text-cream-50 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex h-[100dvh] flex-col overflow-y-auto bg-ink-950 px-6 pb-10 pt-24 lg:hidden"
          >
            <nav className="flex flex-col">
              {MOBILE_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-cream-50/10"
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-4 font-display text-4xl uppercase ${
                        isActive ? 'text-primary-400' : 'text-cream-50'
                      }`
                    }
                  >
                    {l.label}
                    <ArrowUpRight size={22} className="text-primary-500" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-8 text-[10px] font-bold uppercase tracking-[0.3em] text-primary-400"
            >
              Services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2.5"
            >
              {services.map((s) => (
                <Link key={s.id} to={s.slug} className="text-sm text-cream-300 transition hover:text-primary-400">
                  {s.title}
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto pt-10"
            >
              <Button to="/contact" className="w-full" magnetic={false}>Get a Free Quote</Button>
              <p className="mt-6 text-center text-[10px] uppercase tracking-[0.4em] text-cream-400">
                Est. 1995 — Delhi
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
