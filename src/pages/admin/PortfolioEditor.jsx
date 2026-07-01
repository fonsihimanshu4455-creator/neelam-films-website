import useEditor from '../../components/admin/useEditor'
import { EditorHeader, TextField, ImageField, Card, AddButton } from '../../components/admin/ui'

const CATEGORIES = ['TVCs', 'Corporate', 'Live Events', 'Documentaries', 'Music Videos']

export default function PortfolioEditor() {
  const { draft, setDraft, save, reset, saved } = useEditor('portfolio')

  const update = (i, field, value) => {
    const next = [...draft]
    next[i] = { ...next[i], [field]: value }
    setDraft(next)
  }
  const add = () => {
    const id = Math.max(0, ...draft.map((p) => p.id)) + 1
    setDraft([
      {
        id,
        title: 'New Project',
        category: 'TVCs',
        client: '',
        image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
        videoId: 'dQw4w9WgXcQ',
        year: String(new Date().getFullYear()),
      },
      ...draft,
    ])
  }
  const remove = (i) => setDraft(draft.filter((_, idx) => idx !== i))

  return (
    <div>
      <EditorHeader
        title="Portfolio"
        subtitle="Add, edit or remove projects in your showcase."
        onSave={save}
        onReset={reset}
        previewLink="/portfolio"
        saved={saved}
      />

      <div className="mb-5">
        <AddButton onClick={add} label="Add Project" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {draft.map((p, i) => (
          <Card key={p.id} onDelete={() => remove(i)}>
            <div className="space-y-3">
              <TextField label="Title" value={p.title} onChange={(v) => update(i, 'title', v)} />
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-dark-700">Category</label>
                  <select
                    value={p.category}
                    onChange={(e) => update(i, 'category', e.target.value)}
                    className="w-full rounded-xl border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <TextField label="Year" value={p.year} onChange={(v) => update(i, 'year', v)} />
              </div>
              <TextField label="Client" value={p.client} onChange={(v) => update(i, 'client', v)} />
              <ImageField value={p.image} onChange={(v) => update(i, 'image', v)} />
              <TextField label="YouTube Video ID" value={p.videoId} onChange={(v) => update(i, 'videoId', v)} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
