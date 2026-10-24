import useEditor from '../../components/admin/useEditor'
import { EditorHeader, Toggle } from '../../components/admin/ui'

/**
 * Site-wide display toggles (show/hide optional sections).
 */
export default function SettingsEditor() {
  const { draft, setDraft, save, reset, saved } = useEditor('settings')
  const set = (field, value) => setDraft({ ...draft, [field]: value })

  return (
    <div>
      <EditorHeader
        title="Site Settings"
        subtitle="Show or hide optional sections across the website."
        onSave={save}
        onReset={reset}
        previewLink="/services/production"
        saved={saved}
      />

      <div className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="font-display text-lg font-bold text-dark-900">Service pages</h2>
        <Toggle
          label='Show "Recent work" gallery'
          hint="Photo gallery on every service page. Turn ON once real project photos are added."
          checked={!!draft.showServiceGallery}
          onChange={(v) => set('showServiceGallery', v)}
        />
        <Toggle
          label='Show "Sample reel" video'
          hint="Sample reel section on every service page. Turn ON once a real reel is added."
          checked={!!draft.showServiceReel}
          onChange={(v) => set('showServiceReel', v)}
        />
        <p className="pt-2 text-xs text-slate-400">
          Tip: after turning a toggle ON, click <span className="font-semibold">Save Changes</span>, then open the preview to confirm.
        </p>
      </div>
    </div>
  )
}
