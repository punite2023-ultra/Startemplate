'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const AboutSection = () => {
  const highlights = [
    'Founded in 2008 with a passion for digital excellence',
    'Trusted by 500+ businesses across multiple industries',
    'Award-winning team of certified digital marketing experts',
    'Proven methodology with consistent results',
    'Full-service agency from strategy to execution',
    'Committed to continuous learning and innovation',
  ]

  return (
    <section className="section-padding bg-digimax-dark relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-digimax-pink/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-digimax-pink/50 mb-6">
                <span className="text-sm font-outfit font-semibold text-digimax-pink">
                  OUR STORY
                </span>
              </div>
              <h2 className="mb-6">About Our Agency</h2>
            </div>

            <p className="text-digimax-text-secondary text-lg leading-relaxed mb-6">
              DigiMax was founded on the belief that digital marketing should drive real business results. Over the past 15+ years, we&apos;ve helped hundreds of companies transform their online presence and achieve remarkable growth.
            </p>

            <p className="text-digimax-text-secondary text-lg leading-relaxed mb-8">
              Our team of certified digital marketing experts brings decades of combined experience across SEO, social media, content marketing, paid advertising, and web design. We don&apos;t just implement strategies—we partner with our clients to understand their unique challenges and create customized solutions.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-digimax-purple flex-shrink-0 mt-1" size={20} />
                  <span className="text-digimax-text-secondary">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-digimax-xl overflow-hidden border border-white/10">
              <div className="aspect-square bg-gradient-to-br from-digimax-purple/20 via-digimax-pink/20 to-digimax-orange/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <p className="text-digimax-text-secondary">Digital Excellence</p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 card-glass p-6 max-w-xs"
            >
              <p className="font-outfit font-semibold text-white mb-2">15+ Years</p>
              <p className="text-sm text-digimax-text-secondary">
                of Digital Marketing Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
