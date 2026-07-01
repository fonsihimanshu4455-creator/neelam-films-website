import { motion } from 'framer-motion'

/**
 * Animated section heading with optional eyebrow + subtitle.
 * Dark-theme by default; pass light={false} for use on white backgrounds.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
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
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary-400">
          <span className="h-px w-8 bg-primary-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-extrabold leading-tight md:text-5xl ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg ${light ? 'text-slate-300' : 'text-slate-400'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
