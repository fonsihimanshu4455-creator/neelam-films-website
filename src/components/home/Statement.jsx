import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Big editorial statement where words light up as you scroll.
 */
const TEXT =
  'Thirty years. Three thousand stories. One obsession — making every frame unforgettable. From Delhi’s grandest stages to the quietest studio sessions, we craft cinema, sound and spectacle.'

const HIGHLIGHTS = ['stories', 'unforgettable', 'cinema', 'spectacle']

export default function Statement() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.25'],
  })
  const words = TEXT.split(' ')

  return (
    <section ref={ref} className="relative mx-auto max-w-6xl px-5 py-28 md:px-8 md:py-40">
      <span className="mb-10 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
        <span className="h-px w-8 bg-primary-500" /> ( 02 ) — The house
      </span>
      <p className="flex flex-wrap gap-x-3 gap-y-2 font-serif text-3xl italic leading-snug sm:text-5xl lg:text-[3.75rem] lg:leading-[1.2]">
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
  const highlight = HIGHLIGHTS.some((k) => word.toLowerCase().includes(k))
  return (
    <motion.span style={{ opacity }} className={highlight ? 'text-gradient' : 'text-cream-100'}>
      {word}
    </motion.span>
  )
}
