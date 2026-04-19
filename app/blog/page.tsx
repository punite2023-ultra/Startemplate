import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import BlogSection from '@/components/sections/BlogSection'

export const metadata = {
  title: 'Blog - DigiMax Digital Marketing',
  description: 'Read our latest articles on digital marketing trends, tips, and strategies.',
}

export default function BlogPage() {
  return (
    <main className="bg-digimax-dark">
      <Header />
      <PageHeader
        title="Latest from Our Blog"
        subtitle="Stay updated with digital marketing trends and best practices"
      />
      <BlogSection />
      <Footer />
    </main>
  )
}
