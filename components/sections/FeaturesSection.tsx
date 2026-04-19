'use client'

import { motion } from 'framer-motion'
import {
  FaRocket,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaChartLine,
  FaHeadset,
} from 'react-icons/fa'

const FeaturesSection = () => {
  const features = [
    {
      icon: FaRocket,
      title: 'Fast Results',
      description: 'See measurable improvements in your marketing metrics within the first month.',
    },
    {
      icon: FaShieldAlt,
      title: 'Data Security',
      description: 'Your data is protected with enterprise-grade security measures.',
    },
    {
      icon: FaClock,
      title: '24/7 Support',
      description: 'Our dedicated support team is always available to help you succeed.',
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Work with certified digital marketing professionals with years of experience.',
    },
    {
      icon: FaChartLine,
      title: 'Custom Strategy',
      description: 'Tailored marketing strategies designed specifically for your business goals.',
    },
    {
      icon: FaHeadset,
      title: 'Full Transparency',
      description: 'Regular reports and open communication throughout your campaign.',
    },
  ]

  return (
    <section className="section-padding bg-digimax-dark relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-digimax-pink/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-digimax-orange/50 mb-6">
            <span className="text-sm font-outfit font-semibold text-digimax-orange">
              WHY CHOOSE US
            </span>
          </div>
          <h2 className="mb-4">Why DigiMax Stands Out</h2>
          <p className="text-digimax-text-secondary text-lg max-w-2xl mx-auto">
            We combine cutting-edge technology with creative expertise to deliver marketing solutions that actually work.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="card-glass"
              >
                <div className="w-14 h-14 rounded-digimax bg-gradient-to-br from-digimax-purple/30 to-digimax-pink/20 flex items-center justify-center mb-4">
                  <Icon className="text-2xl text-digimax-purple" />
                </div>
                <h3 className="text-lg font-outfit font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-digimax-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
