/**
 * Warm ivory "studio paper" base fixed behind all content. Individual
 * sections layer their own tone (navy / cream / pattern) on top of this,
 * so the page reads as a sequence of distinct bands rather than one flat white.
 */
export default function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* warm ivory base */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-cream-100 to-cream-200" />

      {/* soft ambient glows — one blue (brand), one warm (paper warmth) */}
      <div className="absolute -left-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-primary-300/20 blur-[80px] md:blur-[150px] md:animate-aurora" />
      <div className="absolute right-[-12rem] top-[20%] h-[34rem] w-[34rem] rounded-full bg-gold-300/25 blur-[80px] md:blur-[150px] md:animate-aurora md:[animation-delay:-8s]" />
      <div className="absolute bottom-[-14rem] left-[24%] h-[38rem] w-[38rem] rounded-full bg-primary-200/20 blur-[80px] md:blur-[160px] md:animate-aurora md:[animation-delay:-14s]" />
    </div>
  )
}
