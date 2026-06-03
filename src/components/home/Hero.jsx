import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, ArrowDownRight, Sparkles, Star, Award } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
import VideoModal from '../common/VideoModal'

/**
 * Centered, vibrant hero with a large horizontal (16:9) showreel,
 * floating accent cards and parallax — built for "feel".
 */
export default function Hero() {
  const { data } = useData()
  const hero = data.hero
  const clients = data.clients.slice(0, 6)
  const vid = hero.videoId
  const [open, setOpen] = useState(false)

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 120])

  const word = {
    hidden: { y: '120%' },
    show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section ref={ref} className="relative overflow-hidden pt-[78px]">
      {/* local vivid glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0">
        <div className="absolute left-1/2 top-10 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-primary-400/25 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-14 text-center md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 shadow-sm backdrop-blur"
        >
          <Sparkles size={14} className="text-primary-500" />
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
          className="mx-auto mt-6 max-w-4xl font-display text-[2.7rem] font-extrabold leading-[0.98] tracking-tightest text-ink-900 sm:text-6xl lg:text-[5rem]"
        >
          <span className="block overflow-hidden">
            <motion.span variants={word} className="inline-block">Stories that <span className="text-gradient">move</span></motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={word} className="inline-block">
              <span className="font-serif font-normal italic text-ink-700">&amp; events that </span>
              <span className="relative whitespace-nowrap text-gradient">
                matter
                <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 300 14" fill="none" preserveAspectRatio="none">
                  <motion.path
                    d="M2 9 C 75 2, 225 2, 298 9"
                    stroke="#0ea5e9"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </svg>
              </span>
              <span className="text-ink-900">.</span>
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Button to={hero.primaryCta.link}>
            {hero.primaryCta.label}
            <ArrowDownRight size={18} />
          </Button>
          <Button onClick={() => setOpen(true)} variant="ghost" magnetic={false}>
            <Play size={16} fill="currentColor" />
            Watch Showreel
          </Button>
        </motion.div>
      </div>

      {/* Horizontal showreel */}
      <motion.div
        style={{ y: videoY }}
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mt-16 max-w-6xl px-5"
      >
        {/* glow ring */}
        <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-r from-primary-400/40 via-cyan-300/30 to-indigo-400/40 blur-2xl" />

        <div className="group relative aspect-video overflow-hidden rounded-[1.75rem] border border-white/60 bg-ink-900 shadow-2xl ring-1 ring-slate-900/5">
          <iframe
            title="Showreel"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${vid}`}
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
          <button
            onClick={() => setOpen(true)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play showreel"
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-primary-600 shadow-glow transition group-hover:scale-110">
              <Play size={30} fill="currentColor" className="ml-1" />
            </span>
          </button>
          <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-ink-900 backdrop-blur">
            ▶ Neelam Films · Showreel 2025
          </div>
        </div>

        {/* floating accent cards */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute -left-3 top-10 hidden rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-soft sm:block md:-left-8"
        >
          <div className="font-display text-2xl font-extrabold text-gradient">30+ Yrs</div>
          <p className="text-xs text-slate-500">of Delhi's trust</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -right-3 bottom-12 hidden rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-soft sm:block md:-right-8"
        >
          <div className="flex items-center gap-2">
            <Award size={18} className="text-amber-400" />
            <div className="font-display text-lg font-extrabold text-ink-900">3000+</div>
          </div>
          <p className="text-xs text-slate-500">projects delivered</p>
        </motion.div>
      </motion.div>

      {/* Trusted-by strip */}
      <div className="relative z-10 mx-auto mt-16 max-w-6xl px-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className="text-amber-400" fill="currentColor" />
              ))}
            </span>
            Trusted by
          </span>
          {clients.map((c) => (
            <img
              key={c.name}
              src={c.logo}
              alt={c.name}
              loading="lazy"
              className="h-6 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} videoId={vid} title="Neelam Films Showreel" />
    </section>
  )
}
