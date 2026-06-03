import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, ArrowDownRight, Sparkles } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
import Aurora from '../common/Aurora'

/**
 * Cinematic full-screen hero: muted YouTube backdrop, aurora glow,
 * kinetic headline, parallax on scroll, and a trusted-by strip.
 */
export default function Hero() {
  const { data } = useData()
  const hero = data.hero
  const clients = data.clients.slice(0, 6)
  const vid = hero.videoId

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const word = {
    hidden: { y: '120%' },
    show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950">
      {/* YouTube backdrop */}
      <motion.div style={{ scale }} className="pointer-events-none absolute inset-0">
        <iframe
          title="Showreel background"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2 opacity-30"
          src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${vid}`}
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
      </motion.div>

      <Aurora />

      {/* Vignette + grid overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/50 to-ink-950" />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 75%)',
        }}
      />

      {/* Side label */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 text-xs font-medium uppercase tracking-[0.4em] text-white/40 lg:block">
        Est. 1995 — Delhi NCR
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300 backdrop-blur"
        >
          <Sparkles size={14} className="text-primary-400" />
          {hero.eyebrow}
        </motion.div>

        {/* Kinetic headline */}
        <motion.h1
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
          className="mt-7 max-w-5xl font-display text-[2.7rem] font-extrabold leading-[0.98] tracking-tightest text-white sm:text-6xl lg:text-[5.5rem]"
        >
          <span className="block overflow-hidden">
            <motion.span variants={word} className="inline-block">
              Stories that
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={word} className="inline-block">
              <span className="text-gradient">move</span>
              <span className="font-serif font-normal italic text-white/90"> &amp; events</span>
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span variants={word} className="inline-block font-serif font-normal italic text-white/90">
              that <span className="not-italic font-display font-extrabold text-white">matter.</span>
            </motion.span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button to={hero.primaryCta.link}>
            {hero.primaryCta.label}
            <ArrowDownRight size={18} />
          </Button>
          <Button to={hero.secondaryCta.link} variant="ghost">
            <Play size={16} fill="currentColor" />
            {hero.secondaryCta.label}
          </Button>
        </motion.div>

        {/* Trusted-by strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            Trusted by
          </span>
          {clients.map((c) => (
            <img
              key={c.name}
              src={c.logo}
              alt={c.name}
              loading="lazy"
              className="h-6 w-auto opacity-50 grayscale transition hover:opacity-90 hover:grayscale-0"
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-white/25 pt-1.5">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-primary-400"
          />
        </span>
      </motion.div>
    </section>
  )
}
