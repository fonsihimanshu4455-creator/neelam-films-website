import { Link } from 'react-router-dom'
import { Save, RotateCcw, ExternalLink, Plus, Trash2 } from 'lucide-react'

/**
 * Shared building blocks for the admin editor pages.
 */

export function EditorHeader({ title, subtitle, onSave, onReset, previewLink, saved }) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="font-display text-2xl font-extrabold text-dark-900">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {previewLink && (
          <Link
            to={previewLink}
            target="_blank"
            className="flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5"
          >
            <ExternalLink size={15} /> Preview
          </Link>
        )}
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5"
        >
          <RotateCcw size={15} /> Reset to Default
        </button>
        <button
          onClick={onSave}
          className="flex items-center gap-1.5 rounded-full bg-primary-500 px-5 py-2 text-sm font-semibold text-white shadow transition hover:bg-primary-600"
        >
          <Save size={15} /> Save Changes
        </button>
      </div>
      {saved && (
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          Saved!
        </span>
      )}
    </div>
  )
}

export function TextField({ label, value, onChange, type = 'text', placeholder }) {
  return (
    <div>
      {label && <label className="mb-1.5 block text-sm font-medium text-dark-700">{label}</label>}
      <input
        type={type}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 px-4 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
      />
    </div>
  )
}

export function TextArea({ label, value, onChange, rows = 3 }) {
  return (
    <div>
      {label && <label className="mb-1.5 block text-sm font-medium text-dark-700">{label}</label>}
      <textarea
        rows={rows}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-white/10 px-4 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
      />
    </div>
  )
}

/**
 * Image URL input with a live preview thumbnail.
 */
export function ImageField({ label = 'Image URL', value, onChange }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-dark-700">{label}</label>
      <div className="flex items-center gap-3">
        {value && (
          <img
            src={value}
            alt="preview"
            className="h-14 w-14 shrink-0 rounded-lg border border-white/10 object-cover"
          />
        )}
        <input
          value={value ?? ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Use Unsplash/Pexels URL for now"
          className="w-full rounded-xl border border-white/10 px-4 py-2.5 text-sm outline-none transition focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
        />
      </div>
    </div>
  )
}

/**
 * On/off switch with a label & optional helper text.
 */
export function Toggle({ label, checked, onChange, hint }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <div>
        <p className="text-sm font-medium text-dark-700">{label}</p>
        {hint && <p className="mt-0.5 text-xs text-slate-400">{hint}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          checked ? 'bg-primary-500' : 'bg-slate-300'
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${
            checked ? 'left-[22px]' : 'left-0.5'
          }`}
        />
      </button>
    </div>
  )
}

export function Card({ children, onDelete }) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-white p-5 shadow-sm">
      {onDelete && (
        <button
          onClick={onDelete}
          aria-label="Delete"
          className="absolute right-3 top-3 rounded-lg p-1.5 text-red-500 transition hover:bg-red-50"
        >
          <Trash2 size={16} />
        </button>
      )}
      {children}
    </div>
  )
}

export function AddButton({ onClick, label = 'Add Item' }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 rounded-xl border-2 border-dashed border-white/15 px-5 py-3 text-sm font-medium text-slate-400 transition hover:border-primary-400 hover:text-primary-500"
    >
      <Plus size={16} /> {label}
    </button>
  )
}
