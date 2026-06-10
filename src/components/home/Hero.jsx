import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Star } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
import VideoModal from '../common/VideoModal'

/**
 * Cinema-luxe hero: towering condensed type on noir, champagne accents,
 * a wide showreel key-art band and a scroll cue.
 */
export default function Hero() {
  const { data } = useData()
  const hero = data.hero
  const vid = hero.videoId
  const [open, setOpen] = useState(false)

  const line = {
    hidden: { y: '115%' },
    show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="relative px-5 pt-28 md:px-8 md:pt-32">
      <div className="mx-auto max-w-7xl">
        {/* label row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-between border-y border-cream-50/15 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-cream-300"
        >
          <span>Delhi's Production House</span>
          <span className="hidden sm:inline text-primary-400">Films · Events · Digital</span>
          <span>Est. 1995</span>
        </motion.div>

        {/* MEGA headline */}
        <h1 className="mt-10 font-display text-[4.2rem] uppercase leading-[0.85] text-cream-50 sm:text-[7.5rem] lg:text-[10.5rem]">
          <motion.span initial="hidden" animate="show" transition={{ staggerChildren: 0.12, delayChildren: 0.25 }} className="block">
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block">Stories that</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block text-gradient pr-2">move.</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block">
                <span className="font-serif lowercase italic tracking-normal text-cream-300">events that </span>matter
              </motion.span>
            </span>
          </motion.span>
        </h1>

        {/* sub row */}
        <div className="mt-12 grid gap-8 border-t border-cream-50/15 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="max-w-xl text-base leading-relaxed text-cream-300 md:text-lg"
          >
            {hero.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button to={hero.primaryCta.link}>
              {hero.primaryCta.label}
              <ArrowRight size={18} />
            </Button>
            <Button onClick={() => setOpen(true)} variant="outline">
              <Play size={16} fill="currentColor" /> Showreel
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Wide showreel key-art */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-14 max-w-7xl"
      >
        <button
          onClick={() => setOpen(true)}
          className="group relative block aspect-[16/9] w-full overflow-hidden border border-cream-50/15 bg-ink-900 md:aspect-[21/9]"
        >
          <iframe
            title="Showreel"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${vid}`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
          <div className="absolute inset-0 bg-ink-950/40 transition duration-500 group-hover:bg-ink-950/15" />
          <span className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-500 text-ink-950 shadow-glow transition duration-500 group-hover:scale-110">
            <Play size={34} fill="currentColor" className="ml-1" />
          </span>
          <span className="absolute bottom-4 left-4 bg-cream-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-950">
            ▶ Showreel 2025
          </span>
          <span className="absolute right-4 top-4 flex items-center gap-1.5 bg-primary-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-950">
            <Star size={12} fill="currentColor" /> 30+ Years
          </span>
        </button>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mx-auto mt-10 flex max-w-7xl items-center justify-center gap-3"
        aria-hidden="true"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-cream-400">Scroll</span>
        <span className="h-10 w-px overflow-hidden bg-cream-50/10">
          <span className="block h-full w-full animate-scroll-cue bg-primary-500" />
        </span>
      </motion.div>

      <VideoModal open={open} onClose={() => setOpen(false)} videoId={vid} title="Neelam Films Showreel" />
    </section>
  )
}
