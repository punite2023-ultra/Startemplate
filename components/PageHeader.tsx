'use client'

import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle: string
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="relative min-h-64 md:min-h-80 flex items-center pt-32 md:pt-40 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-digimax-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-digimax-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-digimax-dark to-digimax-dark"></div>
      </div>

      <div className="w-full px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="mb-4 text-text-primary">{title}</h1>
          <p className="text-lg md:text-xl text-digimax-text-secondary leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PageHeader
