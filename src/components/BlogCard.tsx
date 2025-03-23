import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  image,
  author,
  date,
  readTime,
  category,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            {author}
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            {readTime}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;