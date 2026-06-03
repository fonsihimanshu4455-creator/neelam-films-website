import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowDownRight, Sparkles, Star } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
import Aurora from '../common/Aurora'
import VideoModal from '../common/VideoModal'

/**
 * Light, premium split hero: kinetic headline on the left,
 * a framed muted showreel on the right, trusted-by strip below.
 */
export default function Hero() {
  const { data } = useData()
  const hero = data.hero
  const clients = data.clients.slice(0, 6)
  const vid = hero.videoId
  const [open, setOpen] = useState(false)

  const word = {
    hidden: { y: '120%' },
    show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-[78px]">
      <Aurora />
      {/* subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 30%, #000 25%, transparent 75%)',
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr,0.9fr] lg:py-24">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700"
          >
            <Sparkles size={14} className="text-primary-500" />
            {hero.eyebrow}
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.08, delayChildren: 0.15 }}
            className="mt-6 font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-tightest text-ink-900 sm:text-6xl lg:text-[4.6rem]"
          >
            <span className="block overflow-hidden">
              <motion.span variants={word} className="inline-block">Stories that</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={word} className="inline-block">
                <span className="text-gradient">move</span>
                <span className="font-serif font-normal italic text-ink-700"> &amp; events</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={word} className="inline-block font-serif font-normal italic text-ink-700">
                that <span className="font-display font-extrabold not-italic text-ink-900">matter.</span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-4"
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

          {/* rating chip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[12, 45, 33, 20].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/80?img=${n}`}
                  alt=""
                  loading="lazy"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-xs text-slate-500">Trusted by 500+ brands since 1995</p>
            </div>
          </motion.div>
        </div>

        {/* Right: framed showreel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 bg-ink-900 shadow-soft sm:aspect-square lg:aspect-[4/5]">
            <iframe
              title="Showreel"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2"
              src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${vid}`}
              allow="autoplay; encrypted-media"
              frameBorder="0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent" />
            <button
              onClick={() => setOpen(true)}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Play showreel"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-primary-600 shadow-glow transition group-hover:scale-110">
                <Play size={30} fill="currentColor" />
              </span>
            </button>
            <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-ink-900 backdrop-blur">
              ▶ Our Showreel 2025
            </div>
          </div>

          {/* floating stat card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-4 bottom-10 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-soft md:-left-8"
          >
            <div className="font-display text-2xl font-extrabold text-gradient">30+ Yrs</div>
            <p className="text-xs text-slate-500">of Delhi's trust</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Trusted-by strip */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-14 md:px-8">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-slate-200 pt-8">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">As trusted by</span>
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
