/**
 * Noir backdrop: deep warm black with faint champagne glows & a fine grid —
 * cinematic luxe feel, fixed behind all content.
 */
export default function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* noir base */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />

      {/* faint gold ambience (animation only on larger screens for mobile perf) */}
      <div className="absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-primary-500/[0.07] blur-[80px] md:blur-[140px] md:animate-aurora" />
      <div className="absolute right-[-12rem] top-[24%] h-[34rem] w-[34rem] rounded-full bg-primary-400/[0.05] blur-[80px] md:blur-[140px] md:animate-aurora md:[animation-delay:-7s]" />
      <div className="absolute bottom-[-12rem] left-[26%] h-[38rem] w-[38rem] rounded-full bg-primary-600/[0.06] blur-[80px] md:blur-[150px] md:animate-aurora md:[animation-delay:-13s]" />

      {/* fine editorial grid lines */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(246,241,230,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(246,241,230,0.025) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 100% 90% at 50% 0%, #000 50%, transparent 95%)',
        }}
      />
    </div>
  )
}
