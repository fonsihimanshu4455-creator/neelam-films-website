import useEditor from '../../components/admin/useEditor'
import { EditorHeader, TextField, TextArea, Card, AddButton } from '../../components/admin/ui'

export default function HeroEditor() {
  const { draft, setDraft, save, reset, saved } = useEditor('hero')

  const set = (field, value) => setDraft({ ...draft, [field]: value })
  const setCta = (key, field, value) =>
    setDraft({ ...draft, [key]: { ...draft[key], [field]: value } })

  const setStat = (i, field, value) => {
    const stats = [...draft.stats]
    stats[i] = { ...stats[i], [field]: field === 'value' ? Number(value) : value }
    setDraft({ ...draft, stats })
  }
  const addStat = () =>
    setDraft({ ...draft, stats: [...draft.stats, { value: 0, suffix: '+', label: 'New Stat' }] })
  const removeStat = (i) =>
    setDraft({ ...draft, stats: draft.stats.filter((_, idx) => idx !== i) })

  return (
    <div>
      <EditorHeader
        title="Hero Section"
        subtitle="The main banner on your homepage."
        onSave={save}
        onReset={reset}
        previewLink="/"
        saved={saved}
      />

      <div className="space-y-5 rounded-2xl bg-white p-6 shadow-sm">
        <TextField label="Eyebrow Text" value={draft.eyebrow} onChange={(v) => set('eyebrow', v)} />
        <TextField label="Headline" value={draft.headline} onChange={(v) => set('headline', v)} />
        <TextArea label="Subheadline" value={draft.subheadline} onChange={(v) => set('subheadline', v)} />
        <TextField
          label="Background YouTube Video ID"
          value={draft.videoId}
          onChange={(v) => set('videoId', v)}
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-4">
            <p className="mb-3 text-sm font-semibold text-dark-900">Primary CTA</p>
            <div className="space-y-3">
              <TextField label="Label" value={draft.primaryCta.label} onChange={(v) => setCta('primaryCta', 'label', v)} />
              <TextField label="Link" value={draft.primaryCta.link} onChange={(v) => setCta('primaryCta', 'link', v)} />
            </div>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <p className="mb-3 text-sm font-semibold text-dark-900">Secondary CTA</p>
            <div className="space-y-3">
              <TextField label="Label" value={draft.secondaryCta.label} onChange={(v) => setCta('secondaryCta', 'label', v)} />
              <TextField label="Link" value={draft.secondaryCta.link} onChange={(v) => setCta('secondaryCta', 'link', v)} />
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-3 mt-8 font-display text-lg font-bold text-dark-900">Statistics</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {draft.stats.map((s, i) => (
          <Card key={i} onDelete={() => removeStat(i)}>
            <div className="grid grid-cols-2 gap-3">
              <TextField label="Value" type="number" value={s.value} onChange={(v) => setStat(i, 'value', v)} />
              <TextField label="Suffix" value={s.suffix} onChange={(v) => setStat(i, 'suffix', v)} />
            </div>
            <div className="mt-3">
              <TextField label="Label" value={s.label} onChange={(v) => setStat(i, 'label', v)} />
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-4">
        <AddButton onClick={addStat} label="Add Stat" />
      </div>
    </div>
  )
}
