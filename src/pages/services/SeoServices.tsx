import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, BarChart2, Globe, Settings, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const SeoServices = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [processRef, processInView] = useInView({ triggerOnce: true });

  const features = [
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Keyword Optimization',
      description: 'Strategic keyword research and implementation for better rankings.'
    },
    {
      icon: <BarChart2 className="h-8 w-8" />,
      title: 'Performance Tracking',
      description: 'Detailed analytics and ranking monitoring for all keywords.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Technical SEO',
      description: 'Comprehensive technical optimization for better visibility.'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'On-Page SEO',
      description: 'Content optimization and structure improvements.'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services",
    "provider": {
      "@type": "Organization",
      "name": "Planckk Technologies"
    },
    "description": "Professional SEO services for improved search engine rankings",
    "areaServed": ["Chennai", "Mumbai", "Pune", "Hyderabad"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization",
            "description": "Comprehensive SEO solutions for better visibility"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="SEO Services | Planckk Technologies"
        description="Improve your search engine rankings with our professional SEO services. Technical optimization, keyword research, and performance tracking."
        schema={schema}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'SEO Services', item: '/services/seo' }
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
                SEO Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Improve your search engine rankings and drive organic traffic with our comprehensive SEO solutions.
              </p>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={headerInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&h=600&fit=crop"
                alt="SEO Services"
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
                Our SEO Solutions
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
                Our SEO Process
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '01', title: 'Audit', description: 'Technical analysis' },
                { number: '02', title: 'Plan', description: 'Strategy development' },
                { number: '03', title: 'Optimize', description: 'Implementation' },
                { number: '04', title: 'Monitor', description: 'Track & improve' },
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

        {/* Results Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                Real results from our SEO strategies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-commerce Growth",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
                  result: "150% increase in organic traffic"
                },
                {
                  title: "Local Business",
                  image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop",
                  result: "Top 3 rankings for key terms"
                },
                {
                  title: "SaaS Company",
                  image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
                  result: "200% more qualified leads"
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{study.title}</h3>
                    <p className="text-blue-600">{study.result}</p>
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
              Ready to Improve Your Rankings?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's create an SEO strategy that drives organic growth
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 flex items-center mx-auto hover:bg-blue-50"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </section>
      </div>
    </>
  );
};

export default SeoServices;