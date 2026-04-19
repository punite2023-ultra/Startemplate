import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import TeamSection from '@/components/sections/TeamSection'

export const metadata = {
  title: 'Our Team - DigiMax Digital Marketing',
  description: 'Meet the talented professionals behind DigiMax.',
}

export default function TeamPage() {
  return (
    <main className="bg-digimax-dark">
      <Header />
      <PageHeader
        title="Meet Our Team"
        subtitle="Talented professionals dedicated to your success"
      />
      <TeamSection />
      <Footer />
    </main>
  )
}
