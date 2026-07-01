import { motion } from 'framer-motion'
import { Search, PenTool, Clapperboard, Rocket } from 'lucide-react'
import Reveal from '../common/Reveal'

const STEPS = [
  { n: '01', Icon: Search, title: 'Discover', desc: 'We dig into your brand, audience & goals to find the real opportunity.' },
  { n: '02', Icon: PenTool, title: 'Strategy & Script', desc: 'Concept, script, storyboard and a clear plan mapped to outcomes.' },
  { n: '03', Icon: Clapperboard, title: 'Production', desc: 'Cinema-grade shoot, edit, sound & design by our in-house crew.' },
  { n: '04', Icon: Rocket, title: 'Launch & Grow', desc: 'Delivery, distribution and paid campaigns that convert attention.' },
]

/**
 * "How we work" — four connected steps on dark, blue-accented.
 */
export default function ProcessSteps() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-primary-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold-400">
              <span className="h-px w-8 bg-gold-400" /> How we work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.95] tracking-tight text-white md:text-7xl">
              A process built <span className="text-gradient">to deliver</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent lg:block" />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative z-10 mb-6 flex h-18 w-18">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-ink-900 text-gold-300 shadow-glow">
                  <s.Icon size={24} />
                </span>
                <span className="absolute -right-1 -top-2 font-display text-2xl text-white/10">{s.n}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
