/**
 * Soft ambient blue glow blobs for light backgrounds.
 * Drop inside a `relative overflow-hidden` container.
 */
export default function Aurora({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -left-32 top-0 h-[36rem] w-[36rem] rounded-full bg-primary-700/25 blur-[120px] animate-aurora" />
      <div className="absolute -right-24 top-1/3 h-[30rem] w-[30rem] rounded-full bg-gold-500/20 blur-[120px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-primary-700/30 blur-[120px] animate-aurora [animation-delay:-12s]" />
    </div>
  )
}
