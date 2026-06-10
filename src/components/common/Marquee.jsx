import { Star } from 'lucide-react'

/**
 * Big kinetic text marquee band (noir luxe).
 * Props: items[], reverse, outline (hollow stroke text), gold (gold fill).
 */
export default function Marquee({ items = [], reverse = false, outline = false, gold = false, className = '' }) {
  const track = [...items, ...items]
  const fill = gold ? 'text-primary-500' : 'text-cream-100'

  return (
    <div
      className={`flex w-max transform-gpu will-change-transform ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} ${className}`}
      style={{ backfaceVisibility: 'hidden' }}
    >
      {track.map((word, i) => (
        <span key={i} className="flex items-center">
          <span className={`px-6 font-display text-5xl uppercase md:text-7xl ${outline ? 'text-outline' : fill}`}>
            {word}
          </span>
          <Star size={22} className="text-primary-500" fill="currentColor" />
        </span>
      ))}
    </div>
  )
}
