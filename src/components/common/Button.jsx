import { Link } from 'react-router-dom'
import Magnetic from './Magnetic'

/**
 * Cinematic pill button: uppercase, sliding fill + blue glow on hover.
 * Variants: primary | outline | white | ghost | dark
 */
const VARIANTS = {
  primary: 'text-white bg-primary-500 before:bg-white hover:text-ink-950 shadow-glow',
  outline: 'text-white border border-white/25 before:bg-primary-500 hover:text-white hover:border-primary-500',
  white: 'text-ink-950 bg-white before:bg-primary-500 hover:text-white',
  ghost: 'text-white border border-white/20 before:bg-white/10 hover:text-white',
  dark: 'text-white bg-white/5 border border-white/10 before:bg-primary-500 hover:text-white',
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
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] transition-all duration-500 ' +
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
