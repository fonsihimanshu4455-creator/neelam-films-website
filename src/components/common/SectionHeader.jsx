import { motion } from 'framer-motion'

/**
 * Animated section heading with optional eyebrow + subtitle (noir luxe).
 */
export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
          <span className="h-px w-8 bg-primary-500" />
          {eyebrow}
          {align !== 'left' && <span className="h-px w-8 bg-primary-500" />}
        </span>
      )}
      <h2 className="font-display text-4xl uppercase leading-[0.95] text-cream-50 md:text-6xl">
        {title}
      </h2>
      {subtitle && <p className="text-base text-cream-300 md:text-lg">{subtitle}</p>}
    </motion.div>
  )
}
