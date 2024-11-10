import React from 'react';
import { FaAngleUp } from 'react-icons/fa6';

const HeadingComponent = ({ heading, paragraph, links }) => {
  return (
    <div className="max-w-screen-lg mx-auto text-center space-y-4 py-8 text-white">
      {/* First Row - Heading with Fading Vector Lines and Icons */}
      <div className="flex items-center justify-center gap-4">
        {/* Left Gradient Line with Icon */}
        <div className="relative flex-grow h-px bg-gradient-to-r from-whiteFade to-whiteSolid">
          <FaAngleUp className="absolute -right-2 top-[-1px] transform -translate-y-1/2 text-white w-[9px]" size={20} />
        </div>

        {/* Heading */}
        <h1 className="text-custom-heading px-20 font-playfair font-light leading-custom-line text-white">
          {heading}
        </h1>

        {/* Right Gradient Line with Icon */}
        <div className="relative flex-grow h-px bg-gradient-to-l from-whiteFade to-whiteSolid">
          <FaAngleUp className="absolute -left-2 top-[-1px] transform -translate-y-1/2 text-white w-[9px]" size={20} />
        </div>
      </div>

      {/* Second Row - Paragraph */}
      {paragraph && <p className="text-lg text-gray-300">{paragraph}</p>}

      {/* Third Row - Links */}
      {links && (
        <div className="flex justify-center space-x-4 text-nav-font-size text-gray-400">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-white">
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeadingComponent;
