'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft, FaHome } from 'react-icons/fa'

export default function NotFound() {
  return (
    <main className="bg-digimax-dark min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-digimax-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-digimax-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-digimax-dark to-digimax-dark"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4 md:px-8 max-w-2xl"
      >
        {/* 404 Number */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[150px] font-outfit font-black">
            <span className="gradient-text">4</span>
            <span className="text-white">0</span>
            <span className="gradient-text">4</span>
          </h1>
        </motion.div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4 text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-digimax-text-secondary mb-8 leading-relaxed">
          Oops! It looks like you&apos;ve wandered off the digital map. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Illustration */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-7xl mb-12"
        >
          🚀
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary flex items-center justify-center gap-2">
            <FaHome size={18} />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary flex items-center justify-center gap-2">
            <FaArrowLeft size={18} />
            Contact Support
          </Link>
        </div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-digimax-text-secondary text-sm mb-4">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: 'Services', href: '/services' },
              { label: 'About', href: '/about' },
              { label: 'Blog', href: '/blog' },
              { label: 'Pricing', href: '/pricing' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-digimax-purple hover:text-digimax-pink transition-colors text-sm font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
