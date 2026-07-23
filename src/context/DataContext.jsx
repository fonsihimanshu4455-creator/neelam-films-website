import { createContext, useContext, useEffect, useState } from 'react'

// Default JSON data (shipped with the app)
import heroDefault from '../data/hero.json'
import servicesDefault from '../data/services.json'
import portfolioDefault from '../data/portfolio.json'
import clientsDefault from '../data/clients.json'
import testimonialsDefault from '../data/testimonials.json'
import equipmentDefault from '../data/equipment.json'
import teamDefault from '../data/team.json'
import contactDefault from '../data/contact.json'

const DataContext = createContext(null)

// Map of all data keys -> their default values
const DEFAULTS = {
  hero: heroDefault,
  services: servicesDefault,
  portfolio: portfolioDefault,
  clients: clientsDefault,
  testimonials: testimonialsDefault,
  equipment: equipmentDefault,
  team: teamDefault,
  contact: contactDefault,
}

const STORAGE_PREFIX = 'neelam_'

// Bump this whenever the shape/content of the default JSON data changes.
// On mismatch we drop any old cached overrides so stale data can never break
// the UI (blank pages, missing fields, outdated pricing, etc.).
const DATA_VERSION = '2026-07-03b'

function ensureVersion() {
  try {
    const stored = localStorage.getItem(STORAGE_PREFIX + 'version')
    if (stored !== DATA_VERSION) {
      Object.keys(DEFAULTS).forEach((key) => localStorage.removeItem(STORAGE_PREFIX + key))
      localStorage.setItem(STORAGE_PREFIX + 'version', DATA_VERSION)
    }
  } catch {
    // storage unavailable (private mode) — nothing to clear
  }
}

/**
 * Reads a value from localStorage (override) or falls back to the JSON default.
 */
function loadKey(key) {
  try {
    const stored = localStorage.getItem(STORAGE_PREFIX + key)
    if (stored) return JSON.parse(stored)
  } catch {
    // ignore parse / storage errors and use defaults
  }
  return DEFAULTS[key]
}

export function DataProvider({ children }) {
  const [data, setData] = useState(() => {
    ensureVersion()
    const initial = {}
    Object.keys(DEFAULTS).forEach((key) => {
      initial[key] = loadKey(key)
    })
    return initial
  })

  /**
   * Update a single data slice and persist it to localStorage.
   */
  const updateData = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }))
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value))
    } catch {
      // storage may be unavailable (private mode); state still updates
    }
  }

  /**
   * Reset a single data slice back to its JSON default.
   */
  const resetData = (key) => {
    setData((prev) => ({ ...prev, [key]: DEFAULTS[key] }))
    try {
      localStorage.removeItem(STORAGE_PREFIX + key)
    } catch {
      // ignore
    }
  }

  // Keep multiple tabs in sync
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key && e.key.startsWith(STORAGE_PREFIX)) {
        const key = e.key.replace(STORAGE_PREFIX, '')
        if (DEFAULTS[key]) {
          setData((prev) => ({ ...prev, [key]: loadKey(key) }))
        }
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  return (
    <DataContext.Provider value={{ data, updateData, resetData, defaults: DEFAULTS }}>
      {children}
    </DataContext.Provider>
  )
}

// Convenience hook
export function useData() {
  const ctx = useContext(DataContext)
  if (!ctx) throw new Error('useData must be used within a DataProvider')
  return ctx
}

export default DataContext
