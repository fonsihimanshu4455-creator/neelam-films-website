import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, Phone } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
import VideoModal from '../common/VideoModal'

/**
 * Poster-type hero on noir, with the showreel band below.
 */
export default function Hero() {
  const { data } = useData()
  const { hero, contact } = data
  const vid = hero.videoId
  const [open, setOpen] = useState(false)

  const line = {
    hidden: { y: '115%' },
    show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="relative px-5 pt-32 md:px-8 md:pt-40">
      <div className="mx-auto max-w-7xl">
        {/* MEGA headline */}
        <h1 className="font-display text-[4rem] uppercase leading-[0.85] text-cream-50 sm:text-[7rem] lg:text-[9.5rem]">
          <motion.span initial="hidden" animate="show" transition={{ staggerChildren: 0.1 }} className="block">
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block">Stories that</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block text-primary-400">move.</motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span variants={line} className="inline-block">
                <span className="font-serif lowercase italic tracking-normal text-cream-300">events that </span>matter
              </motion.span>
            </span>
          </motion.span>
        </h1>

        {/* sub row */}
        <div className="mt-10 grid gap-8 border-t border-cream-50/15 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="max-w-xl text-base leading-relaxed text-cream-300 md:text-lg">
              {hero.subheadline}
            </p>
            <a
              href={`tel:${contact.phoneRaw}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-400 transition hover:text-primary-300"
            >
              <Phone size={15} /> {contact.phone} — call us for a straight answer on cost and dates.
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
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

      {/* Showreel band */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
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
          <div className="absolute inset-0 bg-ink-950/35 transition duration-500 group-hover:bg-ink-950/15" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-500 text-ink-950 transition duration-500 group-hover:scale-105">
            <Play size={30} fill="currentColor" className="ml-1" />
          </span>
        </button>
      </motion.div>

      <VideoModal open={open} onClose={() => setOpen(false)} videoId={vid} title="Neelam Films Showreel" />
    </section>
  )
}
