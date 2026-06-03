import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Film, Lock, User, AlertCircle } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

export default function AdminLogin() {
  const { isAuthed, login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  // Already logged in? Skip to dashboard.
  useEffect(() => {
    if (isAuthed) navigate('/admin/dashboard', { replace: true })
  }, [isAuthed, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (login(username, password)) {
      navigate('/admin/dashboard', { replace: true })
    } else {
      setError('Invalid username or password.')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-900 px-4">
      {/* backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-primary-900/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl md:p-10"
      >
        <div className="flex flex-col items-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white">
            <Film size={28} />
          </span>
          <h1 className="mt-4 font-display text-2xl font-extrabold text-dark-900">
            Neelam<span className="text-primary-500"> Films</span>
          </h1>
          <p className="text-sm text-slate-500">Admin Panel Login</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-dark-700">Username</label>
            <div className="relative">
              <User size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="himanshu"
                required
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-dark-700">Password</label>
            <div className="relative">
              <Lock size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-primary-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-600"
          >
            Sign In
          </button>
        </form>

        <Link
          to="/"
          className="mt-6 block text-center text-xs text-slate-400 transition hover:text-primary-500"
        >
          ← Back to website
        </Link>
      </motion.div>
    </div>
  )
}
