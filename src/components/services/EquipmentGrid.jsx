import { useState } from 'react'
import { motion } from 'framer-motion'
import { Camera, Lightbulb, Mic, Building2 } from 'lucide-react'
import { useData } from '../../context/DataContext'
import SectionHeader from '../common/SectionHeader'
import Button from '../common/Button'

const CATEGORY_ICONS = {
  Camera: Camera,
  Light: Lightbulb,
  Audio: Mic,
  Studio: Building2,
}

const FILTERS = ['All', 'Camera', 'Light', 'Audio', 'Studio']

/**
 * Filterable equipment rental cards with daily/hourly rates.
 */
export default function EquipmentGrid() {
  const { data } = useData()
  const equipment = data.equipment
  const [filter, setFilter] = useState('All')

  const items =
    filter === 'All' ? equipment : equipment.filter((e) => e.category === filter)

  return (
    <section className="bg-[#F8FAFC] px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Rental Catalogue"
          title="Browse Our Inventory"
          subtitle="Professional, well-maintained gear at the best rates in Delhi."
        />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === f
                  ? 'bg-primary-500 text-white shadow-md shadow-primary-500/30'
                  : 'bg-white text-slate-600 hover:bg-primary-50'
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
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-600">
                    <CatIcon size={14} />
                    {e.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-dark-900">{e.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{e.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-display text-xl font-extrabold text-primary-600">
                      {e.rate}
                      <span className="text-sm font-medium text-slate-400"> / {e.unit}</span>
                    </span>
                    <Button to="/contact" className="px-5 py-2 text-xs">
                      Rent Now
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
