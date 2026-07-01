/**
 * Cinematic dark base fixed behind all content: near-black with soft blue
 * light pools and a faint grid. Individual sections layer their own tone on top.
 */
export default function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* deep base */}
      <div className="absolute inset-0 bg-[#08090f]" />

      {/* blue light pools */}
      <div className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-primary-600/20 blur-[130px] md:animate-aurora" />
      <div className="absolute right-[-14rem] top-[24%] h-[36rem] w-[36rem] rounded-full bg-primary-500/12 blur-[140px] md:animate-aurora md:[animation-delay:-8s]" />
      <div className="absolute bottom-[-16rem] left-[28%] h-[40rem] w-[40rem] rounded-full bg-primary-700/18 blur-[150px] md:animate-aurora md:[animation-delay:-14s]" />

      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 0%, #000 40%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 0%, #000 40%, transparent 90%)',
        }}
      />
      {/* top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
    </div>
  )
}
