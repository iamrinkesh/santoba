import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { FaGlobe } from 'react-icons/fa';
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { RxCross2 } from 'react-icons/rx';
import HeadingComponent from '../components/Heading/Heading';

const Contact = () => {
  return (
    <div>
    <div className="text-white max-w-screen-xl mx-auto px-8">
      {/* Heading */}
      <HeadingComponent heading="CONTACT US" />

      {/* Main Container */}
      <div className="flex justify-between w-full max-w-6xl mt-16 px-10 ">
        {/* Left Section */}
        <div className="w-2/5 space-y-6">
          <h2 className="text-4xl">
            Ready to Start Your Bespoke Journey
          </h2>
          <p className="text-gray-400">
            Visit our boutique, call us, or book your appointment online.
          </p>
          <address className="text-gray-400 not-italic">
            Address: Showroom #10 & 11, Al Majid Property,<br />
            <p className='pl-16'> Meena Bazar, Bur Dubai, Dubai</p>
          </address>
          <div className="space-y-2">
            {/* Contact Numbers */}
            <p className="flex items-center">
              <IoCallOutline className="text-xl text-gray-400" />
              <span className="ml-2">+971 50 455 4707 / +971 50 425 6989</span>
            </p>

            {/* Email Address */}
            <p className="flex items-center">
              <AiOutlineMail className="text-xl text-gray-400" />
              <span className="ml-2">hello@santobatailors.com</span>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-8 text-gray-400 text-3xl">
            <button aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </button>
            <button aria-label="Website" className="hover:text-white">
              <FaGlobe />
            </button>
            <button aria-label="Twitter" className="hover:text-white">
              <SlSocialTwitter />
            </button>
            <button aria-label="Cross" className="hover:text-white">
              <BsTwitterX />
            </button>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-2/5">
          <h3 className="text-2xl mb-8">Say hello!</h3>
          <form className="space-y-8">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              className="w-[300px] bg-transparent border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none p-2"
            />

            {/* Contact Number Input */}
            <input
              type="text"
              placeholder="Contact no"
              className="w-[300px] bg-transparent border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none p-2"
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email ID"
              className="w-[300px] bg-transparent border-b border-gray-500 text-white placeholder-gray-400 focus:outline-none p-2"
            />

            {/* Content Textarea */}
            <textarea
              placeholder="Content"
              rows="4"
              className="w-full bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none p-2 resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-white text-[#1F2937] text-sm font-light w-full max-w-[200px] px-6 py-3 mt-1 rounded hover:bg-gray-200"
            >
              SEND
            </button>

          </form>
        </div>
      </div>
      
    </div>
    <div className="w-full h-[400px] mt-12">
    <iframe
      className="w-full h-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.4385357302514!2d55.27697547541491!3d25.263284232663775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4326d2ff8c6b%3A0x5f8dba1a3914a60!2sBur%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1697493455121!5m2!1sen!2sae"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  </div>
    
  );
};

export default Contact;
