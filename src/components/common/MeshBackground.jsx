/**
 * Cool white "studio paper" background with soft blue glows, a drifting
 * geometric diamond line-art pattern (brand reference art) and a fine grid —
 * fixed behind all content.
 */
export default function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* cool paper base */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200" />

      {/* soft blue glows (animation only on larger screens for mobile perf) */}
      <div className="absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-primary-300/30 blur-[80px] md:blur-[140px] md:animate-aurora" />
      <div className="absolute right-[-12rem] top-[22%] h-[34rem] w-[34rem] rounded-full bg-sky-300/25 blur-[80px] md:blur-[140px] md:animate-aurora md:[animation-delay:-7s]" />
      <div className="absolute bottom-[-12rem] left-[26%] h-[38rem] w-[38rem] rounded-full bg-primary-200/35 blur-[80px] md:blur-[150px] md:animate-aurora md:[animation-delay:-13s]" />

      {/* geometric diamond line-art (drifts slowly) */}
      <div
        className="absolute inset-0 opacity-[0.5] md:animate-pattern-drift"
        style={{
          backgroundImage:
            'linear-gradient(45deg, rgba(43,144,232,0.10) 1px, transparent 1px), linear-gradient(-45deg, rgba(43,144,232,0.10) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 110% 80% at 50% 10%, #000 45%, transparent 92%)',
          WebkitMaskImage: 'radial-gradient(ellipse 110% 80% at 50% 10%, #000 45%, transparent 92%)',
        }}
      />

      {/* fine editorial grid lines */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(13,27,46,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(13,27,46,0.045) 1px, transparent 1px)',
          backgroundSize: '90px 90px',
          maskImage: 'radial-gradient(ellipse 100% 90% at 50% 0%, #000 50%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse 100% 90% at 50% 0%, #000 50%, transparent 95%)',
        }}
      />
    </div>
  )
}
