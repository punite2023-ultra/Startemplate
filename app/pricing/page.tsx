import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import PricingSection from '@/components/sections/PricingSection'

export const metadata = {
  title: 'Pricing Plans - DigiMax Digital Marketing',
  description: 'Flexible pricing plans tailored to businesses of all sizes.',
}

export default function PricingPage() {
  return (
    <main className="bg-digimax-dark">
      <Header />
      <PageHeader
        title="Transparent Pricing"
        subtitle="Plans designed to fit every budget and business size"
      />
      <PricingSection />
      <Footer />
    </main>
  )
}
