/**
 * Warm paper background with soft amber glows & a fine grid —
 * editorial / film-poster feel, fixed behind all content.
 */
export default function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* warm base */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200" />

      {/* soft warm glows (animation only on larger screens for mobile perf) */}
      <div className="absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-primary-300/25 blur-[80px] md:blur-[140px] md:animate-aurora" />
      <div className="absolute right-[-12rem] top-[22%] h-[34rem] w-[34rem] rounded-full bg-amber-300/25 blur-[80px] md:blur-[140px] md:animate-aurora md:[animation-delay:-7s]" />
      <div className="absolute bottom-[-12rem] left-[26%] h-[38rem] w-[38rem] rounded-full bg-primary-200/30 blur-[80px] md:blur-[150px] md:animate-aurora md:[animation-delay:-13s]" />

      {/* fine editorial grid lines */}
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(28,23,20,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(28,23,20,0.05) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 100% 90% at 50% 0%, #000 50%, transparent 95%)',
        }}
      />
    </div>
  )
}
