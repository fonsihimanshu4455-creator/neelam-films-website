import { useState, useEffect } from 'react'
import { useData } from '../../context/DataContext'

/**
 * Manages a local editable draft for a data slice.
 * Returns the draft, a setter, and save/reset helpers (with a "saved" flash).
 */
export default function useEditor(key) {
  const { data, updateData, resetData, defaults } = useData()
  // Deep clone so edits don't mutate context state directly
  const [draft, setDraft] = useState(() => structuredClone(data[key]))
  const [saved, setSaved] = useState(false)

  // Re-sync when the underlying slice changes (e.g. after reset)
  useEffect(() => {
    setDraft(structuredClone(data[key]))
  }, [data, key])

  const save = () => {
    updateData(key, draft)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const reset = () => {
    if (window.confirm('Reset to default? This will discard your saved changes.')) {
      resetData(key)
      setDraft(structuredClone(defaults[key]))
    }
  }

  return { draft, setDraft, save, reset, saved }
}
