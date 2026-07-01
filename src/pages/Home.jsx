import Hero from '../components/home/Hero'
import ServicesGrid from '../components/home/ServicesGrid'
import ParallaxBanner from '../components/home/ParallaxBanner'
import Statement from '../components/home/Statement'
import ClientsMarquee from '../components/home/ClientsMarquee'
import FeaturedPortfolio from '../components/home/FeaturedPortfolio'
import Testimonials from '../components/home/Testimonials'
import ProcessSteps from '../components/home/ProcessSteps'
import Stats from '../components/home/Stats'
import CTASection from '../components/common/CTASection'
import Marquee from '../components/common/Marquee'

const WORDS = ['Production', 'Live Events', 'Streaming', 'Recording', 'Equipment', 'Websites', 'Apps', 'Digital Growth']

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsMarquee />
      <ServicesGrid />

      {/* Kinetic outline marquee divider */}
      <div className="overflow-hidden border-y border-white/10 bg-white/[0.015] py-8">
        <Marquee items={WORDS} outline />
      </div>

      <Stats />
      <ProcessSteps />
      <FeaturedPortfolio />
      <Statement />
      <ParallaxBanner />
      <Testimonials />
      <CTASection />
    </>
  )
}
