import { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  Film,
  LayoutDashboard,
  Image,
  Wrench,
  Briefcase,
  Users,
  MessageSquareQuote,
  Camera,
  UserSquare,
  Phone,
  LogOut,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const NAV = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/hero', label: 'Hero', icon: Image },
  { to: '/admin/services', label: 'Services', icon: Wrench },
  { to: '/admin/portfolio', label: 'Portfolio', icon: Briefcase },
  { to: '/admin/clients', label: 'Clients', icon: Users },
  { to: '/admin/testimonials', label: 'Testimonials', icon: MessageSquareQuote },
  { to: '/admin/equipment', label: 'Equipment', icon: Camera },
  { to: '/admin/about', label: 'About / Founder', icon: UserSquare },
  { to: '/admin/contact', label: 'Contact', icon: Phone },
]

export default function AdminLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/admin', { replace: true })
  }

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
      isActive
        ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30'
        : 'text-slate-300 hover:bg-white/5 hover:text-white'
    }`

  const Sidebar = (
    <div className="flex h-full flex-col">
      <Link to="/admin/dashboard" className="flex items-center gap-2 px-2 py-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white">
          <Film size={20} />
        </span>
        <span className="font-display text-lg font-extrabold text-white">
          Neelam<span className="text-primary-500"> Films</span>
        </span>
      </Link>

      <nav className="mt-4 flex-1 space-y-1">
        {NAV.map((n) => (
          <NavLink key={n.to} to={n.to} className={linkClass} onClick={() => setOpen(false)}>
            <n.icon size={18} />
            {n.label}
          </NavLink>
        ))}
      </nav>

      <div className="space-y-1 border-t border-white/10 pt-4">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
        >
          <ExternalLink size={18} />
          View Website
        </a>
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-300 transition hover:bg-red-500/10 hover:text-red-200"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 bg-dark-900 p-4 lg:block">
        {Sidebar}
      </aside>

      {/* Mobile top bar */}
      <div className="flex items-center justify-between bg-dark-900 p-4 lg:hidden">
        <Link to="/admin/dashboard" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-500 text-white">
            <Film size={18} />
          </span>
          <span className="font-display font-extrabold text-white">Neelam Films</span>
        </Link>
        <button onClick={() => setOpen(true)} className="text-white" aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-64 bg-dark-900 p-4">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-4 text-white"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
            {Sidebar}
          </aside>
        </div>
      )}

      {/* Content */}
      <main className="lg:pl-64">
        <div className="mx-auto max-w-5xl p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
