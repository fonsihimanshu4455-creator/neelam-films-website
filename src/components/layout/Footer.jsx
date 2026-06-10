import { Link } from 'react-router-dom'
import { useData } from '../../context/DataContext'

/**
 * End credits — centred roll, mono headings, ruled top.
 */
export default function Footer() {
  const { data } = useData()
  const { contact, services } = data

  return (
    <footer className="border-t-2 border-ink-900 bg-paper-100">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        {/* credits header */}
        <div className="text-center">
          <p className="doc-label text-primary-600">— End credits —</p>
          <p className="mt-4 font-serif text-4xl text-ink-950 md:text-5xl">
            Neelam Films<span className="text-primary-500">.</span>
          </p>
          <p className="doc-label mt-3 text-ink-600">
            Production house &amp; live events — Pandav Nagar, Delhi — Est. 1995
          </p>
        </div>

        {/* crew columns */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <h4 className="doc-label mb-4 text-primary-600">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ink-700 transition hover:text-primary-600">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="doc-label mb-4 text-primary-600">Departments</h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link to={s.slug} className="text-ink-700 transition hover:text-primary-600">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="doc-label mb-4 text-primary-600">Contact</h4>
            <ul className="space-y-2.5 text-sm text-ink-700">
              <li>{contact.address}</li>
              <li>
                <a href={`tel:${contact.phoneRaw}`} className="font-mono font-bold text-ink-900 hover:text-primary-600">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-primary-600">{contact.email}</a>
              </li>
              <li>
                <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600">
                  Instagram — {contact.instagram}
                </a>
              </li>
              <li className="text-ink-500">{contact.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-900/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-600 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Neelam Films — all rights reserved</p>
          <p>Shot, edited &amp; hosted in Delhi</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="transition hover:text-primary-600"
          >
            ↑ Roll back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
