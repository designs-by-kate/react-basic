import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, CircleUser, FolderGit2, Images, Phone, ArrowLeft, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: CircleUser },
    { path: '/projects', label: 'Projects', icon: FolderGit2 },
    { path: '/gallery', label: 'Gallery', icon: Images },
    { path: '/contact', label: 'Contact', icon: Phone }
  ];

  const location = useLocation();
  const [showLabels, setShowLabels] = useState(false);

  const toggleLabels = () => {
    setShowLabels(!showLabels);
  };

  return (
    <div>
      <div className="block">
        {/* Burger icon */}
        <button className="text-gray-800 p-2 focus:outline-none">
          <Menu />
        </button>
        {/* Arrow icons */}
        <button onClick={toggleLabels} className="text-gray-800 p-2 focus:outline-none">
          {showLabels ? <ArrowLeft /> : <ArrowRight />}
        </button>
        {/* Navbar links */}
        <ul className="flex flex-col">
          {navLinks.map((link, index) => (
            <li key={index} className="md:mr-6">
              <Link
                to={link.path}
                className={`text-gray-800 hover:bg-gray-200 px-4 py-2 rounded flex items-center ${
                  location.pathname === link.path ? 'bg-gray-200' : ''
                }`}
              >
                <link.icon size={20} className="mr-2" />
                {showLabels && link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
