'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: 'The Ultimate Guide to SEO in 2024',
      excerpt:
        'Learn the latest SEO strategies and best practices to rank higher and drive more organic traffic to your website.',
      author: 'Sarah Williams',
      date: 'Jan 15, 2024',
      category: 'SEO',
      image: '📊',
      readTime: '8 min read',
    },
    {
      id: 2,
      title: 'Social Media Trends Every Marketer Should Know',
      excerpt:
        'Discover the hottest social media trends that are reshaping how brands connect with their audience in 2024.',
      author: 'Mike Davis',
      date: 'Jan 12, 2024',
      category: 'Social Media',
      image: '📱',
      readTime: '6 min read',
    },
    {
      id: 3,
      title: 'Content Marketing Strategy That Actually Works',
      excerpt:
        'A comprehensive guide to creating content that engages your audience and drives meaningful business results.',
      author: 'Lisa Anderson',
      date: 'Jan 10, 2024',
      category: 'Content',
      image: '✍️',
      readTime: '10 min read',
    },
    {
      id: 4,
      title: 'Paid Advertising ROI: How to Get More From Your Budget',
      excerpt:
        'Maximize your advertising spend with our proven strategies for optimizing PPC campaigns and improving ROI.',
      author: 'James Chen',
      date: 'Jan 8, 2024',
      category: 'Advertising',
      image: '💰',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'The Future of Video Marketing',
      excerpt:
        'Explore how video content is transforming the marketing landscape and how to leverage it for your brand.',
      author: 'Emma Taylor',
      date: 'Jan 5, 2024',
      category: 'Video',
      image: '🎬',
      readTime: '9 min read',
    },
    {
      id: 6,
      title: 'Email Marketing Best Practices for 2024',
      excerpt:
        'Discover the latest email marketing tactics to improve open rates, click-through rates, and conversions.',
      author: 'Rachel Green',
      date: 'Dec 28, 2023',
      category: 'Email',
      image: '📧',
      readTime: '6 min read',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-padding bg-gradient-to-b from-digimax-dark to-digimax-light-bg relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-digimax-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-digimax-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card-glass flex flex-col group overflow-hidden"
            >
              {/* Featured Image */}
              <div className="w-full h-48 rounded-digimax bg-gradient-to-br from-digimax-purple/20 to-digimax-pink/20 flex items-center justify-center text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {post.image}
              </div>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-digimax-purple bg-digimax-purple/20 border border-digimax-purple/30">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-outfit font-semibold mb-3 text-white group-hover:text-digimax-purple transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-digimax-text-secondary leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4 text-sm text-digimax-text-secondary">
                  <div className="flex items-center gap-2">
                    <FaCalendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser size={14} />
                    {post.author}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-digimax-text-secondary">
                    {post.readTime}
                  </span>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-digimax-purple hover:text-digimax-pink transition-colors font-semibold group-hover:translate-x-2 transition-transform"
                  >
                    Read More
                    <FaArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="btn-secondary">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
