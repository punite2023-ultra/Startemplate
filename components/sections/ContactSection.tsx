'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarker, FaArrowRight } from 'react-icons/fa'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'hello@digimax.com',
      href: 'mailto:hello@digimax.com',
    },
    {
      icon: FaMapMarker,
      title: 'Address',
      content: '123 Digital Lane, Tech City, TC 12345',
      href: '#',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-digimax-dark to-digimax-light-bg relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-digimax-purple/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-digimax-pink/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-outfit font-semibold mb-6 text-white">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-digimax bg-white/5 border border-white/10 text-white placeholder:text-digimax-text-secondary focus:outline-none focus:border-digimax-purple transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-digimax bg-white/5 border border-white/10 text-white placeholder:text-digimax-text-secondary focus:outline-none focus:border-digimax-purple transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-digimax bg-white/5 border border-white/10 text-white placeholder:text-digimax-text-secondary focus:outline-none focus:border-digimax-purple transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-digimax bg-white/5 border border-white/10 text-white focus:outline-none focus:border-digimax-purple transition-colors"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="services">Services Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Support Request</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-digimax bg-white/5 border border-white/10 text-white placeholder:text-digimax-text-secondary focus:outline-none focus:border-digimax-purple transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Send Message
                <FaArrowRight size={18} />
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-digimax-purple text-center"
                >
                  Thank you! We&apos;ll be in touch soon.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-outfit font-semibold mb-8 text-white">
              Get In Touch
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card-glass p-6 flex items-start gap-4 group hover:no-underline"
                  >
                    <div className="w-12 h-12 rounded-digimax bg-gradient-to-br from-digimax-purple/30 to-digimax-pink/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="text-xl text-digimax-purple" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-digimax-text-secondary">{info.content}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Business Hours */}
            <card-glass className="card-glass p-6">
              <h4 className="font-outfit font-semibold text-white mb-4">
                Business Hours
              </h4>
              <div className="space-y-2 text-digimax-text-secondary">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </card-glass>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
