'use client'

import { motion } from 'framer-motion'
import { FaTarget, FaLight, FaHeart } from 'react-icons/fa'

const MissionSection = () => {
  const values = [
    {
      icon: FaTarget,
      title: 'Our Mission',
      description:
        'To empower businesses of all sizes with innovative digital marketing solutions that drive measurable results and sustainable growth.',
    },
    {
      icon: FaLight,
      title: 'Our Vision',
      description:
        'To be the most trusted digital marketing partner, known for delivering exceptional value and transforming businesses through strategic digital excellence.',
    },
    {
      icon: FaHeart,
      title: 'Our Values',
      description:
        'We believe in integrity, innovation, collaboration, and continuous improvement. We succeed when our clients succeed.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-digimax-dark to-digimax-light-bg relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-digimax-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">What Drives Us</h2>
          <p className="text-digimax-text-secondary text-lg max-w-2xl mx-auto">
            Our mission, vision, and values guide everything we do
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="card-glass text-center"
              >
                <div className="w-16 h-16 rounded-digimax bg-gradient-to-br from-digimax-purple/30 to-digimax-pink/20 flex items-center justify-center mb-6 mx-auto">
                  <Icon className="text-3xl text-digimax-purple" />
                </div>
                <h3 className="text-2xl font-outfit font-semibold mb-4 text-white">
                  {value.title}
                </h3>
                <p className="text-digimax-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MissionSection
