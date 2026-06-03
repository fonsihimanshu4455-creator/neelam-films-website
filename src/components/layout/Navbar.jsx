import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Film } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
]

export default function Navbar() {
  const { data } = useData()
  const services = data.services
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [location.pathname])

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive ? 'text-primary-500' : 'text-dark-900 hover:text-primary-500'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white">
            <Film size={22} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold text-dark-900">
              Neelam<span className="text-primary-500"> Films</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
              Since 1995
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-dark-900 transition-colors hover:text-primary-500">
              Services
              <ChevronDown size={16} className={servicesOpen ? 'rotate-180 transition' : 'transition'} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3"
                >
                  <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        to={s.slug}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-dark-700 transition hover:bg-primary-50 hover:text-primary-600"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/portfolio" className={linkClass}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        <div className="hidden lg:block">
          <Button to="/contact" className="px-6 py-2.5">
            Get Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="rounded-lg px-3 py-2.5 font-medium text-dark-900 hover:bg-primary-50"
                >
                  {l.label}
                </NavLink>
              ))}

              <button
                onClick={() => setServicesOpen((s) => !s)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 font-medium text-dark-900 hover:bg-primary-50"
              >
                Services
                <ChevronDown size={16} className={servicesOpen ? 'rotate-180' : ''} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        to={s.slug}
                        className="block rounded-lg px-3 py-2 text-sm text-dark-700 hover:bg-primary-50 hover:text-primary-600"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <NavLink to="/portfolio" className="rounded-lg px-3 py-2.5 font-medium text-dark-900 hover:bg-primary-50">
                Portfolio
              </NavLink>
              <NavLink to="/contact" className="rounded-lg px-3 py-2.5 font-medium text-dark-900 hover:bg-primary-50">
                Contact
              </NavLink>
              <Button to="/contact" className="mt-2 w-full">
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
