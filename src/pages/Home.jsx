import Hero from '../components/home/Hero'
import ServicesGrid from '../components/home/ServicesGrid'
import ParallaxBanner from '../components/home/ParallaxBanner'
import Statement from '../components/home/Statement'
import ClientsMarquee from '../components/home/ClientsMarquee'
import FeaturedPortfolio from '../components/home/FeaturedPortfolio'
import CTASection from '../components/common/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ParallaxBanner />
      <Statement />
      <FeaturedPortfolio />
      <ClientsMarquee />
      <CTASection />
    </>
  )
}
