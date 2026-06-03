import { motion } from 'framer-motion'
import Aurora from './Aurora'

/**
 * Cinematic dark hero banner for inner pages.
 */
export default function PageHero({ eyebrow, title, subtitle, image, children }) {
  return (
    <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-ink-950 pt-24">
      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
      )}
      <Aurora />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/40 to-ink-950" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 75%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-300 backdrop-blur">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tightest text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
