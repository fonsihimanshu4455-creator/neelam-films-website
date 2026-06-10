import { Link } from 'react-router-dom'
import Magnetic from './Magnetic'

/**
 * Luxe editorial button: square edges, uppercase, sliding fill on hover.
 * Variants: primary | outline | white | ghost | dark
 */
const VARIANTS = {
  primary: 'text-ink-950 bg-primary-500 before:bg-cream-50 hover:text-ink-950',
  outline: 'text-cream-50 border border-cream-50/30 before:bg-primary-500 hover:text-ink-950 hover:border-primary-500',
  white: 'text-ink-950 bg-cream-50 before:bg-primary-500 hover:text-ink-950',
  ghost: 'text-primary-400 border border-primary-500/40 before:bg-primary-500 hover:text-ink-950',
  dark: 'text-cream-50 bg-ink-800 before:bg-primary-500 hover:text-ink-950',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  magnetic = true,
  ...props
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden px-7 py-3.5 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-500 ' +
    'before:absolute before:inset-0 before:-z-0 before:origin-bottom before:scale-y-0 before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.65,0,0.35,1)] hover:before:scale-y-100 ' +
    (VARIANTS[variant] || VARIANTS.primary) +
    ' ' +
    className

  const content = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>

  let el
  if (to) {
    el = <Link to={to} className={base} {...props}>{content}</Link>
  } else if (href) {
    el = <a href={href} target="_blank" rel="noopener noreferrer" className={base} {...props}>{content}</a>
  } else {
    el = <button className={base} {...props}>{content}</button>
  }

  return magnetic ? <Magnetic strength={0.2}>{el}</Magnetic> : el
}
