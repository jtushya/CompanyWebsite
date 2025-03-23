import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase } from 'lucide-react';

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  department,
  location,
  type,
  description,
  requirements,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-blue-600">{department}</p>
        </div>
        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
          {type}
        </span>
      </div>
      
      <div className="flex space-x-4 mb-4 text-gray-600 text-sm">
        <div className="flex items-center">
          <MapPin size={16} className="mr-1" />
          {location}
        </div>
        <div className="flex items-center">
          <Clock size={16} className="mr-1" />
          {type}
        </div>
        <div className="flex items-center">
          <Briefcase size={16} className="mr-1" />
          {department}
        </div>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
        <ul className="space-y-2">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
              {req}
            </li>
          ))}
        </ul>
      </div>
      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-200">
        Apply Now
      </button>
    </motion.div>
  );
};

export default JobCard;