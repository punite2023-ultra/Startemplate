import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import PortfolioSection from '@/components/sections/PortfolioSection'

export const metadata = {
  title: 'Portfolio - DigiMax Digital Marketing',
  description: 'Explore our latest projects and see how we&apos;ve helped businesses succeed.',
}

export default function PortfolioPage() {
  return (
    <main className="bg-digimax-dark">
      <Header />
      <PageHeader
        title="Our Portfolio"
        subtitle="Showcasing our best work and client success stories"
      />
      <PortfolioSection />
      <Footer />
    </main>
  )
}
