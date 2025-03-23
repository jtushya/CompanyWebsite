import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const [teamRef, teamInView] = useInView({ triggerOnce: true });

  const stats = [
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Availability' },
    { number: '5+', label: 'Years of Combined Experience' }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation First',
      description: 'We stay ahead of digital trends to deliver cutting-edge solutions.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to achieve your goals.',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Creative Excellence',
      description: 'We bring fresh, innovative ideas to every project we undertake.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Assured',
      description: 'We maintain the highest standards in all our deliverables.',
    },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Digital transformation expert with 15+ years of experience.',
    },
    {
      name: 'Priya Sharma',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      bio: 'Award-winning designer passionate about user experience.',
    },
    {
      name: 'Amit Patel',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      bio: 'Full-stack developer specializing in scalable solutions.',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2019, TechWalk Technologies has grown from a small startup to a leading digital solutions agency. 
              Our journey is driven by passion for innovation and commitment to delivering exceptional results for our clients.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        initial={{ opacity: 0, y: 20 }}
        animate={teamInView ? { opacity: 1, y: 0 } : {}}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;