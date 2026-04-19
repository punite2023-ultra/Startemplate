'use client'

import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight } from 'react-icons/fa'

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: 1499,
      description: 'Perfect for small businesses just starting their digital journey',
      badge: false,
      features: [
        'SEO Optimization',
        'Monthly Reports',
        'Email Support',
        'Social Media Posting (2 platforms)',
        'Content Writing (4 posts/month)',
        'Basic Analytics',
      ],
      cta: 'Get Started',
      color: 'from-digimax-purple/20 to-digimax-purple/10',
    },
    {
      name: 'Professional',
      price: 2999,
      description: 'For growing businesses looking to scale their digital presence',
      badge: true,
      badgeText: 'Most Popular',
      features: [
        'Everything in Starter, plus:',
        'Paid Advertising Management',
        'Social Media Posting (4 platforms)',
        'Content Writing (8 posts/month)',
        'Website Maintenance',
        'Priority Support',
        'Quarterly Strategy Reviews',
        'Advanced Analytics',
      ],
      cta: 'Start Free Trial',
      color: 'from-digimax-pink/20 to-digimax-pink/10',
    },
    {
      name: 'Enterprise',
      price: 4999,
      description: 'Comprehensive solutions for established businesses and enterprises',
      badge: false,
      features: [
        'Everything in Professional, plus:',
        'Dedicated Account Manager',
        'Custom Strategy Development',
        'Unlimited Social Media Posting',
        'Unlimited Content Writing',
        '24/7 Priority Support',
        'Monthly Strategy Calls',
        'Custom Integrations',
        'White Label Options',
      ],
      cta: 'Contact Sales',
      color: 'from-digimax-orange/20 to-digimax-orange/10',
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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-digimax-purple/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-digimax-pink/15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`rounded-digimax-xl border transition-all duration-300 relative overflow-hidden ${
                plan.badge
                  ? 'border-digimax-pink/50 ring-2 ring-digimax-pink/20 scale-105 md:scale-110 lg:scale-105'
                  : 'border-white/10 hover:border-digimax-purple/50'
              }`}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${plan.color} -z-10`}
              ></div>
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md -z-10"></div>

              {/* Badge */}
              {plan.badge && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                >
                  <span className="px-4 py-1 rounded-full bg-gradient-digimax-1 text-white text-sm font-semibold">
                    {plan.badgeText}
                  </span>
                </motion.div>
              )}

              {/* Content */}
              <div className="p-8 md:p-6 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-outfit font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-digimax-text-secondary text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-outfit font-bold gradient-text">
                      ${plan.price}
                    </span>
                    <span className="text-digimax-text-secondary">/month</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-digimax font-outfit font-semibold mb-8 flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.badge
                      ? 'btn-primary'
                      : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                  <FaArrowRight size={16} />
                </motion.button>

                {/* Features List */}
                <div className="flex-grow">
                  <p className="text-sm font-semibold text-white mb-4">What&apos;s included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-digimax-text-secondary text-sm"
                      >
                        <FaCheck className="text-digimax-purple flex-shrink-0 mt-1" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-outfit font-semibold mb-2 text-white">
            Need a custom plan?
          </h3>
          <p className="text-digimax-text-secondary mb-6">
            Contact our team to discuss a tailored solution for your specific needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection
