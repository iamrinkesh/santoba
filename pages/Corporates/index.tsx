import React from "react";
import Image from "next/image"; // Import Next.js Image component
import HeadingComponent from "../components/Heading/Heading";

const index = () => {
  return (
      <div className="text-white">
        <HeadingComponent heading="CORPORATES" />
        <p className="mt-4 text-m-200 max-w-3xl mx-auto text-center">
          Transform your professional wardrobe with our tailored corporate
          packages. Whether you need everyday suits, business-casual attire, or
          versatile blazers, Santoba Tailors brings style, comfort, and
          confidence to your workplace.
        </p>

        {/* Images Section with Padding and Adjusted Width */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-stretch gap-8">
          <div className="w-full md:w-[30%]">
            <Image
              src="/images/wedImg1.jpg"
              alt="Groom and wedding party in elegant setting"
              layout="responsive"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-[30%]">
            <Image
              src="/images/wedImg1.jpg"
              alt="Groomsmen walking together in black and white"
              layout="responsive"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-[30%]">
            <Image
              src="/images/wedImg1.jpg"
              alt="Groom and groomsmen in classic attire"
              layout="responsive"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <p className="p-10 mt-4 text-m-200 max-w-3xl mx-auto text-center">
          Transform your professional wardrobe with our tailored corporate
          packages. Whether you need everyday suits, business-casual attire, or
          versatile blazers, Santoba Tailors brings style, comfort, and
          confidence to your workplace.
        </p>

        {/* Button Section */}
        <div className="m-4 flex justify-center items-center">
          <button className="bg-white text-black py-2 px-6 hover:bg-gray-200 focus:outline-none transition duration-300 text-nav-font-size">
            BOOK A CONSULTATION
          </button>
        </div>

        {/* Additional Images Section with Padding and Adjusted Width */}
        <div className="mt-8 flex flex-col md:flex-row justify-center items-stretch gap-8">
          <div className="w-full md:w-[30%]">
            <Image
              src="/images/wedImg1.jpg"
              alt="Groom and wedding party in elegant setting"
              layout="responsive"
              width={400}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-[30%]">
            <Image
              src="/images/wedImg1.jpg"
              alt="Groomsmen walking together in black and white"
              layout="responsive"
              width={400}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="w-full md:w-[30%]">
            <Image
              src="/images/wedImg1.jpg"
              alt="Groom and groomsmen in classic attire"
              layout="responsive"
              width={400}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* View More Button */}
        <div className="m-8 p-8 flex justify-center items-center">
          <button className="bg-white w-225 text-black py-2 px-6 hover:bg-gray-200 focus:outline-none transition duration-300 text-nav-font-size">
            VIEW MORE
          </button>
        </div>
      </div>
  );
};

export default index;
