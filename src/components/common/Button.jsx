import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Reusable button. Renders as a Link (internal), <a> (external) or <button>.
 * Variants: primary | outline | white | dark
 */
const VARIANTS = {
  primary:
    'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/30',
  outline:
    'border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white',
  white: 'bg-white text-dark-900 hover:bg-primary-50',
  dark: 'bg-dark-900 text-white hover:bg-dark-800',
  ghost: 'text-white border-2 border-white/40 hover:bg-white/10',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 ' +
    (VARIANTS[variant] || VARIANTS.primary) +
    ' ' +
    className

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.97 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={base} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={base}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button className={base} {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}
