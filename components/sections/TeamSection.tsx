'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'

const TeamSection = () => {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: '👨‍💼',
      bio: 'Digital marketing visionary with 20+ years of industry experience.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Strategy',
      image: '👩‍💼',
      bio: 'Strategic mind behind 500+ successful campaigns and counting.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Mike Davis',
      role: 'Lead Developer',
      image: '👨‍💻',
      bio: 'Full-stack developer creating innovative digital solutions.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Emma Taylor',
      role: 'Creative Director',
      image: '👩‍🎨',
      bio: 'Award-winning designer with a passion for visual storytelling.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'James Chen',
      role: 'SEO Specialist',
      image: '👨‍🔬',
      bio: 'Data-driven SEO expert increasing organic traffic for clients.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Lisa Anderson',
      role: 'Content Manager',
      image: '👩‍💻',
      bio: 'Storyteller crafting compelling content that converts.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'David Martinez',
      role: 'Social Media Specialist',
      image: '👨‍🎤',
      bio: 'Community builder creating engaging social strategies.',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Rachel Green',
      role: 'Project Manager',
      image: '👩‍💼',
      bio: 'Ensuring seamless project execution and client satisfaction.',
      social: { linkedin: '#', twitter: '#' },
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
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-digimax-pink/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-digimax-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="mb-4">Our Talented Team</h2>
          <p className="text-digimax-text-secondary text-lg max-w-2xl mx-auto">
            Meet the creative minds and industry experts dedicated to transforming your digital presence
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card-glass group overflow-hidden flex flex-col"
            >
              {/* Avatar */}
              <div className="w-full aspect-square rounded-digimax bg-gradient-to-br from-digimax-purple/20 to-digimax-pink/20 flex items-center justify-center text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {member.image}
              </div>

              {/* Content */}
              <h3 className="font-outfit font-semibold text-lg text-white mb-1">
                {member.name}
              </h3>
              <p className="text-digimax-purple text-sm font-semibold mb-3">
                {member.role}
              </p>
              <p className="text-digimax-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex gap-3 pt-4 border-t border-white/10">
                <a
                  href={member.social.linkedin}
                  className="w-10 h-10 rounded-digimax bg-white/10 flex items-center justify-center text-digimax-purple hover:bg-digimax-purple/20 transition-colors"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-10 h-10 rounded-digimax bg-white/10 flex items-center justify-center text-digimax-purple hover:bg-digimax-purple/20 transition-colors"
                >
                  <FaTwitter size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
