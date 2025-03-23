import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Planckk
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Empowering businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services#video" className="text-gray-600 hover:text-blue-600 transition-colors">Video Editing</Link></li>
              <li><Link to="/services#web" className="text-gray-600 hover:text-blue-600 transition-colors">Website Creation</Link></li>
              <li><Link to="/services#digital" className="text-gray-600 hover:text-blue-600 transition-colors">Digital Transformation</Link></li>
              <li><Link to="/services#marketing" className="text-gray-600 hover:text-blue-600 transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Phone: 984107679</li>
              <li>Email: info@planckk.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Planckk Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;