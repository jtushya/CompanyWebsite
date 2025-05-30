import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Video,
  Globe,
  Code,
  Share2,
  TrendingUp,
  Search,
  Smartphone,
  Zap,
} from 'lucide-react';

const Services = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });

  const services = [
    {
      id: 'video',
      icon: <Video className="h-12 w-12" />,
      title: 'Video Editing',
      description: 'Professional video editing services for content creators and businesses.',
      features: [
        'Custom video editing and post-production',
        'Motion graphics and animations',
        'Color grading and correction',
        'Sound design and mixing',
      ],
      link: '/services/video-editing'
    },
    {
      id: 'web',
      icon: <Globe className="h-12 w-12" />,
      title: 'Website Creation',
      description: 'Custom website development with rapid 6-hour delivery options.',
      features: [
        'Responsive web design',
        'E-commerce solutions',
        'CMS integration',
        'Performance optimization',
      ],
      link: '/services/website-creation'
    },
    {
      id: 'digital',
      icon: <Zap className="h-12 w-12" />,
      title: 'Digital Transformation',
      description: 'Complete digital solutions to modernize your business operations.',
      features: [
        'Business process automation',
        'Cloud migration services',
        'Digital workflow optimization',
        'Technology consultation',
      ],
      link: '/services/digital-transformation'
    },
    {
      id: 'social',
      icon: <Share2 className="h-12 w-12" />,
      title: 'Social Media Management',
      description: 'Strategic social media presence and engagement management.',
      features: [
        'Content strategy development',
        'Social media marketing',
        'Community management',
        'Analytics and reporting',
      ],
      link: '/services/social-media'
    },
    {
      id: 'marketing',
      icon: <TrendingUp className="h-12 w-12" />,
      title: 'Digital Marketing',
      description: 'Results-driven digital marketing campaigns and strategies.',
      features: [
        'Email marketing campaigns',
        'PPC advertising',
        'Content marketing',
        'Marketing automation',
      ],
      link: '/services/digital-marketing'
    },
    {
      id: 'seo',
      icon: <Search className="h-12 w-12" />,
      title: 'SEO & Google Ads',
      description: 'Search engine optimization and targeted advertising solutions.',
      features: [
        'Keyword research and optimization',
        'Technical SEO audits',
        'Google Ads campaign management',
        'Performance tracking',
      ],
      link: '/services/seo'
    },
    {
      id: 'app',
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile App Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      features: [
        'Native app development',
        'Cross-platform solutions',
        'App store optimization',
        'Maintenance and support',
      ],
      link: '/services/mobile-apps'
    },
    {
      id: 'custom',
      icon: <Code className="h-12 w-12" />,
      title: 'Custom Software Development',
      description: 'Tailored software solutions for your unique business needs.',
      features: [
        'Custom web applications',
        'API development',
        'Database design',
        'System integration',
      ],
      link: '/services/custom-software'
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to transform your business and drive growth
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        ref={servicesRef}
        initial={{ opacity: 0, y: 20 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.id}
                to={service.link}
                className="block"
              >
                <motion.div
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                >
                  <div className="text-blue-600 mb-6">{service.icon}</div>
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;