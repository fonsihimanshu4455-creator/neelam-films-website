import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'

/**
 * Full-screen cinematic hero with a muted, looping YouTube background.
 */
export default function Hero() {
  const { data } = useData()
  const hero = data.hero
  const vid = hero.videoId

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-dark-900">
      {/* YouTube background video */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <iframe
          title="Showreel background"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.77vh] min-w-full -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${vid}`}
          allow="autoplay; encrypted-media"
          frameBorder="0"
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/95 via-dark-900/80 to-primary-900/60" />
      <div className="absolute inset-0 bg-dark-900/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/40 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-400 backdrop-blur">
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button to={hero.primaryCta.link}>
              {hero.primaryCta.label}
              <ArrowRight size={18} />
            </Button>
            <Button to={hero.secondaryCta.link} variant="ghost">
              <Play size={18} fill="currentColor" />
              {hero.secondaryCta.label}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.8, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-widest text-slate-400"
      >
        Scroll
      </motion.div>
    </section>
  )
}
