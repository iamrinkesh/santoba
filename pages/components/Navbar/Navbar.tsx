import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-gradient-to-b from-transparent to-black z-50 shadow-md">
      <div className="p-5 max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo (Left Side) */}
        <div className="text-white text-xl font-semibold">
          <Link href="/">
            <Image src="/images/logo.png" width={129} height={184} alt="Logo" />
          </Link>
        </div>

        {/* Center Menu (Desktop) */}
        <div className="hidden md:flex space-x-6 text-white font-nav-font-weight text-nav-font-size leading-nav-line-height items-center">
          <Link href="/HomePage">HOME</Link>
          <Link href="/AboutUs">ABOUT US</Link>
          <Link href="/Wedding">WEDDING</Link>
          <Link href="/Corporates">CORPORATES</Link>
          <Link href="/Services">SERVICES</Link>
          <Link href="/ProcessFabrics">PROCESS & FABRICS</Link>
          <Link href="/Lookbook">LOOKBOOK</Link>
          <Link href="/Blog">BLOG</Link>
          <Link href="/Contact">CONTACT US</Link>
        </div>

        {/* "Book a Consultation" Button (Right Side) */}
        <div className="hidden md:block">
          <button className="bg-white text-black py-2 px-6 hover:bg-gray-200 focus:outline-none transition duration-300 text-nav-font-size">
            BOOK A CONSULTATION
          </button>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white py-4 px-6">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="block py-2">Home</Link>
            </li>
            <li>
              <Link href="/about" className="block py-2">About</Link>
            </li>
            <li>
              <Link href="/services" className="block py-2">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
