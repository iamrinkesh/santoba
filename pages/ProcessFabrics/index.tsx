import React from 'react';
import Image from 'next/image';
import HeadingComponent from '../components/Heading/Heading';

const ProcessFabrics = () => {
  return (
    <div className="text-white max-w-screen-lg mx-auto py-10 px-6">
      {/* Paragraph Section */}
      <section className="mb-12">
        <p className="font-gilroy text-[20px] font-light leading-[30.6px] text-center text-gray-300">
          Our bespoke process is designed to ensure every garment meets the highest standards of
          craftsmanship, from consultation to completion.
        </p>
      </section>

      {/* Heading Section */}
      <HeadingComponent heading="OUR PROCESS" />

      {/* Circle and Images Section */}
      <div className="relative flex justify-center items-center min-h-[600px]">
        {/* Ellipse Image */}
        <Image
          src="/images/ellipse.png"
          alt="Ellipse"
          width={344}
          height={344}
          className="absolute"
        />

        {/* Vertical Rectangle Line */}
        <Image
          src="/images/line-vertical.png"
          alt="Vertical Line"
          width={13}
          height={397}
          className="absolute"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        />

        {/* Horizontal Rectangle Line */}
        <Image
          src="/images/line-horizontal.png"
          alt="Horizontal Line"
          width={397}
          height={13}
          className="absolute"
        />

        {/* Small Circle in the Center */}
        <Image
          src="/images/small-ellipse.png"
          alt="Small Circle"
          width={105}
          height={105}
          className="absolute"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />

        {/* Top Left Image */}
        <Image
          src="/images/process-tl.png"
          alt="Top Left"
          width={100}
          height={100}
          className="absolute"
          style={{ top: '28%', left: '36%' }}
        />

        {/* Top Right Image */}
        <Image
          src="/images/process-tr.png"
          alt="Top Right"
          width={100}
          height={100}
          className="absolute"
          style={{ top: '28%', right: '36%' }}
        />

        {/* Bottom Left Image */}
        <Image
          src="/images/process-bl.png"
          alt="Bottom Left"
          width={100}
          height={100}
          className="absolute"
          style={{ bottom: '28%', left: '36%' }}
        />

        {/* Bottom Right Image */}
        <Image
          src="/images/process-br.png"
          alt="Bottom Right"
          width={100}
          height={100}
          className="absolute"
          style={{ bottom: '28%', right: '36%' }}
        />

        {/* Paragraph Heading and Paragraph on Four Sides of the Ellipse */}
        
        {/* Top Left */}
        <div className="absolute top-36 left-[-5.5rem] w-[366px] h-[63px]">
          <h3 className="text-[18px] font-medium leading-[21.94px] text-white text-right pb-2 uppercase">
            Personal Consultation
          </h3>
          <p className="font-gilroy text-[16px] font-light leading-[21px] text-gray-300 text-right">
            Begin with a tailored consultation, guided by our expert tailors to select from a range of premium fabric
          </p>
        </div>

        {/* Top Right */}
        <div className="absolute top-36 right-[-5.5rem] w-[366px] h-[63px]">
          <h3 className="text-[18px] font-medium leading-[21.94px] text-white pb-2 uppercase">
            Design & Customization
          </h3>
          <p className="font-gilroy text-[16px] font-light leading-[21px] text-gray-300">
            Collaborate with our stylists to design every detail, from cut to finishing touches
          </p>
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-44 left-[-5.5rem] w-[366px] h-[63px]">
          <h3 className="text-[18px] font-medium leading-[21.94px] text-white text-right pb-2 uppercase">
            Master Craftsmanship
          </h3>
          <p className="font-gilroy text-[16px] font-light leading-[21px] text-gray-300 text-right">
            Your garment is expertly crafted, blending traditional methods with refined
            contemporary techniques.
          </p>
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-44 right-[-5.5rem] w-[366px] h-[63px]">
          <h3 className="text-[18px] font-medium leading-[21.94px] text-white pb-2 uppercase">
            Precision Fitting
          </h3>
          <p className="font-gilroy text-[16px] font-light leading-[21px] text-gray-300">
            Return for a fitting where any adjustments are made, ensuring the perfect fit and
            finish
          </p>
        </div>
      </div>
      <HeadingComponent heading="OUR FABRICS" />
      <div className="flex justify-between items-center mt-16 w-full">
        {/* Left Side Paragraph (2/4 Width) */}
        <div className="w-1/2 pr-8">
          <p className="text-left text-[24.8px] font-medium text-gray-300">
            Discover our selection of luxury fabrics from the world’s top mills, including Zegna,
            Drago, Guabello, Reda, Loro Piana, and more
          </p>
        </div>

        {/* Center Section with 5 Images (1/4 Width) */}
        <div className="w-1/4 flex flex-col items-center space-y-6 pl-12">
          {/* Image 1 */}
          <Image
            src="/images/fabrics-l-1.png"
            alt="Fabric 1"
            width={148.27}
            height={82.54}
            className="w-[148.27px] h-[82.54px] absolute top-[72rem]"
          />

          {/* Image 2 */}
          <Image
            src="/images/fabrics-l-2.png"
            alt="Fabric 2"
            width={183.24}
            height={38.57}
            className="w-[183.24px] h-[38.57px] absolute top-[79rem]"
          />

          {/* Image 3 */}
          <Image
            src="/images/fabrics-l-3.png"
            alt="Fabric 3"
            width={228}
            height={32.25}
            className="w-[228px] h-[32.25px] absolute top-[86rem]"
          />

          {/* Image 4 */}
          <Image
            src="/images/fabrics-l-4.png"
            alt="Fabric 4"
            width={187.44}
            height={187.44}
            className="w-[187.44px] h-[187.44px] absolute top-[88rem]"
          />

          {/* Image 5 */}
          <Image
            src="/images/fabrics-l-5.png"
            alt="Fabric 5"
            width={176}
            height={97}
            className="w-[176px] h-[97px] absolute top-[97rem]"
          />
        </div>

        {/* Right Side Image (1/4 Width) */}
        <div className="w-1/4 pl-10 flex justify-end">
          <Image
            src="/images/fabric-large.png"
            alt="Large Fabric"
            width={369}
            height={558}
            className="w-[369px] h-[558px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessFabrics;
