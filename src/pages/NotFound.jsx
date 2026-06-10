import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="doc-label text-primary-600">Error 404</span>
      <h1 className="mt-4 font-serif text-6xl text-ink-950 md:text-8xl">
        Scene <em className="italic text-primary-600">missing.</em>
      </h1>
      <p className="mt-4 max-w-md text-ink-600">
        This page isn't in the log — it was probably cut in the edit.
      </p>
      <div className="mt-9">
        <Button to="/" variant="outline">← Back to reel one</Button>
      </div>
    </div>
  )
}
