import { motion } from 'framer-motion'

/**
 * Document-style section heading: mono label over a serif title, ruled above.
 */
export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}
    >
      {eyebrow && <span className="doc-label text-primary-600">{eyebrow}</span>}
      <h2 className="font-serif text-4xl leading-[1.02] text-ink-950 md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="text-base text-ink-600 md:text-lg">{subtitle}</p>}
    </motion.div>
  )
}
