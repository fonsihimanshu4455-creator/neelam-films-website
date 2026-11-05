import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronDown, Calendar, Clock } from 'lucide-react'
import { useData } from '../context/DataContext'
import Seo from '../components/common/Seo'
import PageHero from '../components/common/PageHero'
import Button from '../components/common/Button'
import CTASection from '../components/common/CTASection'

const SITE = 'https://www.neelamfilms.com'

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch {
    return d
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const { data } = useData()
  const posts = data.blog || []
  const post = posts.find((p) => p.slug === slug)
  const [openFaq, setOpenFaq] = useState(0)

  if (!post) return <Navigate to="/blog" replace />

  const service = (data.services || []).find((s) => s.slug === post.service)
  const faqs = post.faqs || []

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      image: post.image ? SITE + post.image : undefined,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@type': 'Organization', name: 'Neelam Films' },
      publisher: {
        '@type': 'Organization',
        name: 'Neelam Films',
        logo: { '@type': 'ImageObject', url: SITE + '/logo.png' },
      },
      description: post.seoDescription || post.excerpt,
      mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    },
  ]
  if (faqs.length) {
    schema.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  return (
    <>
      <Seo
        title={post.seoTitle || `${post.title} | Neelam Films`}
        description={post.seoDescription || post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image ? SITE + post.image : undefined}
        schema={schema}
      />

      <PageHero eyebrow={post.category} title={post.title} image={post.image}>
        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-200">
          <span className="inline-flex items-center gap-1.5"><Calendar size={15} /> {formatDate(post.date)}</span>
          <span className="inline-flex items-center gap-1.5"><Clock size={15} /> {post.readTime}</span>
        </div>
      </PageHero>

      <article className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Link to="/blog" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-700 transition hover:text-primary-700">
            <ArrowLeft size={16} /> All articles
          </Link>

          <div className="space-y-5">
            {post.body.map((block, i) => {
              if (block.type === 'h2')
                return <h2 key={i} className="pt-6 font-display text-2xl font-bold text-primary-700 md:text-3xl">{block.text}</h2>
              if (block.type === 'ul')
                return (
                  <ul key={i} className="space-y-2.5 pl-1">
                    {block.items.map((it, j) => (
                      <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-ink-800">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )
              return <p key={i} className="text-[15px] leading-relaxed text-ink-800 md:text-base">{block.text}</p>
            })}
          </div>

          {/* Service CTA */}
          {service && (
            <div className="mt-12 rounded-3xl border border-cream-300 bg-cream-100 p-7 text-center md:p-9">
              <h3 className="font-display text-xl font-bold text-primary-700">Ready to get started?</h3>
              <p className="mx-auto mt-2 max-w-md text-sm text-ink-700">
                Explore our {service.title} services or get a free, no-obligation quote today.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button to={`/contact?service=${encodeURIComponent(service.title)}`}>
                  Get a free quote <ArrowRight size={18} />
                </Button>
                <Button to={service.slug} variant="outline">
                  View {service.title}
                </Button>
              </div>
            </div>
          )}

          {/* FAQ */}
          {faqs.length > 0 && (
            <div className="mt-14">
              <h2 className="mb-6 font-display text-2xl font-bold text-primary-700">Frequently asked questions</h2>
              <div className="space-y-3">
                {faqs.map((f, i) => {
                  const isOpen = openFaq === i
                  return (
                    <div key={i} className={`overflow-hidden rounded-2xl border ${isOpen ? 'border-gold-400/60' : 'border-cream-300'} bg-cream-100`}>
                      <button onClick={() => setOpenFaq(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                        <span className="font-heading text-base font-semibold text-primary-700">{f.q}</span>
                        <ChevronDown size={20} className={`shrink-0 text-gold-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                            <p className="px-6 pb-5 text-sm leading-relaxed text-ink-700">{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </article>

      <CTASection title="Have a project in mind?" />
    </>
  )
}
