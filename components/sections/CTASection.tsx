'use client'

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="section-padding bg-digimax-dark relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-digimax-purple/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-digimax-pink/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-digimax-dark"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg md:text-xl text-digimax-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s work together to create a digital marketing strategy that drives real results. Schedule your free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
              Schedule Consultation
              <FaArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Services
            </Link>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-20 text-center"
          >
            <div className="card-glass py-6">
              <p className="text-2xl md:text-3xl font-outfit font-bold gradient-text mb-2">
                100+
              </p>
              <p className="text-sm text-digimax-text-secondary">Active Clients</p>
            </div>
            <div className="card-glass py-6">
              <p className="text-2xl md:text-3xl font-outfit font-bold gradient-text mb-2">
                500+
              </p>
              <p className="text-sm text-digimax-text-secondary">Projects Done</p>
            </div>
            <div className="card-glass py-6">
              <p className="text-2xl md:text-3xl font-outfit font-bold gradient-text mb-2">
                15+
              </p>
              <p className="text-sm text-digimax-text-secondary">Years Exp.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
