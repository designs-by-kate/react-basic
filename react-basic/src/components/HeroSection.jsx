import React from 'react';
import backgroundImage from '../assets/BG.jpg';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Your Awesome Title</h1>
        <p className="text-lg sm:text-xl mt-4">A catchy subtitle goes here</p>
        <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Login</button>
      </div>
    </div>
  );
};

export default HeroSection;
