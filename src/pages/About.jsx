import { motion } from 'framer-motion'
import { Target, Eye, Quote } from 'lucide-react'
import { useData } from '../context/DataContext'
import PageHero from '../components/common/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import CTASection from '../components/common/CTASection'
import CountUp from '../components/common/CountUp'

export default function About() {
  const { data } = useData()
  const { team, hero } = data
  const { founder, timeline, mission, vision } = team

  return (
    <>
      <PageHero
        eyebrow="Since 1995"
        title="Three Decades of Storytelling"
        subtitle="What began as a single camera and a big dream is today one of Delhi's most trusted production houses — built on craft, consistency, and client trust."
        image="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1600&q=80"
      />

      {/* Story */}
      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80"
              alt="Neelam Films production"
              loading="lazy"
              className="rounded-3xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary-500 px-7 py-5 text-white shadow-lg md:block">
              <div className="font-display text-3xl font-extrabold">
                <CountUp value={30} suffix="+" />
              </div>
              <p className="text-sm">Years of Legacy</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              align="left"
              eyebrow="Our Story"
              title="From One Camera to Countless Stories"
            />
            <div className="space-y-4 text-slate-600">
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
              <p>
                With an in-house recording studio, a vast equipment inventory, and a digital growth
                division, we are a one-stop creative partner for brands that demand the very best.
              </p>
            </div>

            {/* Mini stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {hero.stats.slice(1).map((s) => (
                <div key={s.label} className="rounded-2xl bg-primary-50 p-4 text-center">
                  <div className="font-display text-2xl font-extrabold text-primary-600">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white px-4 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Our Journey"
            title="Milestones Through the Decades"
            subtitle="Every year, a new chapter in our story of growth."
          />

          <div className="relative">
            {/* center line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-primary-100 md:left-1/2 md:-translate-x-1/2" />

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
                  {/* dot */}
                  <div className="absolute left-4 top-2 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-primary-500 md:left-1/2" />

                  <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
                      <span className="font-display text-2xl font-extrabold text-primary-500">
                        {t.year}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-bold text-dark-900">
                        {t.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">{t.desc}</p>
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
      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {[
            { icon: Target, title: 'Our Mission', text: mission, color: 'from-primary-500 to-primary-700' },
            { icon: Eye, title: 'Our Vision', text: vision, color: 'from-dark-800 to-dark-900' },
          ].map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl bg-gradient-to-br ${b.color} p-9 text-white shadow-lg`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <b.icon size={28} />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-white/85">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white px-4 py-24 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Leadership" title="Meet Our Founder" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-8 rounded-3xl border border-slate-100 bg-slate-50 p-8 md:grid-cols-[auto,1fr] md:p-12"
          >
            <img
              src={founder.avatar}
              alt={founder.name}
              loading="lazy"
              className="mx-auto h-44 w-44 rounded-3xl border-4 border-primary-500 object-cover shadow-lg"
            />
            <div>
              <Quote className="mb-3 text-primary-500" size={32} />
              <p className="text-lg font-light italic text-dark-700">“{founder.quote}”</p>
              <p className="mt-5 text-sm leading-relaxed text-slate-500">{founder.bio}</p>
              <div className="mt-5">
                <p className="font-display text-xl font-bold text-dark-900">{founder.name}</p>
                <p className="text-sm text-primary-600">{founder.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
