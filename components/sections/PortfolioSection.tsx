'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: 'E-Commerce Platform Growth',
      category: 'seo',
      image: '🛍️',
      description: 'Increased organic traffic by 450% and sales by 320% through comprehensive SEO strategy.',
      result: '+450% Traffic',
    },
    {
      title: 'Social Media Campaign',
      category: 'social',
      image: '📱',
      description: 'Built engaged community of 250K followers with strategic content marketing.',
      result: '250K Followers',
    },
    {
      title: 'Brand Identity Design',
      category: 'design',
      image: '🎨',
      description: 'Complete rebranding including logo, color palette, and marketing materials.',
      result: 'Award Winning',
    },
    {
      title: 'Website Redesign & Development',
      category: 'web',
      image: '💻',
      description: 'Modern, responsive website with improved UX resulting in 180% increase in conversions.',
      result: '+180% Conversions',
    },
    {
      title: 'PPC Campaign Optimization',
      category: 'ads',
      image: '📊',
      description: 'Managed $500K+ in ad spend with 3.2x ROI through strategic optimization.',
      result: '3.2x ROI',
    },
    {
      title: 'Content Marketing Strategy',
      category: 'content',
      image: '📝',
      description: 'Created 100+ pieces of SEO content generating 50K monthly organic visitors.',
      result: '50K Monthly Visits',
    },
    {
      title: 'Video Marketing Campaign',
      category: 'video',
      image: '🎬',
      description: 'Produced 30+ videos with 2M+ combined views and strong engagement.',
      result: '2M+ Views',
    },
    {
      title: 'Email Marketing Automation',
      category: 'email',
      image: '✉️',
      description: 'Built automated email funnels increasing customer lifetime value by 95%.',
      result: '+95% LTV',
    },
  ]

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'SEO', value: 'seo' },
    { name: 'Social Media', value: 'social' },
    { name: 'Design', value: 'design' },
    { name: 'Web Design', value: 'web' },
    { name: 'Paid Ads', value: 'ads' },
    { name: 'Content', value: 'content' },
  ]

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="section-padding bg-gradient-to-b from-digimax-dark to-digimax-light-bg relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-digimax-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-digimax-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-outfit font-semibold transition-all duration-300 ${
                filter === cat.value
                  ? 'bg-gradient-digimax-1 text-white shadow-lg shadow-digimax-purple/50'
                  : 'bg-white/5 border border-white/10 text-digimax-text-secondary hover:border-digimax-purple/50'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card-glass flex flex-col group cursor-pointer"
            >
              {/* Project Image */}
              <div className="w-full aspect-video rounded-digimax bg-gradient-to-br from-digimax-purple/20 to-digimax-pink/20 flex items-center justify-center text-6xl mb-6 group-hover:scale-105 transition-transform duration-300">
                {project.image}
              </div>

              {/* Content */}
              <h3 className="font-outfit font-semibold text-lg mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-sm text-digimax-text-secondary mb-4 flex-grow">
                {project.description}
              </p>

              {/* Result Badge */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-sm font-semibold text-digimax-purple">
                  {project.result}
                </span>
                <FaExternalLinkAlt className="text-digimax-text-secondary group-hover:text-digimax-purple transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection
