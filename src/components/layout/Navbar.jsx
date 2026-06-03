import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Clapperboard } from 'lucide-react'
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

  const linkClass = ({ isActive }) =>
    `link-underline text-sm font-medium transition-colors ${
      isActive ? 'text-primary-400' : 'text-white/80 hover:text-white'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-ink-950/70 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-400 to-primary-700 text-white shadow-lg shadow-primary-500/30 transition group-hover:scale-105">
            <Clapperboard size={20} />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-tight text-white">
              Neelam<span className="text-primary-400"> Films</span>
            </span>
            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/40">
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

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white">
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
                  <div className="glass overflow-hidden rounded-2xl p-2 shadow-2xl">
                    {services.map((s) => (
                      <Link
                        key={s.id}
                        to={s.slug}
                        className="flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium text-white/75 transition hover:bg-primary-500/15 hover:text-white"
                      >
                        {s.title}
                        <ChevronDown size={14} className="-rotate-90 opacity-50" />
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
          className="text-white lg:hidden"
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
            className="overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {NAV_LINKS.map((l) => (
                <NavLink key={l.to} to={l.to} className="rounded-lg px-3 py-2.5 font-medium text-white/85 hover:bg-white/5">
                  {l.label}
                </NavLink>
              ))}
              <button
                onClick={() => setServicesOpen((s) => !s)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 font-medium text-white/85 hover:bg-white/5"
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
                      <Link key={s.id} to={s.slug} className="block rounded-lg px-3 py-2 text-sm text-white/65 hover:bg-white/5 hover:text-primary-300">
                        {s.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <NavLink to="/portfolio" className="rounded-lg px-3 py-2.5 font-medium text-white/85 hover:bg-white/5">Portfolio</NavLink>
              <NavLink to="/contact" className="rounded-lg px-3 py-2.5 font-medium text-white/85 hover:bg-white/5">Contact</NavLink>
              <Button to="/contact" className="mt-2 w-full">Get Quote</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
