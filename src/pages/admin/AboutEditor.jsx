import useEditor from '../../components/admin/useEditor'
import {
  EditorHeader,
  TextField,
  TextArea,
  ImageField,
  Toggle,
  Card,
  AddButton,
} from '../../components/admin/ui'

export default function AboutEditor() {
  const { draft, setDraft, save, reset, saved } = useEditor('team')
  if (!draft) return null

  const founder = draft.founder || {}
  const setFounder = (field, value) =>
    setDraft({ ...draft, founder: { ...founder, [field]: value } })
  const set = (field, value) => setDraft({ ...draft, [field]: value })

  const timeline = draft.timeline || []
  const setTimeline = (next) => setDraft({ ...draft, timeline: next })
  const updateMilestone = (i, field, value) => {
    const next = timeline.map((m, idx) => (idx === i ? { ...m, [field]: value } : m))
    setTimeline(next)
  }

  return (
    <div>
      <EditorHeader
        title="About Page"
        subtitle="Founder, mission, vision & company timeline."
        onSave={save}
        onReset={reset}
        previewLink="/about"
        saved={saved}
      />

      {/* Founder */}
      <div className="space-y-5 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-bold text-dark-900">Founder</h2>

        <Toggle
          label="Show founder section on the About page"
          hint="Turn off to completely hide the founder name, photo & quote."
          checked={founder.show !== false}
          onChange={(v) => setFounder('show', v)}
        />

        <div className="grid gap-5 md:grid-cols-2">
          <TextField label="Name" value={founder.name} onChange={(v) => setFounder('name', v)} />
          <TextField label="Role / Title" value={founder.role} onChange={(v) => setFounder('role', v)} />
        </div>
        <ImageField label="Photo URL" value={founder.avatar} onChange={(v) => setFounder('avatar', v)} />
        <TextField label="Quote" value={founder.quote} onChange={(v) => setFounder('quote', v)} />
        <TextArea label="Bio" value={founder.bio} onChange={(v) => setFounder('bio', v)} rows={4} />
      </div>

      {/* Mission / Vision */}
      <div className="mt-6 space-y-5 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-bold text-dark-900">Mission & Vision</h2>
        <TextArea label="Mission" value={draft.mission} onChange={(v) => set('mission', v)} rows={3} />
        <TextArea label="Vision" value={draft.vision} onChange={(v) => set('vision', v)} rows={3} />
      </div>

      {/* Timeline */}
      <div className="mt-6 space-y-4 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-bold text-dark-900">Timeline / Milestones</h2>
        <div className="space-y-4">
          {timeline.map((m, i) => (
            <Card key={i} onDelete={() => setTimeline(timeline.filter((_, idx) => idx !== i))}>
              <div className="grid gap-4 md:grid-cols-[120px_1fr]">
                <TextField label="Year" value={m.year} onChange={(v) => updateMilestone(i, 'year', v)} />
                <TextField label="Title" value={m.title} onChange={(v) => updateMilestone(i, 'title', v)} />
              </div>
              <div className="mt-4">
                <TextArea label="Description" value={m.desc} onChange={(v) => updateMilestone(i, 'desc', v)} rows={2} />
              </div>
            </Card>
          ))}
        </div>
        <AddButton
          onClick={() => setTimeline([...timeline, { year: '', title: '', desc: '' }])}
          label="Add Milestone"
        />
      </div>
    </div>
  )
}
