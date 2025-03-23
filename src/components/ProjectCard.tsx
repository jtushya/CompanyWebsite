import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  category,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <span className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ExternalLink size={18} className="mr-1" />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-700 transition-colors"
            >
              <Github size={18} className="mr-1" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;