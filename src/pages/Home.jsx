import Hero from '../components/home/Hero'
import ServicesGrid from '../components/home/ServicesGrid'
import ParallaxBanner from '../components/home/ParallaxBanner'
import Statement from '../components/home/Statement'
import ClientsMarquee from '../components/home/ClientsMarquee'
import FeaturedPortfolio from '../components/home/FeaturedPortfolio'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/common/CTASection'
import Marquee from '../components/common/Marquee'
import Stats from '../components/home/Stats'

const WORDS = ['Production', 'Live Events', 'Streaming', 'Recording', 'Equipment', 'Websites', 'Apps', 'Digital Growth']

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <Stats />
      <ServicesGrid />

      {/* Kinetic divider */}
      <div className="overflow-hidden bg-gradient-to-r from-primary-700 via-primary-500 to-primary-700 py-6">
        <Marquee items={WORDS} white />
      </div>

      <Statement />
      <FeaturedPortfolio />
      <ParallaxBanner />
      <Testimonials />
      <CTASection />
    </>
  )
}
