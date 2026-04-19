'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How long does it take to see results from digital marketing?',
      answer:
        'Results vary depending on your goals and industry. SEO typically shows improvements within 3-6 months, while paid advertising can show results within days. We focus on long-term sustainable growth while delivering quick wins.',
    },
    {
      question: 'What services does DigiMax offer?',
      answer:
        'We offer comprehensive digital marketing services including SEO, social media marketing, content writing, paid advertising, web design, email marketing, video marketing, and analytics. We can customize packages based on your specific needs.',
    },
    {
      question: 'How much does digital marketing cost?',
      answer:
        'Our pricing is flexible and depends on your goals and scope of work. We offer plans starting at $1,499/month for startups and scalable solutions for larger enterprises. We also offer custom quotes for unique requirements.',
    },
    {
      question: 'Do you work with businesses outside my industry?',
      answer:
        'Yes! We have experience working with businesses across various industries including e-commerce, healthcare, finance, real estate, technology, and more. Our strategies are customized to your industry-specific challenges.',
    },
    {
      question: 'How do you measure success?',
      answer:
        'We establish clear KPIs at the beginning and provide monthly reports tracking metrics like traffic, conversions, ROI, engagement, and more. You&apos;ll always know how your campaigns are performing.',
    },
    {
      question: 'Can you help with existing campaigns?',
      answer:
        'Absolutely! We can audit your existing campaigns and optimize them for better performance. Whether you want us to take over completely or work alongside your team, we&apos;re flexible.',
    },
    {
      question: 'What is your contract length?',
      answer:
        'We typically work on 3-month, 6-month, or 12-month contracts depending on your needs. We believe in building long-term partnerships and delivering sustainable results.',
    },
    {
      question: 'How do you stay updated with algorithm changes?',
      answer:
        'Our team participates in continuous training and follows industry updates closely. We attend conferences, read research papers, and test changes in controlled environments to keep your strategies effective.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-digimax-dark to-digimax-light-bg relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-digimax-pink/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-digimax-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-digimax-text-secondary text-lg max-w-2xl mx-auto text-center">
            Can&apos;t find the answer you&apos;re looking for? Feel free to{' '}
            <a href="/contact" className="text-digimax-purple hover:text-digimax-pink transition-colors">
              contact us
            </a>
            .
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, margin: '-100px' }}
              className="card-glass overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 md:px-8 md:py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
              >
                <h3 className="font-outfit font-semibold text-lg md:text-base text-white flex-grow">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <FaChevronDown className="text-digimax-purple" size={20} />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 md:px-8 md:pb-6 border-t border-white/10">
                  <p className="text-digimax-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
