import { Component } from 'react'

/**
 * Catches render-time errors anywhere in the tree and shows a friendly
 * fallback (with a reload) instead of a blank white screen.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('App error caught by ErrorBoundary:', error, info)
  }

  handleReset = () => {
    try {
      // Clear any cached site data that may be causing the crash, then reload
      Object.keys(localStorage)
        .filter((k) => k.startsWith('neelam_'))
        .forEach((k) => localStorage.removeItem(k))
    } catch {
      /* ignore */
    }
    window.location.href = '/'
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-cream-100 px-6 text-center">
        <img src="/logo.png" alt="Neelam Films" className="mb-8 h-20 w-auto" />
        <h1 className="font-display text-2xl font-bold text-primary-700">
          Something went wrong
        </h1>
        <p className="mt-3 max-w-md text-sm text-ink-700">
          Sorry, this page hit a snag. Please reload — it usually fixes it right away.
        </p>
        <button
          onClick={this.handleReset}
          className="mt-7 rounded-full bg-primary-700 px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
        >
          Reload the site
        </button>
      </div>
    )
  }
}
