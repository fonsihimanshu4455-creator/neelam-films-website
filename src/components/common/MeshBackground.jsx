/**
 * Global living gradient mesh — fixed behind all content so the whole site
 * has subtle, ever-shifting colour and depth instead of flat white.
 */
export default function MeshBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* soft base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#eef5ff] to-[#e7f1ff]" />

      {/* animated colour blobs */}
      <div className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-primary-400/30 blur-[130px] animate-aurora" />
      <div className="absolute right-[-12rem] top-[18%] h-[36rem] w-[36rem] rounded-full bg-cyan-300/35 blur-[130px] animate-aurora [animation-delay:-6s]" />
      <div className="absolute left-[28%] top-[45%] h-[34rem] w-[34rem] rounded-full bg-indigo-300/25 blur-[140px] animate-aurora [animation-delay:-10s]" />
      <div className="absolute bottom-[-12rem] right-[22%] h-[40rem] w-[40rem] rounded-full bg-sky-400/30 blur-[130px] animate-aurora [animation-delay:-14s]" />

      {/* faint dot grid for texture */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(rgba(15,23,42,0.06) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 100% 100% at 50% 0%, #000 40%, transparent 90%)',
        }}
      />
    </div>
  )
}
