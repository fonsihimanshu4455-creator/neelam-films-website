import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Big editorial statement where words light up as you scroll.
 */
const TEXT =
  'For three decades, Neelam Films has turned ideas into cinema and moments into movements — Delhi’s most trusted name in production & live events.'

export default function Statement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.25'],
  })
  const words = TEXT.split(' ')

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-cream-200/70 to-cream-100 py-28 md:py-40">
      {/* crosshatch diamond band */}
      <div
        className="pattern-crosshatch pointer-events-none absolute inset-0"
        style={{ maskImage: 'radial-gradient(ellipse 95% 95% at 50% 50%, #000 65%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 95% 95% at 50% 50%, #000 65%, transparent 100%)' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-400">
            Neelam Films · Our promise
          </span>
        </div>
        <p className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-center font-serif text-3xl italic leading-snug sm:text-5xl lg:text-[3.75rem] lg:leading-[1.2]">
          {words.map((w, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return <Word key={i} progress={scrollYProgress} range={[start, end]} word={w} />
          })}
        </p>
      </div>
    </section>
  )
}

function Word({ progress, range, word }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  const highlight = ['cinema', 'movements', 'trusted', 'production'].some((k) =>
    word.toLowerCase().includes(k),
  )
  return (
    <motion.span style={{ opacity }} className={highlight ? 'text-gold' : 'text-white'}>
      {word}
    </motion.span>
  )
}
