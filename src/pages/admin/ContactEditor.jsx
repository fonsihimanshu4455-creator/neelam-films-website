import useEditor from '../../components/admin/useEditor'
import { EditorHeader, TextField, TextArea } from '../../components/admin/ui'

export default function ContactEditor() {
  const { draft, setDraft, save, reset, saved } = useEditor('contact')
  const set = (field, value) => setDraft({ ...draft, [field]: value })

  return (
    <div>
      <EditorHeader
        title="Contact Information"
        subtitle="Update your address, phone, email & social channels."
        onSave={save}
        onReset={reset}
        previewLink="/contact"
        saved={saved}
      />

      <div className="space-y-5 rounded-2xl bg-white p-6 shadow-sm">
        <TextField label="Display Phone" value={draft.phone} onChange={(v) => set('phone', v)} />
        <TextField label="Phone (digits only, for tel: links)" value={draft.phoneRaw} onChange={(v) => set('phoneRaw', v)} />
        <TextField label="WhatsApp Number (digits only)" value={draft.whatsapp} onChange={(v) => set('whatsapp', v)} />
        <TextField label="Email" value={draft.email} onChange={(v) => set('email', v)} />
        <div className="grid gap-5 md:grid-cols-2">
          <TextField label="Instagram Handle" value={draft.instagram} onChange={(v) => set('instagram', v)} />
          <TextField label="Instagram URL" value={draft.instagramUrl} onChange={(v) => set('instagramUrl', v)} />
        </div>
        <TextArea label="Address" value={draft.address} onChange={(v) => set('address', v)} />
        <TextField label="Working Hours" value={draft.hours} onChange={(v) => set('hours', v)} />
        <TextArea label="Google Maps Embed URL" value={draft.mapEmbed} onChange={(v) => set('mapEmbed', v)} rows={3} />
      </div>
    </div>
  )
}
