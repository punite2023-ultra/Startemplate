'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0118]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-outfit font-bold text-2xl md:text-3xl"
          >
            <span className="bg-gradient-to-r from-[#B47CFD] via-[#FF7FC2] to-[#FFB07B] bg-clip-text text-transparent">Digi</span>
            <span className="text-white">Max</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-outfit font-semibold text-sm md:text-base text-gray-400 hover:text-[#B47CFD] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-outfit font-semibold transition-all duration-300 bg-gradient-to-r from-[#B47CFD] to-[#FF7FC2] text-white hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 text-sm"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-[#B47CFD] hover:bg-white/20 transition-colors"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`lg:hidden overflow-hidden bg-[#0A0118]/95 backdrop-blur-md border-b border-white/10 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-4 md:px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block font-outfit font-semibold text-base text-gray-400 hover:text-[#B47CFD] transition-colors duration-300 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-3 md:py-4 rounded-lg font-outfit font-semibold transition-all duration-300 bg-gradient-to-r from-[#B47CFD] to-[#FF7FC2] text-white hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 text-sm w-full mt-6"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </header>
  )
}

export default Header
