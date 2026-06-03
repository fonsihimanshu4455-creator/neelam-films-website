import Hero from '../components/home/Hero'
import Stats from '../components/home/Stats'
import ServicesGrid from '../components/home/ServicesGrid'
import ClientsMarquee from '../components/home/ClientsMarquee'
import FeaturedPortfolio from '../components/home/FeaturedPortfolio'
import Testimonials from '../components/home/Testimonials'
import CTASection from '../components/common/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <ClientsMarquee />
      <FeaturedPortfolio />
      <Testimonials />
      <CTASection />
    </>
  )
}
