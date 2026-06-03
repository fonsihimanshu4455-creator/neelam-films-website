import { Star } from 'lucide-react'

/**
 * Big kinetic text marquee band. Pass an array of words.
 */
export default function Marquee({
  items = [],
  reverse = false,
  outline = false,
  className = '',
}) {
  const track = [...items, ...items]
  return (
    <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} ${className}`}>
      {track.map((word, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`px-6 font-display text-5xl font-extrabold uppercase tracking-tight md:text-7xl ${
              outline ? 'text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.25)]' : 'text-white'
            }`}
          >
            {word}
          </span>
          <Star size={26} className="text-primary-500" fill="currentColor" />
        </span>
      ))}
    </div>
  )
}
