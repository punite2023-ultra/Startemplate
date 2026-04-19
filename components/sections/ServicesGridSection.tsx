'use client'

import { motion } from 'framer-motion'
import {
  FaSearch,
  FaShareAlt,
  FaPencilAlt,
  FaLaptop,
  FaChartLine,
  FaEnvelope,
  FaMegaphone,
  FaVideo,
  FaCameraRetro,
} from 'react-icons/fa'

const ServicesGridSection = () => {
  const services = [
    {
      icon: FaSearch,
      title: 'SEO Optimization',
      description:
        'Boost your search engine rankings with our proven SEO strategies. We focus on both technical SEO and content optimization to drive organic traffic.',
      color: 'from-digimax-purple/20 to-digimax-purple/10',
      accentColor: 'text-digimax-purple',
    },
    {
      icon: FaShareAlt,
      title: 'Social Media Marketing',
      description:
        'Engage your audience across all platforms. From content strategy to community management, we handle it all.',
      color: 'from-digimax-pink/20 to-digimax-pink/10',
      accentColor: 'text-digimax-pink',
    },
    {
      icon: FaPencilAlt,
      title: 'Content Writing',
      description:
        'Compelling, SEO-optimized content that resonates with your audience and drives conversions.',
      color: 'from-digimax-orange/20 to-digimax-orange/10',
      accentColor: 'text-digimax-orange',
    },
    {
      icon: FaLaptop,
      title: 'Web Design & Development',
      description:
        'Beautiful, responsive websites optimized for conversions. We build digital experiences that engage and convert.',
      color: 'from-digimax-purple/20 to-digimax-pink/10',
      accentColor: 'text-digimax-purple',
    },
    {
      icon: FaChartLine,
      title: 'Analytics & Reporting',
      description:
        'Data-driven insights to measure performance. We provide detailed reports and actionable recommendations.',
      color: 'from-digimax-pink/20 to-digimax-orange/10',
      accentColor: 'text-digimax-pink',
    },
    {
      icon: FaEnvelope,
      title: 'Email Marketing',
      description:
        'Effective email campaigns that nurture leads and maximize customer lifetime value through personalization.',
      color: 'from-digimax-orange/20 to-digimax-purple/10',
      accentColor: 'text-digimax-orange',
    },
    {
      icon: FaMegaphone,
      title: 'Paid Advertising',
      description:
        'Strategic PPC campaigns on Google, Facebook, and Instagram. We maximize ROI through targeted advertising.',
      color: 'from-digimax-purple/20 to-digimax-orange/10',
      accentColor: 'text-digimax-purple',
    },
    {
      icon: FaVideo,
      title: 'Video Marketing',
      description:
        'Engaging video content that tells your brand story. From concept to production and distribution.',
      color: 'from-digimax-pink/20 to-digimax-purple/10',
      accentColor: 'text-digimax-pink',
    },
    {
      icon: FaCameraRetro,
      title: 'Graphic Design',
      description:
        'Eye-catching designs that make your brand stand out. From logos to marketing collateral, we create visual excellence.',
      color: 'from-digimax-orange/20 to-digimax-pink/10',
      accentColor: 'text-digimax-orange',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
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
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-digimax-purple/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="card-glass group"
              >
                <div
                  className={`w-16 h-16 rounded-digimax bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`text-3xl ${service.accentColor}`} />
                </div>
                <h3 className="text-xl font-outfit font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-digimax-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesGridSection
