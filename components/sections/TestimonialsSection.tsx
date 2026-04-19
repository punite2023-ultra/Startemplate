'use client'

import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Startup',
      image: '👩‍💼',
      content:
        'DigiMax transformed our digital presence. Our organic traffic increased by 300% in just 6 months. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Manager, E-commerce',
      image: '👨‍💼',
      content:
        'Working with DigiMax was a game-changer. Their strategic approach and attention to detail really made a difference.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Design Agency',
      image: '👩‍🎨',
      content:
        'The team at DigiMax truly understands digital marketing. They delivered results beyond our expectations.',
      rating: 5,
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-padding bg-gradient-to-b from-digimax-dark to-digimax-light-bg relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-digimax-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-digimax-purple/50 mb-6">
            <span className="text-sm font-outfit font-semibold text-digimax-purple">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-digimax-text-secondary text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from businesses we&apos;ve helped transform.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card-glass flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-digimax-orange" size={16} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-digimax-text-secondary leading-relaxed mb-6 flex-grow">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-digimax-1 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-outfit font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-digimax-text-secondary">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
