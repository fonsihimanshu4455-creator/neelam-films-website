import Hero from '../components/home/Hero'
import ServicesGrid from '../components/home/ServicesGrid'
import ParallaxBanner from '../components/home/ParallaxBanner'
import Statement from '../components/home/Statement'
import ClientsMarquee from '../components/home/ClientsMarquee'
import FeaturedPortfolio from '../components/home/FeaturedPortfolio'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/common/CTASection'
import Marquee from '../components/common/Marquee'

const WORDS = ['Production', 'Live Events', 'Streaming', 'Recording', 'Equipment', 'Websites', 'Apps', 'Digital Growth']

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />

      {/* Kinetic divider */}
      <div className="overflow-hidden border-y border-cream-50/10 bg-ink-900 py-6">
        <Marquee items={WORDS} outline />
      </div>

      <ParallaxBanner />
      <Statement />
      <FeaturedPortfolio />
      <ClientsMarquee />
      <Testimonials />
      <CTASection />
    </>
  )
}
