import { motion } from 'framer-motion'

/**
 * Animated section heading with optional eyebrow + subtitle.
 * Centered by default; pass align="left" for left alignment.
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-3 max-w-2xl mb-12 ${alignClass}`}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-500">
          <span className="h-px w-6 bg-primary-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight ${
          light ? 'text-white' : 'text-dark-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg ${light ? 'text-slate-300' : 'text-slate-500'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
