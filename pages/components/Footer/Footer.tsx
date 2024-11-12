import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#171920] text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section (50%) - Split into two sections */}
        <div className="flex-1 md:w-1/2 flex flex-col md:flex-row space-y-4 md:space-y-0 p-6">
          
          {/* Left - Content Section */}
          <div className="md:w-1/2 text-center md:text-left p-2">
            <h3 className="text-m mb-3 text-[#ffffff]">SANTOBA TAILORS</h3>
            <p className="text-xs mb-4">
              Founded in Dubai's Meena Bazar by two visionary brothers, Santoba Tailors has grown into a trusted name in luxury tailoring. Our journey began with a commitment to precision, personalized service, and a refined approach to style.
            </p>
          </div>

          {/* Left - Links Section */}
          <div className="md:w-1/2 text-center md:text-left p-2">
          
            <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:underline">OUR STORY</a></li>
              <li><a href="#" className="hover:underline">BESPOKE</a></li>
              <li><a href="#" className="hover:underline">PROCESS & FABRICS</a></li>
              <li><a href="#" className="hover:underline">LOOK BOOK</a></li>
              <li><a href="#" className="hover:underline">BLOG</a></li>
              <li><a href="#" className="hover:underline">CONTACT US</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-[200px] border-l-2 border-[#333333] mx-4 p-2"></div>

        {/* Right Section (50%) */}
        <div className="flex-1 md:w-1/2 text-center md:text-left space-y-4 pl-4"> {/* Added pl-4 for left padding */}
  <h4 className="mb-2 text-sm">SUBSCRIBE UPDATES</h4>
  <div className="flex justify-center md:justify-start space-x-0">
    <input
      type="email"
      placeholder="ENTER YOUR EMAIL ADDRESS"
      className="px-4 py-4 w-full md:w-80 text-black-800 placeholder-black bg-[#b7b7b7] text-sm"
    />
    <button className="bg-white text-[#171920] hover:bg-gray-200 text-sm px-6 py-4">
      SUBSCRIBE
    </button>
  </div>

  <h4 className="text-sm">CONNECT</h4>
  <div className="flex justify-center md:justify-start space-x-4">
    <a href="#" className="text-white hover:text-gray-400 text-xs">Instagram</a>
    <a href="#" className="text-white hover:text-gray-400 text-xs">Twitter</a>
    <a href="#" className="text-white hover:text-gray-400 text-xs">Facebook</a>
  </div>

  <button className="bg-white text-[#171920] hover:bg-gray-700 mt-4 px-4 py-4 text-sm">
    BOOK A CONSULTATION
  </button>
</div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs mt-10">
        <p>COPYRIGHT © 2024 SANTOGA TAILORS. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
