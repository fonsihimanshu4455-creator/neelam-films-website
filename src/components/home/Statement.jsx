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
    <section ref={ref} className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-40">
      <p className="flex flex-wrap gap-x-3 gap-y-1 font-display text-2xl font-bold leading-snug sm:text-4xl lg:text-[3.25rem] lg:leading-[1.15]">
        {words.map((w, i) => {
          const start = i / words.length
          const end = start + 1 / words.length
          return <Word key={i} progress={scrollYProgress} range={[start, end]} word={w} />
        })}
      </p>
    </section>
  )
}

function Word({ progress, range, word }) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const highlight = ['cinema', 'movements', 'trusted', 'production'].some((k) =>
    word.toLowerCase().includes(k),
  )
  return (
    <motion.span style={{ opacity }} className={highlight ? 'text-gradient' : 'text-white'}>
      {word}
    </motion.span>
  )
}
