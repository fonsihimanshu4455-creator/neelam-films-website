import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import Statement from '../components/home/Statement'
import ServicesGrid from '../components/home/ServicesGrid'
import ClientsMarquee from '../components/home/ClientsMarquee'
import FeaturedPortfolio from '../components/home/FeaturedPortfolio'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/common/CTASection'
import Marquee from '../components/common/Marquee'

const WORDS = ['Production', 'Live Events', 'Streaming', 'Recording', 'Equipment', 'Digital Growth']

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Statement />

      {/* Kinetic divider */}
      <div className="overflow-hidden border-y border-white/10 bg-ink-900/40 py-6">
        <Marquee items={WORDS} outline />
      </div>

      <ServicesGrid />
      <ClientsMarquee />
      <FeaturedPortfolio />
      <Testimonials />
      <CTASection />
    </>
  )
}
