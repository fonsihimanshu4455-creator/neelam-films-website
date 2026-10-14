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
 * Cinematic full-bleed hero.
 * The showreel plays muted/looping as a full-cover background (no black bars),
 * a dark bottom gradient carries the headline, CTAs and trust row, and a
 * central play button opens the full showreel with sound.
 *
 * NOTE: the background <iframe> must NOT sit inside any element with a CSS
 * transform (framer-motion included) or Chromium renders it black (audio only).
 * So the video + overlays are plain children of <section>; only the text block
 * uses motion transforms.
 */
export default function Hero() {
  const { data } = useData()
  const hero = data.hero
  const contact = data.contact
  const vid = hero.videoId
  const [open, setOpen] = useState(false)

  // 16:9 cover sizing — always fills the section edge-to-edge, cropping instead
  // of letterboxing, regardless of the viewport aspect ratio.
  const coverStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'max(100vw, 177.78svh)',
    height: 'max(56.25vw, 100svh)',
    pointerEvents: 'none',
  }

  return (
    <section className="relative flex h-[100svh] min-h-[600px] w-full flex-col overflow-hidden bg-night-950">
      {/* ---- Full-cover showreel (no transformed ancestor) ---- */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          title="Neelam Films showreel"
          tabIndex={-1}
          style={coverStyle}
          src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&playlist=${vid}`}
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
      </div>

      {/* ---- Cinematic gradient shadows (for text legibility) ---- */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* bottom-up deep shadow where the text sits */}
        <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-night-950 via-night-950/70 to-transparent" />
        {/* left-side wash so copy reads even over bright frames */}
        <div className="absolute inset-0 bg-gradient-to-r from-night-950/75 via-night-950/25 to-transparent" />
        {/* top vignette under the navbar */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-night-950/70 to-transparent" />
        {/* overall cinematic tint */}
        <div className="absolute inset-0 bg-primary-950/15" />
      </div>

      {/* ---- Click-to-play layer + floating play button ---- */}
      <div className="group absolute inset-0 z-10">
        {/* full-area click target (sits behind the bottom content, which is z-20) */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Play showreel"
          className="absolute inset-0 h-full w-full cursor-pointer"
        />
        {/* visual play button — hidden on mobile (the Watch Showreel button covers it), right-of-centre on desktop */}
        <div className="pointer-events-none absolute right-[11%] top-1/2 hidden -translate-y-1/2 sm:block lg:right-[14%]">
          <span className="relative flex h-20 w-20 items-center justify-center sm:h-28 sm:w-28">
            <span className="absolute inset-0 animate-pulseRing rounded-full bg-gold-400/40" />
            <span className="absolute inset-0 animate-pulseRing rounded-full bg-gold-400/30 [animation-delay:0.8s]" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold-grad text-ink-900 shadow-glow transition duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
              <Play size={30} fill="currentColor" className="ml-1" />
            </span>
          </span>
        </div>
      </div>

      {/* ---- Content (text sits on the shadow) ---- */}
      <div className="relative z-20 mx-auto mt-auto w-full max-w-7xl px-5 pb-10 md:px-8 md:pb-16">
        {/* kicker */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-4 flex items-center gap-3 sm:mb-5"
        >
          <span className="h-px w-10 bg-gold-grad" />
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold-300 sm:text-xs">
            Delhi&apos;s Storytellers · Since 1995
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22 }}
          className="font-display text-[2.45rem] leading-[1.02] text-white sm:text-6xl sm:leading-[0.92] lg:text-[5.75rem]"
          style={{ textShadow: '0 2px 40px rgba(0,0,0,0.45)' }}
        >
          Stories that <span className="font-serif font-normal italic text-gradient">move</span><br />
          &amp; events <span className="font-serif font-normal italic text-gradient">that&nbsp;matter</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-cream-200/90 sm:mt-6 md:text-lg"
          style={{ textShadow: '0 1px 20px rgba(0,0,0,0.4)' }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.44 }}
          className="mt-6 flex flex-wrap items-center gap-4 sm:mt-8"
        >
          <Button variant="gold" to={hero.primaryCta.link}>{hero.primaryCta.label}<ArrowRight size={18} /></Button>
          <button
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-white"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition group-hover:bg-gold-grad group-hover:text-ink-900">
              <Play size={14} fill="currentColor" className="ml-0.5" />
            </span>
            Watch Showreel
          </button>
        </motion.div>

        {/* trust row */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/15 pt-6 sm:mt-10 sm:pt-7"
        >
          <div className="flex items-center gap-3">
            <span className="h-9 w-[3px] rounded-full bg-gold-grad" />
            <div className="leading-tight">
              <p className="font-display text-xl font-extrabold text-white">Est. 1995</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cream-200/70">Delhi · 30+ Years</p>
            </div>
          </div>

          <div className="hidden h-10 w-px bg-white/15 sm:block" />

          {/* real Google rating */}
          <div className="leading-tight">
            <div className="flex items-center gap-0.5 text-gold-300">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="mt-1 text-xs text-cream-200/80">
              <span className="font-bold text-white">4.3</span> on Google · Trusted by 500+ brands
            </p>
          </div>

          <div className="hidden h-8 w-px bg-white/15 sm:block" />

          <div className="flex items-center gap-2.5">
            {[SOCIALS.instagram, SOCIALS.facebook, SOCIALS.youtube].map((path, i) => (
              <a
                key={i}
                href={[contact.instagramUrl, contact.facebookUrl, contact.youtubeUrl][i] || '#'}
                target="_blank" rel="noopener noreferrer" aria-label="social"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-gold-grad hover:text-ink-900"
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
