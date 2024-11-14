import React from 'react';
import HeadingComponent from '../components/Heading/Heading';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="text-white max-w-screen-xl mx-auto px-8">
      <HeadingComponent heading="ABOUT US" />

      <section className="flex flex-col md:flex-row items-center justify-between mt-12 gap-12">
        {/* Left Side: Text Section */}
        <div className="w-full md:w-1/2 space-y-6 md:pr-20">
          <h2 className="font-playfair text-[47.18px] font-medium leading-[64.54px] text-left">
            A FAMILY LEGACY OF CRAFTSMANSHIP AND DEDICAITION,
          </h2>
          <p className="text-[16.33px] font-light leading-[33.41px] text-left text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea Taliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea
          </p>
        </div>

        {/* Right Side: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:pl-6 pl-10">
          <Image
            src="/images/about-us.png" // Replace with your actual image path
            alt="About Us"
            width={677}
            height={677}
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;