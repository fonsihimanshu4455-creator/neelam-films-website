import { motion } from 'framer-motion'
import { Target, Eye, Quote } from 'lucide-react'
import { useData } from '../context/DataContext'
import PageHero from '../components/common/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import CTASection from '../components/common/CTASection'
import CountUp from '../components/common/CountUp'
import Reveal from '../components/common/Reveal'

export default function About() {
  const { data } = useData()
  const { team, hero } = data
  const { founder, timeline, mission, vision } = team

  return (
    <>
      <PageHero
        eyebrow="Since 1995"
        title="Three decades of storytelling"
        subtitle="What began as a single camera and a big dream is today one of Delhi's most trusted production houses — built on craft, consistency, and client trust."
        image="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80"
      />

      {/* Story */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <Reveal variant="right" className="relative">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80"
              alt="Neelam Films production"
              loading="lazy"
              className="rounded-3xl border border-white/10 shadow-soft"
            />
            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-5 shadow-soft md:-right-6">
              <div className="font-display text-3xl font-extrabold text-gradient">
                <CountUp value={30} suffix="+" />
              </div>
              <p className="text-sm text-slate-400">Years of legacy</p>
            </div>
          </Reveal>

          <Reveal variant="left">
            <div className="mb-8">
              <SectionHeader align="left" eyebrow="Our story" title="From one camera to countless stories" />
            </div>
            <div className="space-y-4 text-slate-300">
              <p>
                Founded in 1995 in the heart of Delhi, Neelam Films set out with a simple belief:
                that every brand and every moment deserves to be captured beautifully. Over three
                decades, that belief has powered thousands of productions across television,
                corporate, and live event landscapes.
              </p>
              <p>
                Today, we are a full-service production house and live event specialist — trusted by
                names like HP, Indian Oil, Audi, DHL, and Colgate. Our journey spans the analog era
                to the digital age, always evolving, always raising the bar.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {hero.stats.slice(1).map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center shadow-sm">
                  <div className="font-display text-2xl font-extrabold text-gradient">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-white/60 bg-white/55 px-5 py-24 backdrop-blur-md md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 flex justify-center text-center">
            <SectionHeader
              eyebrow="Our journey"
              title="Milestones through the decades"
              subtitle="Every year, a new chapter in our story of growth."
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary-400 via-slate-200 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-gold-400 shadow md:left-1/2" />
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-gold-400/50 hover:shadow-soft">
                      <span className="font-display text-2xl font-extrabold text-gradient">{t.year}</span>
                      <h3 className="mt-1 font-display text-lg font-bold text-white">{t.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{t.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: 'Our mission', text: mission, blue: true },
            { icon: Eye, title: 'Our vision', text: vision, blue: false },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-3xl p-9 shadow-soft ${
                b.blue
                  ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white'
                  : 'border border-white/10 bg-white'
              }`}
            >
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${b.blue ? 'bg-white/15 text-white' : 'bg-gold-400/10 text-gold-400'}`}>
                <b.icon size={28} />
              </span>
              <h3 className={`mt-5 font-display text-2xl font-bold ${b.blue ? 'text-white' : 'text-white'}`}>
                {b.title}
              </h3>
              <p className={`mt-3 leading-relaxed ${b.blue ? 'text-white/70' : 'text-slate-400'}`}>{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder */}
      {founder.show !== false && (
      <section className="border-t border-white/60 bg-white/55 px-5 py-24 backdrop-blur-md md:px-8 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 flex justify-center text-center">
            <SectionHeader eyebrow="Leadership" title="Meet our founder" />
          </div>
          <Reveal>
            <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-[auto,1fr] md:p-12">
              <img
                src={founder.avatar}
                alt={founder.name}
                loading="lazy"
                className="mx-auto h-44 w-44 rounded-3xl border-2 border-gold-400 object-cover shadow-soft"
              />
              <div>
                <Quote className="mb-3 text-gold-400" size={32} />
                <p className="font-serif text-2xl italic text-slate-100">“{founder.quote}”</p>
                <p className="mt-5 text-sm leading-relaxed text-slate-400">{founder.bio}</p>
                <div className="mt-5">
                  <p className="font-display text-xl font-bold text-white">{founder.name}</p>
                  <p className="text-sm text-gold-400">{founder.role}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      )}

      <CTASection />
    </>
  )
}
