import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ContactSection from '@/components/sections/ContactSection'

export const metadata = {
  title: 'Contact Us - DigiMax Digital Marketing',
  description: 'Get in touch with our team. We&apos;re ready to help your business grow.',
}

export default function ContactPage() {
  return (
    <main className="bg-digimax-dark">
      <Header />
      <PageHeader
        title="Get In Touch"
        subtitle="Ready to transform your digital presence? Let&apos;s talk."
      />
      <ContactSection />
      <Footer />
    </main>
  )
}
