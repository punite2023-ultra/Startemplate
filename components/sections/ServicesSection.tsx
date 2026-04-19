'use client'

import { motion } from 'framer-motion'
import {
  FaSearch,
  FaShare,
  FaPen,
  FaLaptop,
  FaChartLine,
  FaEnvelope,
} from 'react-icons/fa'
import Link from 'next/link'

const ServicesSection = () => {
  const services = [
    {
      icon: FaSearch,
      title: 'SEO Optimization',
      description:
        'Boost your search engine rankings and drive organic traffic to your website with our proven SEO strategies.',
      color: 'from-digimax-purple/20 to-digimax-purple/10',
      accentColor: 'text-digimax-purple',
    },
    {
      icon: FaShare,
      title: 'Social Media Marketing',
      description:
        'Engage your audience and build brand loyalty through strategic social media campaigns.',
      color: 'from-digimax-pink/20 to-digimax-pink/10',
      accentColor: 'text-digimax-pink',
    },
    {
      icon: FaPen,
      title: 'Content Writing',
      description:
        'Compelling content that resonates with your audience and drives conversions.',
      color: 'from-digimax-orange/20 to-digimax-orange/10',
      accentColor: 'text-digimax-orange',
    },
    {
      icon: FaLaptop,
      title: 'Web Design',
      description:
        'Beautiful, responsive websites designed to convert visitors into customers.',
      color: 'from-digimax-purple/20 to-digimax-pink/10',
      accentColor: 'text-digimax-purple',
    },
    {
      icon: FaChartLine,
      title: 'Analytics & Reporting',
      description:
        'Data-driven insights to measure performance and optimize your marketing strategy.',
      color: 'from-digimax-pink/20 to-digimax-orange/10',
      accentColor: 'text-digimax-pink',
    },
    {
      icon: FaEnvelope,
      title: 'Email Marketing',
      description:
        'Effective email campaigns that nurture leads and maximize customer lifetime value.',
      color: 'from-digimax-orange/20 to-digimax-purple/10',
      accentColor: 'text-digimax-orange',
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
    <section className="section-padding relative bg-gradient-to-b from-digimax-dark to-digimax-light-bg">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-digimax-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-digimax-pink/50 mb-6">
            <span className="text-sm font-outfit font-semibold text-digimax-pink">
              OUR SERVICES
            </span>
          </div>
          <h2 className="mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-digimax-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
            From strategy to execution, we deliver comprehensive digital marketing services tailored to your business goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"
        >
          {services.map((service, index) => {
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
                <p className="text-digimax-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-digimax-purple hover:text-digimax-pink transition-colors font-semibold"
                >
                  Learn More
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link href="/services" className="btn-primary inline-block">
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
