import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Star } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
import VideoModal from '../common/VideoModal'

const SOCIALS = {
  instagram: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.26 2.2.43.6.2 1 .5 1.4 1 .5.4.8.8 1 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.4-.4.5-.8.8-1.4 1-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-1-.5-.4-.8-.8-1-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.4.4-.5.8-.8 1.4-1 .4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.07-1.1.05-1.7.24-2.1.4-.5.2-.9.44-1.3.83-.4.4-.6.8-.8 1.3-.16.4-.35 1-.4 2.1C2.6 9.9 2.6 10.3 2.6 12s0 2.1.07 3.3c.05 1.1.24 1.7.4 2.1.2.5.44.9.83 1.3.4.4.8.6 1.3.8.4.16 1 .35 2.1.4 1.2.07 1.6.07 4.7.07s3.5 0 4.7-.07c1.1-.05 1.7-.24 2.1-.4.5-.2.9-.44 1.3-.83.4-.4.6-.8.8-1.3.16-.4.35-1 .4-2.1.07-1.2.07-1.6.07-3.3s0-2.1-.07-3.3c-.05-1.1-.24-1.7-.4-2.1-.2-.5-.44-.9-.83-1.3-.4-.4-.8-.6-1.3-.8-.4-.16-1-.35-2.1-.4C15.5 4 15.1 4 12 4zm0 3.1a4.9 4.9 0 100 9.8 4.9 4.9 0 000-9.8zm0 8.1a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm6.2-8.3a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z',
  facebook: 'M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.75-1.6 1.5V12h2.8l-.45 2.9h-2.35v7A10 10 0 0022 12z',
  youtube: 'M23 12s0-3.3-.4-4.8a2.5 2.5 0 00-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.4A2.5 2.5 0 001.4 7.2C1 8.7 1 12 1 12s0 3.3.4 4.8a2.5 2.5 0 001.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.4a2.5 2.5 0 001.8-1.8C23 15.3 23 12 23 12zm-13 3.1V8.9l5.2 3.1-5.2 3.1z',
}

const SocialIcon = ({ path, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={path} />
  </svg>
)

/**
 * Cinematic dark hero: full-bleed showreel backdrop, huge Anton headline,
 * rotating brand badge, avatar trust stack & social rail.
 */
export default function Hero() {
  const { data } = useData()
  const hero = data.hero
  const contact = data.contact
  const vid = hero.videoId
  const [open, setOpen] = useState(false)

  const line = {
    hidden: { y: '115%' },
    show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Full-bleed showreel backdrop */}
      <div className="absolute inset-0">
        <iframe
          title="Showreel backdrop"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 opacity-40"
          src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${vid}`}
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/70 to-[#121212]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-[#121212]/60" />
      </div>

      {/* Rotating brand badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="pointer-events-none absolute right-6 top-28 z-10 hidden md:right-12 md:top-32 lg:block"
      >
        <div className="relative h-32 w-32">
          <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
            <defs>
              <path id="badge" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
            </defs>
            <text className="fill-gold-400 text-[8.5px] font-semibold uppercase tracking-[0.28em]">
              <textPath href="#badge">Neelam Films • Production • Live Events • </textPath>
            </text>
          </svg>
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/40 bg-primary-500/10 text-gold-300">
            <Star size={18} fill="currentColor" />
          </span>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-16 pt-32 md:px-8">
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-gold-300"
        >
          <span className="h-px w-10 bg-gold-400" />
          Delhi's Production House · Since 1995
        </motion.div>

        {/* MEGA headline */}
        <h1 className="font-display text-[3.6rem] uppercase leading-[0.82] tracking-tight text-white sm:text-[6rem] lg:text-[9rem]">
          <motion.span initial="hidden" animate="show" transition={{ staggerChildren: 0.12, delayChildren: 0.1 }} className="block">
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block">Stories that</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block text-gradient">move</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block">
                <span className="font-serif text-[0.62em] lowercase italic tracking-normal text-slate-300">&amp; events that </span>matter
              </motion.span>
            </span>
          </motion.span>
        </h1>

        {/* sub + CTAs */}
        <div className="mt-9 grid max-w-4xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg"
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
            <button
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-white"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 transition group-hover:scale-110 group-hover:border-gold-400 group-hover:bg-gold-400">
                <Play size={16} fill="currentColor" className="ml-0.5" />
              </span>
              Watch Showreel
            </button>
          </motion.div>
        </div>

        {/* trust + social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-white/10 pt-8"
        >
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[
                'https://i.pravatar.cc/80?img=12',
                'https://i.pravatar.cc/80?img=32',
                'https://i.pravatar.cc/80?img=45',
                'https://i.pravatar.cc/80?img=8',
              ].map((a, i) => (
                <img key={i} src={a} alt="" className="h-10 w-10 rounded-full border-2 border-ink-950 object-cover" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold-300">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" />
                ))}
              </div>
              <p className="mt-0.5 text-xs text-slate-400">Trusted by 500+ brands across Delhi NCR</p>
            </div>
          </div>

          <div className="hidden h-8 w-px bg-white/10 sm:block" />

          <div className="flex items-center gap-3">
            {[
              { path: SOCIALS.instagram, href: contact.instagramUrl || '#' },
              { path: SOCIALS.facebook, href: contact.facebookUrl || '#' },
              { path: SOCIALS.youtube, href: contact.youtubeUrl || '#' },
            ].map(({ path, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="social"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-gold-400 hover:bg-gold-400 hover:text-white"
              >
                <SocialIcon path={path} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} videoId={vid} title="Neelam Films Showreel" />
    </section>
  )
}
