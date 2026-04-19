import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import StatsSection from '@/components/sections/StatsSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main className="bg-digimax-dark">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
