// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white p-4 relative z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1"></div>
        <p className="text-center flex-1">&copy; {new Date().getFullYear()} Mridula Chowdhary. All rights reserved.</p>
        <div className="flex justify-end space-x-6 flex-1">
          <a href="https://www.linkedin.com/in/mridula-chowdhary/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/mridula-chowdhary" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition duration-300">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://x.com/Mridula_11" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300">
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
