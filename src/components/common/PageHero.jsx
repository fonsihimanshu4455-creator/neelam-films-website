import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Cinematic full-bleed inner-page hero with a parallax image & noir overlay.
 */
export default function PageHero({ eyebrow, title, subtitle, image, children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section ref={ref} className="relative flex h-[78vh] min-h-[520px] items-end overflow-hidden bg-ink-950">
      {image && (
        <motion.img
          src={image}
          alt=""
          aria-hidden="true"
          loading="eager"
          style={{ y }}
          className="absolute inset-0 h-[120%] w-full object-cover opacity-70"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          {eyebrow && (
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-primary-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary-400">{eyebrow}</span>
            </div>
          )}
          <h1 className="font-display text-5xl uppercase leading-[0.9] text-cream-50 sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream-200 sm:text-lg">{subtitle}</p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </motion.div>
      </div>
    </section>
  )
}
