import React from 'react';
import { FaSearch } from 'react-icons/fa';

const FAQ = () => {
  return (
    <div className="bg-gray-900 text-white px-8 py-16 min-h-screen flex flex-col">
      {/* Search Bar at the Top Center */}
      <div className="flex justify-center mb-12">
        <div className="w-full max-w-md text-center">
          <h2 className="text-sm tracking-wide mb-4 text-gray-400">YOUR QUERIES</h2>
          <div className="relative">
            <input
              type="text"
              className="w-full bg-gray-800 border border-gray-700 py-2 pl-4 pr-10 text-gray-300 focus:outline-none"
              placeholder="Search..."
            />
            <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* FAQ Section Split into Two Halves */}
      <div className="flex flex-1 p-6">
        {/* Left Half: FAQ Heading */}
        <div className="w-1/2 flex">
          <h1 className="text-6xl font-light tracking-widest">FAQ</h1>
        </div>

        {/* Right Half: FAQ Items */}
        <div className="w-1/2 pl-16">
          <ul className="space-y-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className="flex items-center">
                {/* Number */}
                <span className="text-gray-500 text-sm mr-4">{`0${index + 1}.`}</span>

                {/* FAQ Text and Line */}
                <div className="flex-1 relative border-b border-white-800">
                  <span className="text-lg text-gray-300 tracking-wide">
                    WHAT ARE THE THINGS TO CHECK
                  </span>

                  {/* Diagonal Line */}
                  <span
                    className="absolute right-0 bottom-0 transform pt-[5px] rotate-135 w-4 border-t border-white-800 pb-8"
                  ></span>
                  
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
