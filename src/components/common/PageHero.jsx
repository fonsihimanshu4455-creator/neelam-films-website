import { motion } from 'framer-motion'
import Aurora from './Aurora'

/**
 * Light inner-page hero: copy on the left, framed image on the right.
 */
export default function PageHero({ eyebrow, title, subtitle, image, children }) {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-[78px]">
      <Aurora />
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 70% at 40% 30%, #000 25%, transparent 75%)',
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tightest text-ink-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p>
          )}
          {children && <div className="mt-9">{children}</div>}
        </motion.div>

        {image && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[5/4] overflow-hidden rounded-[2rem] border border-slate-200 shadow-soft">
              <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-primary-200/30 blur-2xl" />
          </motion.div>
        )}
      </div>
    </section>
  )
}
