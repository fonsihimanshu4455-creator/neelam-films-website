import Hero from '../components/home/Hero'
import ServicesGrid from '../components/home/ServicesGrid'
import Statement from '../components/home/Statement'
import ParallaxBanner from '../components/home/ParallaxBanner'
import FeaturedPortfolio from '../components/home/FeaturedPortfolio'
import ClientsMarquee from '../components/home/ClientsMarquee'
import CTASection from '../components/common/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <Statement />
      <ParallaxBanner />
      <FeaturedPortfolio />
      <ClientsMarquee />
      <CTASection />
    </>
  )
}
