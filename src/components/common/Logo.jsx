import { Link } from 'react-router-dom'

/**
 * Neelam Films brand logo — maroon + gold monogram mark with a flowing swoosh
 * and an elegant script wordmark. Recreated in-app so the script font renders
 * on any background.
 */
export default function Logo({ className = '', to = '/' }) {
  const inner = (
    <span className="inline-flex items-center gap-3">
      {/* Monogram mark */}
      <span className="relative grid h-12 w-12 shrink-0 place-items-center">
        <svg viewBox="0 0 64 64" className="h-full w-full">
          <defs>
            <linearGradient id="nfMaroon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9c1c3e" />
              <stop offset="100%" stopColor="#7a0e2c" />
            </linearGradient>
            <linearGradient id="nfGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e7c06a" />
              <stop offset="100%" stopColor="#c08a2f" />
            </linearGradient>
          </defs>
          {/* rounded-square outline, two-tone (gold-forward for dark UI) */}
          <rect x="9" y="9" width="46" height="46" rx="14" fill="none" stroke="url(#nfGold)" strokeWidth="3.5" />
          <path d="M9 34 V23 a14 14 0 0 1 14-14 H34" fill="none" stroke="url(#nfMaroon)" strokeWidth="3.5" strokeLinecap="round" />
          {/* script n */}
          <text x="32" y="44" textAnchor="middle" className="font-script" fontSize="34" fill="url(#nfGold)">n</text>
          {/* flowing swoosh */}
          <path d="M4 38 C18 28 26 46 40 34" fill="none" stroke="url(#nfMaroon)" strokeWidth="3" strokeLinecap="round" />
          <path d="M40 34 C50 26 56 30 60 33" fill="none" stroke="url(#nfGold)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </span>

      {/* Script wordmark */}
      <span className="flex flex-col leading-none">
        <span className="font-script text-3xl leading-[0.9]">
          <span className="text-primary-500">Neelam</span> <span className="text-gold-400">Films</span>
        </span>
        <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.34em] text-gold-400/70">
          Production House
        </span>
      </span>
    </span>
  )

  return to ? (
    <Link to={to} className={`inline-flex items-center transition hover:opacity-90 ${className}`}>
      {inner}
    </Link>
  ) : (
    inner
  )
}
