import { Star } from 'lucide-react'

/**
 * Big kinetic text marquee band.
 * Props: items[], reverse, outline (stroke text), white (for colored bg).
 */
export default function Marquee({ items = [], reverse = false, outline = false, white = false, className = '' }) {
  const track = [...items, ...items]
  const fill = white ? 'text-white' : 'text-primary-700'
  const stroke = white
    ? 'text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.5)]'
    : 'text-transparent [-webkit-text-stroke:1.5px_rgba(122,14,44,0.28)]'

  return (
    <div
      className={`flex w-max transform-gpu will-change-transform ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} ${className}`}
      style={{ backfaceVisibility: 'hidden' }}
    >
      {track.map((word, i) => (
        <span key={i} className="flex items-center">
          <span className={`px-6 font-display text-5xl font-extrabold uppercase tracking-tight md:text-7xl ${outline ? stroke : fill}`}>
            {word}
          </span>
          <Star size={26} className={white ? 'text-white' : 'text-gold-400'} fill="currentColor" />
        </span>
      ))}
    </div>
  )
}
