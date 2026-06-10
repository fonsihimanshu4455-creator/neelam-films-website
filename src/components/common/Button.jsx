import { Link } from 'react-router-dom'

/**
 * Document-style button: square, mono caps, hard ink border.
 * Variants: primary (red) | outline (ink) | ghost
 */
const VARIANTS = {
  primary: 'bg-primary-500 text-paper-50 border-primary-500 hover:bg-primary-600 hover:border-primary-600',
  outline: 'bg-transparent text-ink-900 border-ink-900 hover:bg-ink-900 hover:text-paper-50',
  ghost: 'bg-transparent text-primary-600 border-primary-500/50 hover:border-primary-500 hover:bg-primary-50',
}

export default function Button({ children, to, href, variant = 'primary', className = '', magnetic, ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 border-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300 ' +
    (VARIANTS[variant] || VARIANTS.primary) +
    ' ' +
    className

  const content = <span className="inline-flex items-center gap-2">{children}</span>

  if (to) return <Link to={to} className={base} {...props}>{content}</Link>
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" className={base} {...props}>{content}</a>
  return <button className={base} {...props}>{content}</button>
}
