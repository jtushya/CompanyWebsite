import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import JobCard from '../components/JobCard';
import { Users, Heart, Zap, Trophy } from 'lucide-react';

const Careers = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true });

  const benefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Learning Environment',
      description: 'Work alongside experienced professionals and learn industry best practices.',
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Flexible Schedule',
      description: 'Balance your studies with hands-on work experience.',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Career Growth',
      description: 'Potential for full-time roles upon successful completion.',
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: 'Real Projects',
      description: 'Work on actual client projects and build your portfolio.',
    },
  ];

  const jobs = [
    {
      title: 'Web Development Intern',
      department: 'Engineering',
      location: 'Remote',
      type: 'Internship',
      description: 'Join our engineering team as a web development intern and gain hands-on experience with modern web technologies.',
      requirements: [
        'Currently pursuing B.Tech/B.E in Computer Science or related field',
        'Basic knowledge of HTML, CSS, and JavaScript',
        'Familiarity with React is a plus',
        'Strong willingness to learn',
      ],
    },
    {
      title: 'Digital Marketing Intern',
      department: 'Marketing',
      location: 'Hybrid',
      type: 'Internship',
      description: 'Learn and implement digital marketing strategies while working on real client projects.',
      requirements: [
        'Currently pursuing degree in Marketing/Business/Communications',
        'Understanding of social media platforms',
        'Good communication skills',
        'Creative mindset',
      ],
    },
    {
      title: 'UI/UX Design Intern',
      department: 'Design',
      location: 'Remote',
      type: 'Internship',
      description: 'Learn the principles of user interface and experience design through hands-on project work.',
      requirements: [
        'Currently pursuing degree in Design/Computer Science',
        'Basic knowledge of design tools (Figma/Adobe XD)',
        'Strong visual design sense',
        'Attention to detail',
      ],
    },
  ];

  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    position: string;
    education: string;
    resume: File | null;
  }>({
    name: '',
    email: '',
    phone: '',
    position: '',
    education: '',
    resume: null,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, resume: file });
  };

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
              Start Your Career Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch your career with our internship program. Gain real-world experience while completing your studies.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Intern With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="text-blue-600 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Available Internships
          </h2>
          <div className="grid gap-8">
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                {...job}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Apply Now
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                Position Applied For
              </label>
              <select
                id="position"
                name="position"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
              >
                <option value="">Select a position</option>
                <option value="web-dev">Web Development Intern</option>
                <option value="marketing">Digital Marketing Intern</option>
                <option value="design">UI/UX Design Intern</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                Current Education
              </label>
              <textarea
                id="education"
                name="education"
                rows={3}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your current education, year of study, and institution"
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                Resume/CV
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleFileChange}
              />
              <p className="mt-1 text-sm text-gray-500">PDF, DOC, or DOCX (Max 2MB)</p>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors duration-200 font-semibold"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;