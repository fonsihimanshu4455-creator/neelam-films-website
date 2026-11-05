import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useData } from '../context/DataContext'
import Seo from '../components/common/Seo'
import PageHero from '../components/common/PageHero'

export default function Blog() {
  const { data } = useData()
  const posts = data.blog || []

  return (
    <>
      <Seo
        title="Blog — Production, Live Events & Podcast Tips | Neelam Films Delhi"
        description="Guides & tips from Neelam Films, Delhi — wedding videography costs, podcast recording, camera rental rates, live events and more. Learn before you book."
        path="/blog"
      />
      <PageHero
        eyebrow="Blog"
        title="Guides, tips & costs"
        subtitle="Honest guides on production, live events, podcasts & equipment rental in Delhi — so you know exactly what to expect before you book."
        image="/services/production.jpg?v=2"
      />

      <section className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          {posts.length === 0 ? (
            <p className="text-center text-ink-700">New articles coming soon.</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-cream-300 bg-cream-100 transition duration-500 hover:border-gold-400/50 hover:shadow-soft"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        onError={(ev) => { ev.currentTarget.style.display = 'none' }}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-ink-950/70 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold-300 backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-ink-600">
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="mt-2 font-display text-xl font-bold leading-snug text-primary-700 transition group-hover:text-gold-500">
                        {post.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-700">{post.excerpt}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-ink-700 transition group-hover:text-gold-500">
                        Read article <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
