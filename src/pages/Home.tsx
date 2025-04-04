import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Video, 
  Globe, 
  Smartphone, 
  Share2, 
  TrendingUp, 
  Search, 
  Code, 
  ArrowRight,
  Clock,
  CheckCircle,
  Zap,
  Award
} from 'lucide-react';

const services = [
  {
    icon: <Video className="h-8 w-8" />,
    title: 'Video Editing',
    description: 'Professional video editing services for content creators and businesses.'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Website Creation',
    description: 'Custom website development with rapid 6-hour delivery options.'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Digital Transformation',
    description: 'Complete digital solutions to modernize your business operations.'
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: 'Social Media Management',
    description: 'Strategic social media presence and engagement management.'
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: 'Digital Marketing',
    description: 'Results-driven digital marketing campaigns and strategies.'
  },
  {
    icon: <Search className="h-8 w-8" />,
    title: 'SEO & Google Ads',
    description: 'Search engine optimization and targeted advertising solutions.'
  }
];

const testimonials = [
  {
    content: 'TechWalk delivered our website in just 6 hours! The quality and speed were incredible. They transformed our online presence completely.'
  },
  {
    content: 'The speed and quality of their website development service is unmatched. They delivered exactly what we needed in record time!'
  }
];

const features = [
  {
    icon: <Clock className="h-12 w-12" />,
    title: '6-Hour Delivery',
    description: 'Get your custom website up and running in just 6 hours. No compromises on quality.'
  },
  {
    icon: <CheckCircle className="h-12 w-12" />,
    title: 'Quality Assured',
    description: 'Professional, responsive, and fully-featured websites that meet your needs.'
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: 'Rapid Deployment',
    description: 'Instant deployment with continuous support and maintenance.'
  },
  {
    icon: <Award className="h-12 w-12" />,
    title: 'Expert Team',
    description: 'Skilled developers with years of experience in rapid website delivery.'
  }
];

const stats = [
  { number: '100%', label: 'Client Satisfaction' },
  { number: '6hrs', label: 'Average Delivery Time' },
  { number: '24/7', label: 'Support Available' },
  { number: '5+', label: 'Years of Combined Experience' }
];

const Home = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 pt-00"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920"
            alt="Digital Technology"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
        </div>

        <div className="relative z-10 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-6 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mt-8"
            >
              🚀 Get Your Website in Just 6 Hours!
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Transform Your Digital Presence
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 mb-8"
            >
              Professional websites delivered in record time. No waiting, no compromises.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => navigate('/contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => navigate('/portfolio')}
                className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                View Portfolio
              </button>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Our 6-Hour Website Service?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a professional website faster than ever without compromising on quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
      </section>

      {/* Services Section */}
      <motion.section
        ref={servicesRef}
        initial={{ opacity: 0, y: 20 }}
        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
        className="py-20 px-4 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our 6-Hour Website Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '01', title: 'Consultation', description: 'Quick requirements gathering' },
              { number: '02', title: 'Design', description: 'Rapid prototyping & design' },
              { number: '03', title: 'Development', description: 'Fast-paced development' },
              { number: '04', title: 'Delivery', description: 'Launch within 6 hours' },
            ].map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-6xl font-bold text-blue-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-100 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
        className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <p className="text-gray-600">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Launch Your Website in 6 Hours?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Join hundreds of satisfied clients who got their websites delivered in record time
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-full text-xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center mx-auto"
          >
            Start Your Project Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;