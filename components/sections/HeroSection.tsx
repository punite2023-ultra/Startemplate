'use client'

import { motion } from 'framer-motion'
import { FaPlay, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-digimax-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-digimax-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-digimax-dark to-digimax-dark"></div>
      </div>

      <div className="section-padding w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-digimax-purple/50">
              <span className="text-sm font-outfit font-semibold text-digimax-purple">
                ✨ Welcome to Digital Excellence
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="mb-6 leading-tight text-text-primary"
          >
            <span className="gradient-text">Elevate Your Brand</span>
            <br />
            with Digital Marketing
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-digimax-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We empower businesses with cutting-edge digital solutions. From SEO to social media, we&apos;ve got everything you need to succeed online.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-2"
            >
              Get Started
              <FaArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              <FaPlay size={16} />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Hero Image / Illustration */}
          <motion.div
            variants={itemVariants}
            className="relative mt-12 md:mt-20"
          >
            <div className="relative rounded-digimax-xl overflow-hidden border border-white/10 bg-gradient-to-b from-digimax-purple/10 to-digimax-pink/10">
              <div className="aspect-video bg-gradient-to-br from-digimax-purple/30 via-digimax-pink/20 to-digimax-orange/30 flex items-center justify-center">
                <div className="text-center">
                  <FaPlay className="text-6xl text-digimax-purple/50 mb-4 mx-auto" />
                  <p className="text-digimax-text-secondary">Hero Animation Area</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mt-12 md:mt-16"
          >
            <div className="w-8 h-12 border-2 border-digimax-purple/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-2 bg-digimax-purple rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
