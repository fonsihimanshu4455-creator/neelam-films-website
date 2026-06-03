import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useData } from '../../context/DataContext'
import SectionHeader from '../common/SectionHeader'
import Button from '../common/Button'
import VideoModal from '../common/VideoModal'

/**
 * Featured work grid (first 6 portfolio items) with click-to-play modal.
 */
export default function FeaturedPortfolio() {
  const { data } = useData()
  const items = data.portfolio.slice(0, 6)
  const [active, setActive] = useState(null)

  return (
    <section className="bg-[#F8FAFC] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            align="left"
            eyebrow="Our Work"
            title="Featured Productions"
            subtitle="A glimpse of the stories we've brought to life for India's most loved brands."
          />
          <div className="mb-12 hidden md:block">
            <Button to="/portfolio" variant="outline">
              View All Work
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <motion.button
              key={p.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              onClick={() => setActive(p)}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl text-left shadow-sm"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent" />

              {/* Play button */}
              <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary-600 opacity-0 transition group-hover:opacity-100">
                <Play size={22} fill="currentColor" />
              </span>

              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-400">
                  {p.category}
                </span>
                <h3 className="font-display text-lg font-bold text-white">{p.title}</h3>
                <p className="text-sm text-slate-300">{p.client}</p>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button to="/portfolio" variant="outline">
            View All Work
          </Button>
        </div>
      </div>

      <VideoModal
        open={!!active}
        onClose={() => setActive(null)}
        videoId={active?.videoId}
        title={active?.title}
      />
    </section>
  )
}
