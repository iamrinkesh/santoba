import React from 'react';
import HeadingComponent from '../components/Heading/Heading';
import Image from 'next/image';

const BlogSubject = () => {
  return (
    <div className="text-white pl-20 pr-20">
      <HeadingComponent heading="SUBJECT OF THE BLOG" />
      {/* Main Blog Content */}
      <p className="mt-4 text-m-200 max-w-6xl mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p className="mt-4 text-m-200 max-w-6xl mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p className="mt-4 text-m-200 max-w-6xl mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      {/* Images Section */}
      <div className="flex space-x-4 pt-20 pb-20">
        <div className="w-[626.67px] h-[359.01px]">
          <img src="/images/blog1.png" alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-[626.67px] h-[359.01px]">
          <img src="/images/blog3.png" alt="Image 2" className="w-full h-full object-cover" />
        </div>
      </div>

      <p className="mt-4 text-m-200 max-w-6xl mx-auto text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      {/* Section 1: Image on the Left, Text on the Right */}
      <div className="flex items-center justify-between py-10 w-full">
        <div className="w-[338px] h-[190.23px]">
          <img src="/images/blog4.png" alt="Left Image" className="w-full h-full object-cover" />
        </div>
        <p className="text-m-200 font-light text-left max-w-3xl pl-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna refhurfhrfjn frnfunf frnufrn
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatrrvvrvjuh rhufrf brubrfh urfhfrrf .r
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ther grtetay shhdie jheifjei kfeofe[eifehf feryf
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturvr rbvurn vrhuvr nruvhuihri nrfvfiuh
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        </p>
      </div>

      {/* Section 2: Text on the Left, Image on the Right */}
      <div className="flex items-center justify-between py-10 w-full flex-row-reverse">
        <div className="w-[338px] h-[190.23px]">
          <img src="/images/blog4.png" alt="Right Image" className="w-full h-full object-cover" />
        </div>
        <p className="text-m-200 font-light text-left max-w-3xl pr-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna refhurfhrfjn frnfunf frnufrn
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatrrvvrvjuh rhufrf brubrfh urfhfrrf .r
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur ther grtetay shhdie jheifjei kfeofe[eifehf feryf
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturvr rbvurn vrhuvr nruvhuihri nrfvfiuh
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        </p>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-stretch gap-12 p-12">
        {/* Service 1 */}
        <div className="w-full md:w-1/3 text-left m-2">
          <Image
            src="/images/wedImg1.jpg"
            alt="Suits & Tuxedos"
            layout="responsive"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
          <h3 className="mt-4 text-m">Three Great Options For Your Wedding Suit</h3>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        {/* Service 2 */}
        <div className="w-full md:w-1/3 text-left m-2">
          <Image
            src="/images/wedImg1.jpg"
            alt="Shirts & Trousers"
            layout="responsive"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
          <h3 className="mt-4 text-m">Three Great Options For Your Wedding Suit</h3>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
        {/* Service 3 */}
        <div className="w-full md:w-1/3 text-left m-2">
          <Image
            src="/images/wedImg1.jpg"
            alt="Jackets"
            layout="responsive"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
          <h3 className="mt-4 text-m">Three Great Options For Your Wedding Suit</h3>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogSubject;
