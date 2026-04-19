import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import AboutSection from '@/components/sections/AboutSection'
import MissionSection from '@/components/sections/MissionSection'

export const metadata = {
  title: 'About DigiMax - Digital Marketing Agency',
  description: 'Learn about DigiMax, our mission, values, and the team behind the digital transformation.',
}

export default function AboutPage() {
  return (
    <main className="bg-digimax-dark">
      <Header />
      <PageHeader
        title="About DigiMax"
        subtitle="Your partner in digital transformation"
      />
      <AboutSection />
      <MissionSection />
      <Footer />
    </main>
  )
}
