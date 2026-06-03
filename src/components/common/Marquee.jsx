import { Star } from 'lucide-react'

/**
 * Big kinetic text marquee band.
 * Props: items[], reverse, outline (stroke text), white (for colored bg).
 */
export default function Marquee({ items = [], reverse = false, outline = false, white = false, className = '' }) {
  const track = [...items, ...items]
  const fill = white ? 'text-white' : 'text-ink-900'
  const stroke = white
    ? 'text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.55)]'
    : 'text-transparent [-webkit-text-stroke:1.5px_rgba(15,23,42,0.18)]'

  return (
    <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} ${className}`}>
      {track.map((word, i) => (
        <span key={i} className="flex items-center">
          <span className={`px-6 font-display text-5xl font-extrabold uppercase tracking-tight md:text-7xl ${outline ? stroke : fill}`}>
            {word}
          </span>
          <Star size={26} className={white ? 'text-white' : 'text-primary-500'} fill="currentColor" />
        </span>
      ))}
    </div>
  )
}
