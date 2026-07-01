import useEditor from '../../components/admin/useEditor'
import { EditorHeader, TextField, TextArea, ImageField, Card } from '../../components/admin/ui'

export default function ServicesEditor() {
  const { draft, setDraft, save, reset, saved } = useEditor('services')

  const update = (i, field, value) => {
    const next = [...draft]
    next[i] = { ...next[i], [field]: value }
    setDraft(next)
  }

  return (
    <div>
      <EditorHeader
        title="Services"
        subtitle="Edit titles, descriptions & cover images for each service."
        onSave={save}
        onReset={reset}
        previewLink="/"
        saved={saved}
      />

      <div className="space-y-5">
        {draft.map((s, i) => (
          <Card key={s.id}>
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-md bg-primary-50 px-2 py-1 text-xs font-semibold text-gold-400">
                {s.slug}
              </span>
            </div>
            <div className="space-y-4">
              <TextField label="Title" value={s.title} onChange={(v) => update(i, 'title', v)} />
              <TextField label="Tagline" value={s.tagline} onChange={(v) => update(i, 'tagline', v)} />
              <TextArea label="Short Description (card)" value={s.short} onChange={(v) => update(i, 'short', v)} />
              <TextArea label="Full Description (page)" value={s.description} onChange={(v) => update(i, 'description', v)} />
              <div className="grid gap-4 md:grid-cols-2">
                <ImageField label="Card Image" value={s.image} onChange={(v) => update(i, 'image', v)} />
                <ImageField label="Hero Image" value={s.hero} onChange={(v) => update(i, 'hero', v)} />
              </div>
              <TextField label="Sample Video ID" value={s.videoId} onChange={(v) => update(i, 'videoId', v)} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
