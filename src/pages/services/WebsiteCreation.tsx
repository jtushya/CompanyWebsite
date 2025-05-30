import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Zap, Layout, Code, Globe, Palette, Shield, Search, CheckCircle, ArrowRight, Laptop, Smartphone, Gauge, Lock } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const WebsiteCreation = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [processRef, processInView] = useInView({ triggerOnce: true });

  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: '6-Hour Delivery',
      description: 'Get your professional website delivered in just 6 hours, without compromising on quality.'
    },
    {
      icon: <Layout className="h-8 w-8" />,
      title: 'Responsive Design',
      description: 'Websites that look and work perfectly on all devices - desktop, tablet, and mobile.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Optimized for speed with the latest performance best practices and technologies.'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code following industry best practices.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'SEO Optimized',
      description: 'Built with search engine optimization in mind from the ground up.'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Modern Design',
      description: 'Contemporary aesthetics that reflect your brand identity.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Security First',
      description: 'Implemented with the latest security best practices and standards.'
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: 'Analytics Ready',
      description: 'Built-in analytics integration for tracking performance.'
    }
  ];

  const websiteTypes = [
    {
      title: "Business Websites",
      description: "Professional websites for companies and organizations",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      features: [
        "Company profile and brand showcase",
        "Service portfolio integration",
        "Team profiles and testimonials",
        "Contact forms and location maps",
        "Blog and news section",
        "Social media integration"
      ]
    },
    {
      title: "E-commerce Stores",
      description: "Feature-rich online stores with complete shopping functionality",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      features: [
        "Product catalog with categories",
        "Shopping cart and wishlist",
        "Secure payment gateway",
        "Inventory management",
        "Order tracking system",
        "Customer accounts"
      ]
    },
    {
      title: "Portfolio Sites",
      description: "Showcase your work and achievements with style",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop",
      features: [
        "Project galleries and filters",
        "Case study presentations",
        "Client testimonials",
        "Achievement highlights",
        "Service offerings",
        "Contact information"
      ]
    },
    {
      title: "Landing Pages",
      description: "High-converting pages optimized for marketing campaigns",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      features: [
        "Compelling call-to-actions",
        "A/B testing capability",
        "Lead capture forms",
        "Analytics integration",
        "Social proof elements",
        "Mobile optimization"
      ]
    }
  ];

  const technologies = [
    {
      icon: <Laptop className="h-12 w-12" />,
      title: "Modern Frontend",
      items: ["React", "Next.js", "Vue.js", "TypeScript"]
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Backend Solutions",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile-First",
      items: ["Responsive Design", "Progressive Web Apps", "Touch Optimization"]
    },
    {
      icon: <Gauge className="h-12 w-12" />,
      title: "Performance",
      items: ["Code Splitting", "Lazy Loading", "Image Optimization", "Caching"]
    },
    {
      icon: <Lock className="h-12 w-12" />,
      title: "Security",
      items: ["SSL Certificates", "Data Encryption", "Security Headers"]
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "6-Hour Website Creation Service",
    "provider": {
      "@type": "Organization",
      "name": "Planckk Technologies"
    },
    "description": "Professional website development service with 6-hour delivery guarantee",
    "areaServed": ["Chennai", "Mumbai", "Pune", "Hyderabad"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "6-Hour Website Development",
            "description": "Get your professional website delivered in just 6 hours"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="6-Hour Website Creation Service | Professional Web Development"
        description="Get your professional website delivered in just 6 hours. Responsive design, lightning-fast performance, and SEO-optimized websites for your business."
        schema={schema}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'Website Creation', item: '/services/website-creation' }
        ]}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <motion.section
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          className="relative min-h-[90vh] flex items-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 overflow-hidden"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2850"
              alt="Website Creation"
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
              <div className="inline-block mb-4 px-6 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold">
                🚀 6-Hour Website Delivery
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Websites<br />in Just 6 Hours
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your online presence with our rapid website development service.
                Get a stunning, fully-functional website tailored to your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  View Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "100+", label: "Websites Delivered" },
                { number: "6hrs", label: "Average Delivery Time" },
                { number: "99%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-lg"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <motion.section
          ref={featuresRef}
          initial={{ opacity: 0, y: 20 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Everything You Need in a Website
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                Comprehensive features for a powerful online presence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
                >
                  <div className="text-blue-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
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
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our 6-Hour Process
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                Efficient workflow for rapid delivery without compromising quality
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { 
                  number: '01',
                  title: 'Consultation',
                  description: 'Quick requirements gathering',
                  time: '30 minutes'
                },
                { 
                  number: '02',
                  title: 'Design',
                  description: 'Rapid prototyping & design',
                  time: '2 hours'
                },
                { 
                  number: '03',
                  title: 'Development',
                  description: 'Fast-paced development',
                  time: '3 hours'
                },
                { 
                  number: '04',
                  title: 'Delivery',
                  description: 'Testing & launch',
                  time: '30 minutes'
                },
              ].map((step, index) => (
                <div key={step.number} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={processInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg relative z-10"
                  >
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {step.number}
                    </div>
                    <div className="pt-4">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <p className="text-blue-600 font-semibold">{step.time}</p>
                    </div>
                  </motion.div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-blue-200 transform -translate-y-1/2 z-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Website Types Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Website Solutions
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                Choose the perfect website type for your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {websiteTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold text-white">{type.title}</h3>
                        <p className="text-white/80">{type.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                Built with modern technologies for optimal performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="text-blue-600 mb-4 flex justify-center">{tech.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{tech.title}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, i) => (
                      <li key={i} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Recent Projects
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                Websites we've delivered in 6 hours
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "EA Global",
                  image: "/images/img1.png",
                  description: "A complete website for EA Global",
                  features: ["Educational platform", "User management", "Course delivery"]
                },
                {
                  title: "EduPowr Counselling",
                  image: "/images/img2.png",
                  description: "A complete website for EduPowr Counselling",
                  features: ["Counselling services", "Appointment booking", "Resource center"]
                },
                {
                  title: "LED Lighting Company",
                  image: "/images/img5.png",
                  description: "A website for an LED lighting company",
                  features: ["Product showcase", "Technical specifications", "Quote requests"]
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Client Testimonials
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                What our clients say about our 6-hour delivery
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Incredible service! They delivered our e-commerce website in just 6 hours, exactly as promised. The quality and attention to detail exceeded our expectations.",
                  author: "Sarah Johnson",
                  role: "E-commerce Owner",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                },
                {
                  quote: "The speed and quality of their work is outstanding. Our corporate website looks professional and modern. They understood our requirements perfectly.",
                  author: "Michael Chen",
                  role: "CEO, Tech Solutions",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                },
                {
                  quote: "Amazing experience! They transformed our online presence in just a few hours. The website is beautiful, fast, and exactly what we needed.",
                  author: "Emma Davis",
                  role: "Marketing Director",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg relative"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="pt-8">
                    <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="font-semibold text-gray-800">{testimonial.author}</div>
                    <div className="text-blue-600">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <h2 className="text-4xl font-bold mb-8">
              Ready to Launch Your Website in 6 Hours?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get started now and have your website live by the end of the day
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors duration-200 flex items-center mx-auto hover:bg-blue-50 shadow-lg"
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

export default WebsiteCreation;