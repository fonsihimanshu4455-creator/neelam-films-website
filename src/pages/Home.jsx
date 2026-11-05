import Seo from '../components/common/Seo'
import Hero from '../components/home/Hero'
import ServicesGrid from '../components/home/ServicesGrid'
import ParallaxBanner from '../components/home/ParallaxBanner'
import Statement from '../components/home/Statement'
import ClientsMarquee from '../components/home/ClientsMarquee'
import Testimonials from '../components/home/Testimonials'
import ProcessSteps from '../components/home/ProcessSteps'
import Stats from '../components/home/Stats'
import CTASection from '../components/common/CTASection'
import Marquee from '../components/common/Marquee'

const WORDS = ['Production', 'Live Events', 'Streaming', 'Recording', 'Equipment', 'Websites', 'Apps', 'Digital Growth']

export default function Home() {
  return (
    <>
      <Seo
        title="Neelam Films — Production House & Live Event Company in Delhi Since 1995"
        description="Delhi's trusted production house & live-event specialists for 30+ years. Film production, event coverage, live streaming, recording studio & camera rental. Get a free quote."
        path="/"
      />
      <Hero />
      <ClientsMarquee />
      <ServicesGrid />

      {/* Kinetic outline marquee divider */}
      <div className="overflow-hidden border-y border-cream-300 bg-cream-100 py-8">
        <Marquee items={WORDS} outline />
      </div>

      <Stats />
      <ProcessSteps />
      <Statement />
      <ParallaxBanner />
      <Testimonials />
      <CTASection />
    </>
  )
}
