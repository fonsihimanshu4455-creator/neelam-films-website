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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={path} /></svg>
)

/**
 * Light editorial hero (white theme): burgundy Bebas headline, gold accents,
 * a framed showreel card, trust + social row.
 */
export default function Hero() {
  const { data } = useData()
  const hero = data.hero
  const contact = data.contact
  const vid = hero.videoId
  const [open, setOpen] = useState(false)

  return (
    <section className="relative overflow-hidden bg-cream-soft">
      {/* soft brand decor */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-700/5 blur-[110px]" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-gold-400/10 blur-[120px]" />
        <div className="pattern-dots absolute left-8 top-40 h-40 w-40 opacity-50" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-32 md:px-8 md:pt-40 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-cream-300 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-primary-700 shadow-soft"
          >
            <span className="h-2 w-2 rounded-full bg-gold-400" />
            Delhi's Production House · Since 1995
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl leading-[0.92] text-primary-700 sm:text-7xl lg:text-8xl"
          >
            Stories that <span className="text-gradient">move</span><br />
            <span className="text-ink-900">&amp; events that</span> <span className="text-gradient">matter</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-700 md:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button to={hero.primaryCta.link}>{hero.primaryCta.label}<ArrowRight size={18} /></Button>
            <button onClick={() => setOpen(true)} className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em] text-ink-900">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-grad text-ink-900 shadow-glow transition group-hover:scale-110">
                <Play size={16} fill="currentColor" className="ml-0.5" />
              </span>
              Watch Showreel
            </button>
          </motion.div>

          {/* trust + social */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-cream-300 pt-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {['12', '32', '45', '8'].map((n) => (
                  <img key={n} src={`https://i.pravatar.cc/80?img=${n}`} alt="" className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-soft" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
                </div>
                <p className="mt-0.5 text-xs text-ink-700">Trusted by 500+ brands</p>
              </div>
            </div>
            <div className="hidden h-8 w-px bg-cream-300 sm:block" />
            <div className="flex items-center gap-3">
              {[SOCIALS.instagram, SOCIALS.facebook, SOCIALS.youtube].map((path, i) => (
                <a key={i} href={[contact.instagramUrl, contact.facebookUrl, contact.youtubeUrl][i] || '#'} target="_blank" rel="noopener noreferrer" aria-label="social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-300 bg-white text-primary-700 transition hover:bg-primary-700 hover:text-white">
                  <SocialIcon path={path} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — framed showreel card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gold-grad opacity-20 blur-2xl" />
          <button onClick={() => setOpen(true)} className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] border border-cream-300 bg-ink-900 shadow-soft">
            <iframe
              title="Showreel" tabIndex={-1}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2"
              src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${vid}`}
              allow="autoplay; encrypted-media" frameBorder="0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold-grad text-ink-900 shadow-glow transition group-hover:scale-110">
              <Play size={30} fill="currentColor" className="ml-1" />
            </span>
            <span className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <span className="rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-700">▶ Showreel 2025</span>
              <span className="flex items-center gap-1.5 rounded-full bg-primary-700 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white"><Star size={12} fill="currentColor" /> 30+ Yrs</span>
            </span>
          </button>
        </motion.div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} videoId={vid} title="Neelam Films Showreel" />
    </section>
  )
}
