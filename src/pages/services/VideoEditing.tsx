import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, Film, Edit, Upload, Play, CheckCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';

const VideoEditing = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [processRef, processInView] = useInView({ triggerOnce: true });

  const features = [
    {
      icon: <Film className="h-8 w-8" />,
      title: 'Professional Editing',
      description: 'High-quality video editing with attention to detail and storytelling.'
    },
    {
      icon: <Edit className="h-8 w-8" />,
      title: 'Color Grading',
      description: 'Advanced color correction and grading for cinematic quality.'
    },
    {
      icon: <Upload className="h-8 w-8" />,
      title: 'Quick Turnaround',
      description: 'Fast delivery without compromising on quality.'
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: 'Multiple Formats',
      description: 'Support for all major video formats and platforms.'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Professional Video Editing Service",
    "provider": {
      "@type": "Organization",
      "name": "Planckk Technologies"
    },
    "description": "Professional video editing service with quick turnaround time",
    "areaServed": ["Chennai", "Mumbai", "Pune", "Hyderabad"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Video Editing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Video Editing",
            "description": "High-quality video editing with quick turnaround"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead 
        title="Professional Video Editing Services | Planckk Technologies"
        description="Transform your raw footage into compelling content with our professional video editing services. Quick turnaround, color grading, and multiple format support."
        schema={schema}
        breadcrumbs={[
          { name: 'Home', item: '/' },
          { name: 'Services', item: '/services' },
          { name: 'Video Editing', item: '/services/video-editing' }
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
                Professional Video Editing Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your raw footage into compelling content that engages your audience and tells your story effectively.
              </p>
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={headerInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=600&fit=crop"
                alt="Video Editing Service"
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
                Our Video Editing Expertise
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
                Our Editing Process
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '01', title: 'Review', description: 'Analyze raw footage' },
                { number: '02', title: 'Edit', description: 'Cut and arrange content' },
                { number: '03', title: 'Enhance', description: 'Add effects and color grade' },
                { number: '04', title: 'Deliver', description: 'Export in desired format' },
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

        {/* Portfolio Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Video Portfolio
              </h2>
              <p className="text-xl text-gray-600 mt-4">
                Check out some of our recent video editing projects
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Corporate Overview",
                  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
                  category: "Corporate"
                },
                {
                  title: "Product Launch",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
                  category: "Marketing"
                },
                {
                  title: "Event Highlights",
                  image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&h=600&fit=crop",
                  category: "Events"
                }
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-xl shadow-lg"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-white/80">{project.category}</p>
                    </div>
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
              Ready to Transform Your Videos?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let us help you create compelling video content that engages your audience
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

export default VideoEditing;