'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from 'react-icons/fa'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const services = [
    { name: 'SEO Optimization', href: '/services' },
    { name: 'Social Media', href: '/services' },
    { name: 'Content Writing', href: '/services' },
    { name: 'Web Design', href: '/services' },
    { name: 'Branding', href: '/services' },
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '#' },
  ]

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ]

  return (
    <footer className="bg-digimax-dark border-t border-white/10">
      {/* Newsletter Section */}
      <div className="section-padding border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-digimax-text-secondary text-base md:text-lg mb-8">
              Get the latest updates on digital marketing trends and tips
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-digimax bg-white/5 border border-white/10 text-white placeholder:text-digimax-text-secondary focus:outline-none focus:border-digimax-purple transition-colors"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Subscribe
              <FaArrowRight size={16} />
            </motion.button>
          </form>

          {subscribed && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-digimax-purple text-center mt-4"
            >
              Thanks for subscribing!
            </motion.p>
          )}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-7xl mx-auto mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h3 className="font-outfit font-bold text-2xl mb-4">
                <span className="gradient-text">Digi</span>
                <span className="text-white">Max</span>
              </h3>
              <p className="text-digimax-text-secondary leading-relaxed">
                Your partner in digital transformation. We help businesses grow through innovative digital marketing solutions.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-10 h-10 rounded-digimax bg-white/10 flex items-center justify-center text-digimax-purple hover:bg-digimax-purple/20 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-outfit font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-digimax-text-secondary hover:text-digimax-purple transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-outfit font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-digimax-text-secondary hover:text-digimax-purple transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-outfit font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-digimax-text-secondary hover:text-digimax-purple transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-digimax-text-secondary text-sm">
              © 2024 DigiMax. All rights reserved.
            </p>
            <p className="text-digimax-text-secondary text-sm">
              Crafted with passion by the DigiMax team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
