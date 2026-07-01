import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Lightbulb, Mic, Building2 } from 'lucide-react'
import { useData } from '../../context/DataContext'
import SectionHeader from '../common/SectionHeader'
import Button from '../common/Button'

const CATEGORY_ICONS = { Camera, Light: Lightbulb, Audio: Mic, Studio: Building2 }
const FILTERS = ['All', 'Camera', 'Light', 'Audio', 'Studio']

/**
 * Filterable equipment rental cards with daily/hourly rates (light theme).
 */
export default function EquipmentGrid() {
  const { data } = useData()
  const equipment = data.equipment
  const [filter, setFilter] = useState('All')

  const items = filter === 'All' ? equipment : equipment.filter((e) => e.category === filter)

  return (
    <section className="border-y border-white/60 bg-cream-1005 px-5 py-24 backdrop-blur-md md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex justify-center text-center">
          <SectionHeader
            eyebrow="Rental catalogue"
            title="Browse our inventory"
            subtitle="Professional, well-maintained gear at the best rates in Delhi."
          />
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === f
                  ? 'bg-gold-400 text-ink-900 shadow-glow'
                  : 'border border-cream-300 bg-cream-100 text-ink-700 hover:border-gold-400'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((e, i) => {
            const CatIcon = CATEGORY_ICONS[e.category] || Camera
            return (
              <motion.div
                key={e.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-cream-300 bg-cream-100 shadow-sm transition hover:border-gold-400/50 hover:shadow-soft"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gold-400 backdrop-blur">
                    <CatIcon size={14} />
                    {e.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-primary-700">{e.name}</h3>
                  <p className="mt-1 text-sm text-ink-700">{e.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-xl font-extrabold text-gradient">
                      {e.rate}
                      <span className="text-sm font-medium text-ink-700"> / {e.unit}</span>
                    </span>
                    <Button to="/contact" className="px-5 py-2 text-xs" magnetic={false}>
                      Rent now
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
