import useEditor from '../../components/admin/useEditor'
import { EditorHeader, TextField, ImageField, Card, AddButton } from '../../components/admin/ui'

export default function ClientsEditor() {
  const { draft, setDraft, save, reset, saved } = useEditor('clients')

  const update = (i, field, value) => {
    const next = [...draft]
    next[i] = { ...next[i], [field]: value }
    setDraft(next)
  }
  const add = () =>
    setDraft([
      ...draft,
      { name: 'New Client', logo: 'https://via.placeholder.com/200x80/0EA5E9/FFFFFF?text=Client' },
    ])
  const remove = (i) => setDraft(draft.filter((_, idx) => idx !== i))

  return (
    <div>
      <EditorHeader
        title="Clients"
        subtitle="Manage the client logos shown in the marquee."
        onSave={save}
        onReset={reset}
        previewLink="/"
        saved={saved}
      />

      <div className="mb-5">
        <AddButton onClick={add} label="Add Client" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {draft.map((c, i) => (
          <Card key={i} onDelete={() => remove(i)}>
            <div className="space-y-3">
              <TextField label="Name" value={c.name} onChange={(v) => update(i, 'name', v)} />
              <ImageField label="Logo URL" value={c.logo} onChange={(v) => update(i, 'logo', v)} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
