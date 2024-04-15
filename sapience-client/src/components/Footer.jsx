import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-lg mb-3">MoocLab</h2>
            <ul className="space-y-1">
              <li><a href="/about" className="hover:text-gray-300">About us</a></li>
              <li><a href="/help" className="hover:text-gray-300">Help</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-3">Resources</h2>
            <ul className="space-y-1">
              <li><a href="/guides" className="hover:text-gray-300">Guides</a></li>
              <li><a href="/courses" className="hover:text-gray-300">Courses</a></li>
              <li><a href="/providers" className="hover:text-gray-300">Course Providers</a></li>
              <li><a href="/rankings" className="hover:text-gray-300">Rankings</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-3">Community</h2>
            <ul className="space-y-1">
              <li><a href="/hub" className="hover:text-gray-300">Hub</a></li>
              <li><a href="/study-buddy" className="hover:text-gray-300">Find a Study Buddy</a></li>
              <li><a href="/groups" className="hover:text-gray-300">Study Groups</a></li>
              <li><a href="/tracker" className="hover:text-gray-300">Course Tracker</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-3">For Course Providers</h2>
            <ul className="space-y-1">
              <li><a href="/list" className="hover:text-gray-300">List, manage and promote your courses</a></li>
            </ul>
            <div className="mt-4">
              <h2 className="font-bold text-lg mb-3">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} MoocLab. All rights reserved.</p>
            <ul className="flex space-x-6">
              <li><a href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
