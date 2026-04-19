import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ServicesGridSection from '@/components/sections/ServicesGridSection'

export const metadata = {
  title: 'Our Services - DigiMax Digital Marketing',
  description: 'Explore our comprehensive digital marketing services designed to grow your business.',
}

export default function ServicesPage() {
  return (
    <main className="bg-digimax-dark">
      <Header />
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive digital marketing solutions tailored to your needs"
      />
      <ServicesGridSection />
      <Footer />
    </main>
  )
}
