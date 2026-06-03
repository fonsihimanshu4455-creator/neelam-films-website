import useEditor from '../../components/admin/useEditor'
import { EditorHeader, TextField, TextArea, ImageField, Card, AddButton } from '../../components/admin/ui'

export default function TestimonialsEditor() {
  const { draft, setDraft, save, reset, saved } = useEditor('testimonials')

  const update = (i, field, value) => {
    const next = [...draft]
    next[i] = { ...next[i], [field]: field === 'rating' ? Number(value) : value }
    setDraft(next)
  }
  const add = () => {
    const id = Math.max(0, ...draft.map((t) => t.id)) + 1
    setDraft([
      ...draft,
      { id, name: 'New Client', role: '', avatar: 'https://i.pravatar.cc/300?img=15', quote: '', rating: 5 },
    ])
  }
  const remove = (i) => setDraft(draft.filter((_, idx) => idx !== i))

  return (
    <div>
      <EditorHeader
        title="Testimonials"
        subtitle="Add or edit client reviews shown on the homepage."
        onSave={save}
        onReset={reset}
        previewLink="/"
        saved={saved}
      />

      <div className="mb-5">
        <AddButton onClick={add} label="Add Testimonial" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {draft.map((t, i) => (
          <Card key={t.id} onDelete={() => remove(i)}>
            <div className="space-y-3">
              <TextField label="Name" value={t.name} onChange={(v) => update(i, 'name', v)} />
              <TextField label="Role / Company" value={t.role} onChange={(v) => update(i, 'role', v)} />
              <TextArea label="Quote" value={t.quote} onChange={(v) => update(i, 'quote', v)} />
              <ImageField label="Avatar URL" value={t.avatar} onChange={(v) => update(i, 'avatar', v)} />
              <TextField label="Rating (1-5)" type="number" value={t.rating} onChange={(v) => update(i, 'rating', v)} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
