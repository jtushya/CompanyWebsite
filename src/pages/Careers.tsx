import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import JobCard from '../components/JobCard';
import { Users, Heart, Zap, Trophy } from 'lucide-react';

const Careers = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaborative Culture',
      description: 'Work with talented individuals in a supportive environment.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health coverage and wellness programs.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career development support.',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Recognition & Rewards',
      description: 'Performance-based bonuses and recognition programs.',
    },
  ];

  const jobs = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'We\'re looking for an experienced Full Stack Developer to join our engineering team and help build innovative digital solutions.',
      requirements: [
        '5+ years of experience with modern web technologies',
        'Strong proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/GCP)',
        'Excellent problem-solving skills',
      ],
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Join our marketing team to create and execute digital marketing strategies for our clients.',
      requirements: [
        '3+ years of digital marketing experience',
        'Proficiency in SEO, SEM, and social media marketing',
        'Experience with marketing analytics tools',
        'Strong communication skills',
      ],
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create beautiful and intuitive user interfaces for web and mobile applications.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma and Adobe Creative Suite',
        'Strong portfolio showcasing web and mobile designs',
        'Experience with design systems',
      ],
    },
  ];

  return (
    <div className="pt-16">
      {/* Header Section */}
      <motion.section
        ref={headerRef}
        initial={{ opacity: 0 }}
        animate={headerInView ? { opacity: 1 } : {}}
        className="relative py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of an innovative team that\'s shaping the future of digital technology
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Open Positions
          </h2>
          <div className="grid gap-8">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title}
                department={job.department}
                location={job.location}
                type={job.type}
                description={job.description}
                requirements={job.requirements}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Culture
              </h2>
              <p className="text-white/80 mb-8">
                At TechWalk, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team members are passionate about technology and committed to delivering exceptional results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-white">
                  <span className="h-2 w-2 bg-white rounded-full mr-3"></span>
                  Innovation-driven environment
                </li>
                <li className="flex items-center text-white">
                  <span className="h-2 w-2 bg-white rounded-full mr-3"></span>
                  Work-life balance
                </li>
                <li className="flex items-center text-white">
                  <span className="h-2 w-2 bg-white rounded-full mr-3"></span>
                  Professional development opportunities
                </li>
                <li className="flex items-center text-white">
                  <span className="h-2 w-2 bg-white rounded-full mr-3"></span>
                  Inclusive and diverse workplace
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
                alt="Office culture"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;