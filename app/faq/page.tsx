import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import FAQSection from '@/components/sections/FAQSection'

export const metadata = {
  title: 'FAQ - DigiMax Digital Marketing',
  description: 'Find answers to common questions about our services and pricing.',
}

export default function FAQPage() {
  return (
    <main className="bg-digimax-dark">
      <Header />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
      />
      <FAQSection />
      <Footer />
    </main>
  )
}
