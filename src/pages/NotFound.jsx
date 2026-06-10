import { Home } from 'lucide-react'
import Button from '../components/common/Button'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <span className="font-display text-9xl leading-none text-primary-400">404</span>
      <h1 className="mt-4 font-display text-4xl uppercase text-cream-50">
        Scene <span className="font-serif lowercase italic tracking-normal text-primary-400">missing</span>
      </h1>
      <p className="mt-3 max-w-md text-cream-300">
        This reel doesn't exist — the page you're looking for was cut in the edit.
      </p>
      <div className="mt-9">
        <Button to="/">
          <Home size={16} /> Back to home
        </Button>
      </div>
    </div>
  )
}
