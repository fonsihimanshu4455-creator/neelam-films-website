import { useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * Brand mark. Renders /logo.png when present; otherwise a typeset wordmark.
 */
export default function Logo({ className = 'h-10 w-auto', to = '/' }) {
  const [error, setError] = useState(false)

  const inner = error ? (
    <span className="flex flex-col leading-none">
      <span className="font-serif text-2xl font-semibold tracking-tight text-ink-950">
        Neelam Films<span className="text-primary-500">.</span>
      </span>
      <span className="doc-label mt-1 text-[8px] text-ink-600">Prod. Est. 1995 — Delhi</span>
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
    <Link to={to} className="inline-flex items-center transition hover:opacity-80">
      {inner}
    </Link>
  ) : (
    inner
  )
}
