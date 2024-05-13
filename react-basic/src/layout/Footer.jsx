import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2024 YourWebsite. All rights reserved.</p>
            <p>Designed by Designs-by-Kate</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="hover:text-gray-400">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-gray-400">
              Contact Us
            </Link>
            <Link to="/privacy" className="hover:text-gray-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
