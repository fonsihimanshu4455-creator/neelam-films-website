import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import { useData } from '../../context/DataContext'
import Button from '../common/Button'
import VideoModal from '../common/VideoModal'

/**
 * Call-sheet hero: serif statement on paper, slate-board details,
 * showreel as a taped-in card on the right.
 */
export default function Hero() {
  const { data } = useData()
  const { hero, contact } = data
  const vid = hero.videoId
  const [open, setOpen] = useState(false)

  const fade = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section className="px-5 pt-32 md:px-8 md:pt-44">
      <div className="mx-auto max-w-7xl">
        {/* headline */}
        <motion.h1
          {...fade(0.05)}
          className="max-w-5xl font-serif text-[3.2rem] leading-[1.0] text-ink-950 sm:text-[4.6rem] lg:text-[6rem]"
        >
          Stories that <em className="font-light italic text-primary-600">move.</em>
          <br />
          Events that <em className="font-light italic text-primary-600">matter.</em>
        </motion.h1>

        {/* two-column working area */}
        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12">
          <motion.div {...fade(0.2)} className="md:col-span-7">
            <div className="rule pt-6">
              <p className="max-w-xl text-base leading-relaxed text-ink-700 md:text-lg">
                {hero.subheadline}
              </p>
              <p className="mt-5 font-mono text-sm text-ink-900">
                Call{' '}
                <a href={`tel:${contact.phoneRaw}`} className="font-bold text-primary-600 underline decoration-2 underline-offset-4 hover:text-primary-700">
                  {contact.phone}
                </a>{' '}
                — straight answer on cost &amp; dates.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to={hero.primaryCta.link}>
                  {hero.primaryCta.label} <ArrowRight size={15} />
                </Button>
                <Button to="/portfolio" variant="outline">
                  See the work
                </Button>
              </div>
            </div>
          </motion.div>

          {/* showreel — taped-in card */}
          <motion.div {...fade(0.35)} className="md:col-span-5">
            <button
              onClick={() => setOpen(true)}
              className="group relative block w-full border-2 border-ink-900 bg-ink-950 shadow-[6px_6px_0_0_rgba(29,25,19,1)] transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rotate-1 bg-paper-200/90 px-6 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-700 shadow-sm">
                showreel
              </span>
              <span className="relative block aspect-video w-full overflow-hidden">
                <iframe
                  title="Showreel"
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2"
                  src={`https://www.youtube.com/embed/${vid}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&modestbranding=1&playlist=${vid}`}
                  allow="autoplay; encrypted-media"
                  frameBorder="0"
                />
                <span className="absolute inset-0 bg-ink-950/20 transition group-hover:bg-transparent" />
              </span>
              <span className="flex items-center justify-between border-t-2 border-ink-900 bg-paper-50 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-ink-900">
                <span className="flex items-center gap-2">
                  <Play size={12} fill="currentColor" className="text-primary-500" /> Tap to play
                </span>
                <span className="text-ink-500">REEL — 2025</span>
              </span>
            </button>
          </motion.div>
        </div>

        {/* slate strip */}
        <motion.div {...fade(0.5)} className="mt-14 md:mt-20">
          <dl className="rule-heavy grid grid-cols-2 gap-px border-b-2 border-ink-900 bg-ink-900/20 sm:grid-cols-4">
            {[
              ['Prod.', 'Neelam Films'],
              ['Est.', '1995'],
              ['Loc.', 'Pandav Nagar, Delhi'],
              ['Call', contact.phone],
            ].map(([k, v]) => (
              <div key={k} className="bg-paper-50 px-4 py-4">
                <dt className="doc-label text-primary-600">{k}</dt>
                <dd className="mt-1 font-mono text-sm text-ink-900">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      <VideoModal open={open} onClose={() => setOpen(false)} videoId={vid} title="Neelam Films Showreel" />
    </section>
  )
}
