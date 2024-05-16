import React, { useState } from 'react';
import projects from '../data/gallery.json';

const ImageGallery = () => {
  const [flippedImage, setFlippedImage] = useState(null);

  const handleClick = (imageSrc) => {
    setFlippedImage(flippedImage === imageSrc ? null : imageSrc);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex">
        {projects.map(project => (
          <div key={project.id} className="flex-none p-4">
            <div className="flex">
              <div key={project.id} className="flex-none p-4">
                <div
                  className="relative w-72 h-64 cursor-pointer"
                  onClick={() => handleClick(project.image)}
                >
                  <div
                    className={`absolute inset-0 bg-white border border-gray-200 rounded-lg overflow-hidden transform ${
                      flippedImage === project.image ? 'rotate-y-180' : ''
                    } transition-transform`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 bg-white border border-gray-200 rounded-lg overflow-hidden transform rotate-y-180 ${
                      flippedImage === project.image ? '' : 'hidden'
                    } transition-transform`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-center">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
