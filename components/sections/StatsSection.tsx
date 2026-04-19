'use client'

import { motion } from 'framer-motion'

const StatsSection = () => {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-padding bg-gradient-to-b from-digimax-light-bg to-digimax-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-digimax-purple/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-digimax-pink/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="mb-4">By The Numbers</h2>
          <p className="text-digimax-text-secondary text-lg max-w-2xl mx-auto">
            Our proven track record of delivering exceptional results for businesses across industries
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative group"
            >
              <div className="card-glass text-center py-8 md:py-12">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-4xl md:text-5xl font-outfit font-bold bg-gradient-digimax-1 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-digimax-text-secondary text-base md:text-lg">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StatsSection
