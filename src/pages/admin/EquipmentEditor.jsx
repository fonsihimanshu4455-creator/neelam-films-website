import useEditor from '../../components/admin/useEditor'
import { EditorHeader, TextField, ImageField, Card, AddButton } from '../../components/admin/ui'

const CATEGORIES = ['Camera', 'Light', 'Audio', 'Studio']

export default function EquipmentEditor() {
  const { draft, setDraft, save, reset, saved } = useEditor('equipment')

  const update = (i, field, value) => {
    const next = [...draft]
    next[i] = { ...next[i], [field]: value }
    setDraft(next)
  }
  const add = () => {
    const id = Math.max(0, ...draft.map((e) => e.id)) + 1
    setDraft([
      ...draft,
      { id, name: 'New Equipment', category: 'Camera', rate: '₹0', unit: 'day', image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80', desc: '' },
    ])
  }
  const remove = (i) => setDraft(draft.filter((_, idx) => idx !== i))

  return (
    <div>
      <EditorHeader
        title="Equipment"
        subtitle="Manage your rental inventory and rates."
        onSave={save}
        onReset={reset}
        previewLink="/services/equipment-rental"
        saved={saved}
      />

      <div className="mb-5">
        <AddButton onClick={add} label="Add Equipment" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {draft.map((e, i) => (
          <Card key={e.id} onDelete={() => remove(i)}>
            <div className="space-y-3">
              <TextField label="Name" value={e.name} onChange={(v) => update(i, 'name', v)} />
              <TextField label="Description" value={e.desc} onChange={(v) => update(i, 'desc', v)} />
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-dark-700">Category</label>
                  <select
                    value={e.category}
                    onChange={(ev) => update(i, 'category', ev.target.value)}
                    className="w-full rounded-xl border border-white/10 px-3 py-2.5 text-sm outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <TextField label="Rate" value={e.rate} onChange={(v) => update(i, 'rate', v)} />
                <TextField label="Unit" value={e.unit} onChange={(v) => update(i, 'unit', v)} />
              </div>
              <ImageField value={e.image} onChange={(v) => update(i, 'image', v)} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
