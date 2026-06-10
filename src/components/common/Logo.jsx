import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clapperboard } from 'lucide-react'

/**
 * Brand logo. Renders the image at /logo.png when present;
 * falls back to a styled wordmark if the file is missing.
 */
export default function Logo({ className = 'h-12 w-auto', to = '/' }) {
  const [error, setError] = useState(false)

  const inner = error ? (
    <span className="flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center bg-gradient-to-br from-primary-400 to-primary-700 text-ink-950 shadow-glow">
        <Clapperboard size={20} />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl tracking-wide text-cream-50">
          Neelam<span className="text-primary-400"> Films</span>
        </span>
        <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-cream-400">
          Since 1995
        </span>
      </span>
    </span>
  ) : (
    <img
      src="/logo.png"
      alt="Neelam Films — Production House & Live Events"
      className={className}
      onError={() => setError(true)}
    />
  )

  return to ? (
    <Link to={to} className="inline-flex items-center transition hover:opacity-90">
      {inner}
    </Link>
  ) : (
    inner
  )
}
