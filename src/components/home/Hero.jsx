import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Star } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
import VideoModal from '../common/VideoModal'

/**
 * Bold editorial / film-poster hero: huge mixed sans + italic-serif type on
 * warm ivory paper, blue accents, scattered geometric decor & a showreel band.
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
    <section className="relative overflow-hidden px-5 pt-28 md:px-8 md:pt-32">
      {/* Scattered editorial decor (dots, circles, squares) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute left-6 top-40 h-40 w-40 opacity-60"
          style={{
            backgroundImage: 'radial-gradient(rgba(184,147,90,0.5) 1.6px, transparent 1.6px)',
            backgroundSize: '18px 18px',
          }}
        />
        <div className="absolute left-24 top-36 h-6 w-6 rounded-full bg-gold-400/40" />
        <div className="absolute left-16 bottom-24 h-16 w-16 rounded-full border border-ink-900/15" />
        <div className="absolute right-[42%] top-56 h-3.5 w-3.5 rounded-full bg-primary-400/50" />
        <div className="absolute right-24 top-[46%] h-5 w-5 rounded-sm bg-ink-900/10" />
        <div className="absolute right-40 bottom-24 h-4 w-4 rounded-sm border border-ink-900/15" />
        <div className="absolute right-8 top-24 h-2.5 w-2.5 rounded-full bg-primary-500/40" />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* label row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between border-y-2 border-ink-900 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-900"
        >
          <span>Delhi's Production House</span>
          <span className="hidden sm:inline">Films · Events · Digital</span>
          <span>Est. 1995</span>
        </motion.div>

        {/* MEGA headline */}
        <h1 className="mt-8 font-display text-[3.4rem] uppercase leading-[0.86] tracking-tightest text-ink-900 sm:text-[6rem] lg:text-[8.5rem]">
          <motion.span initial="hidden" animate="show" transition={{ staggerChildren: 0.12, delayChildren: 0.1 }} className="block">
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block">Stories that</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block text-primary-500">move.</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block">
                <span className="font-serif lowercase italic tracking-normal text-ink-700">events that </span>matter
              </motion.span>
            </span>
          </motion.span>
        </h1>

        {/* sub row */}
        <div className="mt-10 grid gap-8 border-t-2 border-ink-900 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-xl text-base leading-relaxed text-ink-700 md:text-lg"
          >
            {hero.subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
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
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto mt-16 max-w-7xl"
      >
        {/* soft glow behind the poster */}
        <div className="pointer-events-none absolute -inset-6 -z-10 opacity-70 blur-2xl">
          <div
            className="h-full w-full animate-conic-spin rounded-[2.5rem]"
            style={{
              background:
                'conic-gradient(from 0deg, rgba(43,144,232,0.30), rgba(184,147,90,0.12), rgba(15,29,51,0.20), rgba(43,144,232,0.30))',
            }}
          />
        </div>

        <button
          onClick={() => setOpen(true)}
          className="group relative block aspect-[16/9] w-full overflow-hidden rounded-3xl border border-ink-900/10 bg-ink-950 shadow-soft md:aspect-[21/9]"
        >
          {/* trending shine sweep on hover */}
          <span className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-3xl">
            <span className="absolute -inset-y-2 left-0 w-1/3 -translate-x-[120%] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:animate-shine" />
          </span>
          <iframe
            title="Showreel"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${vid}`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-ink-950/30 transition group-hover:from-ink-950/60" />
          <span className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-500 text-white shadow-glow transition group-hover:scale-110">
            <Play size={34} fill="currentColor" className="ml-1" />
          </span>
          <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-900">
            ▶ Showreel 2025
          </span>
          <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-primary-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            <Star size={12} fill="currentColor" /> 30+ Years
          </span>
        </button>
      </motion.div>

      <VideoModal open={open} onClose={() => setOpen(false)} videoId={vid} title="Neelam Films Showreel" />
    </section>
  )
}
