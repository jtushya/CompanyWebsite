import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Lightbulb, Award, Code2, Rocket, Heart, Zap, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const About = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [statsRef, statsInView] = useInView({ triggerOnce: true });
  const [teamRef, teamInView] = useInView({ triggerOnce: true });

  const stats = [
    { number: '100%', label: 'Client Satisfaction', description: 'Consistently exceeding expectations' },
    { number: '6hrs', label: 'Average Delivery', description: 'Lightning-fast project completion' },
    { number: '24/7', label: 'Support Available', description: 'Round-the-clock assistance' },
    { number: '5+', label: 'Years Experience', description: 'Proven industry expertise' }
  ];

  const values = [
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Innovation First',
      description: 'We stay ahead of digital trends to deliver cutting-edge solutions that keep our clients at the forefront of their industries.',
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand your needs and exceed your expectations.',
    },
    {
      icon: <Lightbulb className="h-12 w-12" />,
      title: 'Creative Excellence',
      description: 'We bring fresh, innovative ideas to every project, ensuring unique and impactful solutions for our clients.',
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: 'Quality Assured',
      description: 'We maintain the highest standards in all our deliverables, ensuring premium quality in every project.',
    },
    {
      icon: <Rocket className="h-12 w-12" />,
      title: 'Rapid Delivery',
      description: 'We believe in quick turnaround times without compromising on quality or attention to detail.',
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: 'Passionate Team',
      description: 'Our team is passionate about creating exceptional digital experiences that drive results.',
    },
    {
      icon: <Code2 className="h-12 w-12" />,
      title: 'Technical Expertise',
      description: 'We leverage the latest technologies and best practices to deliver robust solutions.',
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: 'Continuous Growth',
      description: 'We constantly evolve and adapt to stay ahead of industry trends and technologies.',
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Digital transformation expert with 15+ years of experience in technology consulting and business strategy.',
      expertise: ['Business Strategy', 'Digital Transformation', 'Technology Leadership']
    },
    {
      name: 'Priya Sharma',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      bio: 'Award-winning designer passionate about creating intuitive and engaging user experiences.',
      expertise: ['UI/UX Design', 'Brand Strategy', 'User Research']
    },
    {
      name: 'Amit Patel',
      role: 'Technical Lead',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      bio: 'Full-stack developer specializing in scalable solutions and modern web technologies.',
      expertise: ['Web Development', 'Cloud Architecture', 'Performance Optimization']
    },
    {
      name: 'Sarah Wilson',
      role: 'Marketing Head',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
      bio: 'Digital marketing strategist with expertise in growth hacking and brand development.',
      expertise: ['Digital Marketing', 'SEO Strategy', 'Content Marketing']
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to transform digital service delivery'
    },
    {
      year: '2020',
      title: 'Rapid Growth',
      description: 'Expanded team and launched 6-hour delivery service'
    },
    {
      year: '2021',
      title: 'Market Expansion',
      description: 'Extended services to multiple cities across India'
    },
    {
      year: '2022',
      title: 'Innovation Award',
      description: 'Recognized for revolutionary service delivery model'
    },
    {
      year: '2023',
      title: 'Digital Excellence',
      description: 'Achieved 100+ successful project deliveries'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Planckk Technologies",
    "description": "Professional web development and digital solutions company",
    "foundingDate": "2019",
    "url": "https://planckk.com",
    "sameAs": [
      "https://facebook.com/planckk",
      "https://twitter.com/planckk",
      "https://linkedin.com/company/planckk"
    ]
  };

  return (
    <>
      <SEOHead 
        title="About Planckk Technologies | Our Story & Team"
        description="Learn about Planckk Technologies - a leading digital solutions company delivering innovative web development and digital transformation services."
        schema={schema}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'About', item: '/about' }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <motion.section
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2850"
              alt="Digital Technology"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={headerInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Founded in 2019, Planckk Technologies has grown from a small startup to a leading digital solutions agency. 
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
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-lg"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                >
                  <div className="text-blue-600 mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
                  >
                    <div className="w-1/2 flex items-center">
                      <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'} relative`}>
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"
                          style={{ [index % 2 === 0 ? 'right' : 'left']: '-2rem' }}
                        />
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <motion.section
          ref={teamRef}
          initial={{ opacity: 0, y: 20 }}
          animate={teamInView ? { opacity: 1, y: 0 } : {}}
          className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="space-y-2">
                      {member.expertise.map((skill, i) => (
                        <div
                          key={i}
                          className="inline-block mr-2 mb-2 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Work with Us?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create something amazing together
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 flex items-center mx-auto hover:bg-blue-50 shadow-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;