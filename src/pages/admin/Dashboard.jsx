import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Image,
  Wrench,
  Briefcase,
  Users,
  MessageSquareQuote,
  Camera,
  UserSquare,
  Phone,
  ArrowRight,
} from 'lucide-react'
import { useData } from '../../context/DataContext'

const CARDS = [
  { to: '/admin/hero', label: 'Hero Section', icon: Image, key: null, desc: 'Headline, CTAs & stats' },
  { to: '/admin/services', label: 'Services', icon: Wrench, key: 'services', desc: 'Service offerings' },
  { to: '/admin/portfolio', label: 'Portfolio', icon: Briefcase, key: 'portfolio', desc: 'Project showcase' },
  { to: '/admin/clients', label: 'Clients', icon: Users, key: 'clients', desc: 'Client logos' },
  { to: '/admin/testimonials', label: 'Testimonials', icon: MessageSquareQuote, key: 'testimonials', desc: 'Client reviews' },
  { to: '/admin/equipment', label: 'Equipment', icon: Camera, key: 'equipment', desc: 'Rental inventory' },
  { to: '/admin/about', label: 'About / Founder', icon: UserSquare, key: null, desc: 'Founder, mission & timeline' },
  { to: '/admin/contact', label: 'Contact Info', icon: Phone, key: null, desc: 'Address & channels' },
]

export default function Dashboard() {
  const { data } = useData()

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl font-extrabold text-dark-900">
          Welcome back, Himanshu 👋
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          Manage your website content. All changes save to your browser instantly.
        </p>
      </div>

      {/* Quick stats */}
      <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { label: 'Services', value: data.services.length },
          { label: 'Projects', value: data.portfolio.length },
          { label: 'Clients', value: data.clients.length },
          { label: 'Equipment', value: data.equipment.length },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="font-display text-3xl font-extrabold text-primary-500">{s.value}</div>
            <p className="mt-1 text-sm text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Editor cards */}
      <h2 className="mb-4 font-display text-lg font-bold text-dark-900">Content Editors</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.to}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Link
              to={c.to}
              className="group flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-500">
                <c.icon size={22} />
              </span>
              <div className="flex-1">
                <h3 className="font-display font-bold text-dark-900">{c.label}</h3>
                <p className="text-xs text-slate-400">{c.desc}</p>
              </div>
              <ArrowRight
                size={18}
                className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-primary-500"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
