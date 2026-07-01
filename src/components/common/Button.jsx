import { Link } from 'react-router-dom'
import Magnetic from './Magnetic'

/**
 * Brand pill button.
 * Variants: primary (burgundy) | gold | outline | white | ghost | dark
 */
const VARIANTS = {
  primary: 'text-white bg-burgundy-grad hover:brightness-110 shadow-soft',
  gold: 'text-ink-900 bg-gold-grad hover:brightness-105 shadow-glow',
  outline: 'text-primary-700 border border-primary-700/40 hover:bg-primary-700 hover:text-white',
  white: 'text-primary-700 bg-white hover:bg-cream-100 shadow-soft',
  ghost: 'text-ink-900 border border-cream-300 hover:border-primary-700 hover:text-primary-700',
  dark: 'text-white bg-white/10 border border-white/15 hover:bg-gold-grad hover:text-ink-900',
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
    'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 ' +
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
