import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, ArrowDownRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
import VideoModal from '../common/VideoModal'

/**
 * Full-screen cinematic hero: full-bleed muted showreel video,
 * gradient overlay, huge bottom-left headline, parallax + scroll cue.
 */
export default function Hero() {
  const { data } = useData()
  const hero = data.hero
  const clients = data.clients.slice(0, 6)
  const vid = hero.videoId
  const [open, setOpen] = useState(false)

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 160])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  const word = {
    hidden: { y: '120%' },
    show: { y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-ink-950">
      {/* Full-bleed video */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <iframe
          title="Showreel"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${vid}`}
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/60 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-primary-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="max-w-5xl font-display text-[2.9rem] font-extrabold leading-[0.95] tracking-tightest text-white sm:text-7xl lg:text-[6.5rem]"
        >
          <span className="block overflow-hidden">
            <motion.span variants={word} className="inline-block">Stories that <span className="text-primary-400">move.</span></motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={word} className="inline-block font-serif font-normal italic text-white/90">
              Events that matter.
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button to={hero.primaryCta.link}>
            {hero.primaryCta.label}
            <ArrowDownRight size={18} />
          </Button>
          <button
            data-cursor
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 text-sm font-semibold text-white"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur transition group-hover:scale-110 group-hover:bg-white group-hover:text-primary-600">
              <Play size={20} fill="currentColor" className="ml-0.5" />
            </span>
            Watch Showreel
          </button>
        </motion.div>

        {/* trusted strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 pt-7"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
            Trusted by
          </span>
          {clients.map((c) => (
            <img
              key={c.name}
              src={c.logo}
              alt={c.name}
              loading="lazy"
              className="h-5 w-auto opacity-60 brightness-0 invert transition hover:opacity-100"
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-7 right-8 z-10 hidden flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/30 pt-1.5">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-primary-400"
          />
        </span>
      </motion.div>

      <VideoModal open={open} onClose={() => setOpen(false)} videoId={vid} title="Neelam Films Showreel" />
    </section>
  )
}
