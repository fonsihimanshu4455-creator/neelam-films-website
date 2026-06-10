import Reveal from '../common/Reveal'

/**
 * The house, in plain words — set like a director's note in the margin.
 */
export default function Statement() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <div className="rule-heavy pt-3">
            <span className="doc-label text-primary-600">Scene 02 — The house</span>
          </div>
        </Reveal>
        <div className="md:col-span-9 md:col-start-5">
          <Reveal delay={0.08}>
            <p className="font-serif text-2xl leading-snug text-ink-950 sm:text-3xl lg:text-[2.6rem] lg:leading-[1.25]">
              Neelam Films is a production house in Pandav Nagar, Delhi. We've been at it since
              1995 — TVCs, corporate films, jagrans, cricket streams, recording sessions,
              full-scale stage shows.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl border-l-2 border-primary-500 pl-5 text-base leading-relaxed text-ink-600">
              Most of our work comes from people who've worked with us before. That's been the
              only marketing we've ever needed.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
