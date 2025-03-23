import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });

  const blogPosts = [
    {
      title: 'The Future of Digital Marketing in 2025',
      excerpt: 'Explore emerging trends and technologies shaping the future of digital marketing.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      author: 'John Smith',
      date: 'Mar 15, 2024',
      readTime: '5 min read',
      category: 'Digital Marketing',
    },
    {
      title: 'Essential SEO Strategies for 2024',
      excerpt: 'Learn the latest SEO techniques to improve your website\'s visibility.',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop',
      author: 'Emily Chen',
      date: 'Mar 12, 2024',
      readTime: '8 min read',
      category: 'SEO',
    },
    {
      title: 'Video Marketing: A Complete Guide',
      excerpt: 'Everything you need to know about creating effective video marketing campaigns.',
      image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&h=600&fit=crop',
      author: 'David Kumar',
      date: 'Mar 10, 2024',
      readTime: '10 min read',
      category: 'Video',
    },
    {
      title: 'Mobile App Development Trends',
      excerpt: 'Discover the latest trends in mobile app development and user experience.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      author: 'Sarah Wilson',
      date: 'Mar 8, 2024',
      readTime: '6 min read',
      category: 'Development',
    },
    {
      title: 'Social Media Strategy for B2B',
      excerpt: 'Build an effective social media presence for your B2B business.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      author: 'Michael Brown',
      date: 'Mar 5, 2024',
      readTime: '7 min read',
      category: 'Social Media',
    },
    {
      title: 'Web Design Trends for 2024',
      excerpt: 'Stay ahead with the latest web design trends and user interface innovations.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      author: 'Lisa Chen',
      date: 'Mar 3, 2024',
      readTime: '9 min read',
      category: 'Design',
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
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and news in the digital world
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/80 mb-8">
            Get the latest articles and insights delivered straight to your inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;