import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, CircleUser, FolderGit2, Images, Phone } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: CircleUser },
    { path: '/projects', label: 'Projects', icon: FolderGit2 },
    { path: '/gallery', label: 'Gallery', icon: Images },
    { path: '/contact', label: 'Contact', icon: Phone }
  ];

  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-16 left-0 w-full z-40 bg-gray-800 text-white shadow-md">
      <div className="flex justify-between items-center py-4 px-8">
        <div className="block md:hidden">
          {/* Burger icon */}
          <button onClick={toggleMenu} className="text-gray-400 p-2 focus:outline-none">
            <Menu />
          </button>
        </div>
        {/* Navbar links */}
        <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          {navLinks.map((link, index) => (
            <li key={index} className="md:mr-6">
              <Link
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-200 hover:bg-gray-600 px-4 py-2 rounded flex items-center ${
                  location.pathname === link.path ? 'bg-gray-600' : ''
                }`}
              >
                <link.icon size={20} className="mr-2" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
