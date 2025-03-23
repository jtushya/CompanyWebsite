import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'EA Global',
    image: '/images/img1.png',
    link: 'https://englisharenaglobal.com?ref=planckk',
    description: 'A complete website for EA Global.'
  },
  {
    title: 'EduPowr Counselling',
    image: '/images/img2.png',
    link: 'https://counselling.englisharenaglobal.com/o',
    description: 'A complete website for EduPowr Counselling.'
  },
  {
    title: 'LED Lighting Company',
    image: '/images/img5.png',
    link: '',
    description: 'A website for an LED lighting company.'
  },
  {
    title: 'Mental Health Chat Bot',
    image: '/images/img4.png',
    link: '',
    description: 'A mental health chat bot.'
  }
];

const Portfolio = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });

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
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of successful projects and see how we've helped businesses transform their digital presence. All projects were completed in less than 6 hours.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  {project.link ? (
                    <a
                      href={project.link}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Site
                    </a>
                  ) : (
                    <span className="text-gray-400">Link not available</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;