import Reveal from '../common/Reveal'

/**
 * Plain, honest house statement.
 */
export default function Statement() {
  return (
    <section className="relative mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary-400">
          The house
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-8 font-serif text-3xl italic leading-snug text-cream-100 sm:text-4xl lg:text-5xl lg:leading-[1.25]">
          Neelam Films is a production house in Pandav Nagar, Delhi. We've been at it since 1995 —
          TVCs, corporate films, jagrans, cricket streams, recording sessions, full-scale stage
          shows.
        </p>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-cream-300 md:text-lg">
          Most of our work comes from people who've worked with us before. That's been the only
          marketing we've ever needed.
        </p>
      </Reveal>
    </section>
  )
}
