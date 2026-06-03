import { motion } from 'framer-motion'

/**
 * Cinematic dark hero banner for inner pages, with a background image overlay.
 */
export default function PageHero({ eyebrow, title, subtitle, image, children }) {
  return (
    <section className="relative flex min-h-[52vh] items-center overflow-hidden bg-dark-900">
      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/95 via-dark-900/80 to-primary-900/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/40 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-400">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
