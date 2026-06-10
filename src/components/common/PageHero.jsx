import { motion } from 'framer-motion'

/**
 * Letterhead-style page opener — ruled lines and type, no stock imagery.
 */
export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="px-5 pb-12 pt-32 md:px-8 md:pb-16 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rule-heavy flex items-center justify-between pt-3">
            {eyebrow && <span className="doc-label text-primary-600">{eyebrow}</span>}
            <span className="doc-label hidden text-ink-500 sm:block">Neelam Films — Delhi</span>
          </div>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.0] text-ink-950 sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">{subtitle}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
          <div className="rule mt-10" />
        </motion.div>
      </div>
    </section>
  )
}
