import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="font-display text-8xl font-extrabold text-gradient">404</span>
      <h1 className="mt-4 font-display text-2xl font-bold text-ink-900">Page Not Found</h1>
      <p className="mt-2 max-w-md text-slate-500">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-600"
      >
        <Home size={18} /> Back to Home
      </Link>
    </div>
  )
}
