import { Link } from 'react-router-dom'

/**
 * Neelam Films brand logo — the transparent PNG, used directly (no box/badge)
 * with a very soft burgundy drop-shadow.
 */
export default function Logo({ className = 'h-[74px] w-auto', to = '/' }) {
  const img = (
    <img
      src="/logo.png"
      alt="Neelam Films — Production House & Live Events"
      className={className}
      style={{ filter: 'drop-shadow(0 6px 14px rgba(122,14,44,.18))' }}
    />
  )

  return to ? (
    <Link to={to} className="inline-flex items-center transition hover:opacity-90">
      {img}
    </Link>
  ) : (
    img
  )
}
