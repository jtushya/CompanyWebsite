import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Settings, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const CustomSoftware = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [processRef, processInView] = useInView({ triggerOnce: true });

  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Custom Development',
      description: 'Tailored software solutions built to your exact specifications.'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Database Design',
      description: 'Efficient and scalable database architecture.'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'Cloud Integration',
      description: 'Seamless integration with cloud services and APIs.'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'System Integration',
      description: 'Connect and streamline your existing systems.'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Software Development Services",
    "provider": {
      "@type": "Organization",
      "name": "Planckk Technologies"
    },
    "description": "Professional custom software development services",
    "areaServed": ["Chennai", "Mumbai", "Pune", "Hyderabad"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Custom Software Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development",
            "description": "Tailored software solutions for your business needs"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="Custom Software Development Services | Planckk Technologies"
        description="Transform your business with custom software solutions. Database design, system integration, and cloud solutions tailored to your needs."
        schema={schema}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'Custom Software', item: '/services/custom-software' }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
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
                Custom Software Development
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your business with tailored software solutions designed specifically for your unique needs.
              </p>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={headerInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1200&h=600&fit=crop"
                alt="Custom Software Development"
                className="rounded-xl shadow-2xl mx-auto"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          ref={featuresRef}
          initial={{ opacity: 0, y: 20 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Development Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          ref={processRef}
          initial={{ opacity: 0, y: 20 }}
          animate={processInView ? { opacity: 1, y: 0 } : {}}
          className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Development Process
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '01', title: 'Analysis', description: 'Requirements gathering' },
                { number: '02', title: 'Design', description: 'Architecture planning' },
                { number: '03', title: 'Development', description: 'Implementation' },
                { number: '04', title: 'Deploy', description: 'Testing & launch' },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={processInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-6xl font-bold text-blue-100 absolute -top-4 -left-4">
                      {step.number}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-100" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                Modern technologies for robust solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Applications",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
                  tech: "React, Node.js, TypeScript"
                },
                {
                  title: "Database Solutions",
                  image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=600&fit=crop",
                  tech: "PostgreSQL, MongoDB, Redis"
                },
                {
                  title: "Cloud Services",
                  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
                  tech: "AWS, Azure, Google Cloud"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{tech.title}</h3>
                    <p className="text-blue-600">{tech.tech}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-8">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how we can help you achieve your business goals
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 flex items-center mx-auto hover:bg-blue-50"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomSoftware;