import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import Statement from '../components/home/Statement'
import ServicesGrid from '../components/home/ServicesGrid'
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
      <Stats />
      <Statement />

      {/* Kinetic divider */}
      <div className="overflow-hidden bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 py-6">
        <Marquee items={WORDS} white />
      </div>

      <ServicesGrid />
      <ClientsMarquee />
      <FeaturedPortfolio />
      <Testimonials />
      <CTASection />
    </>
  )
}
