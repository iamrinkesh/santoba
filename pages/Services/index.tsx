import React from "react";
import Image from "next/image"; // Import Next.js Image component
import HeadingComponent from "../components/Heading/Heading";

const index = () => {
  return (
    <div className="text-white bg-dark-900 px-4">
      {" "}
      {/* Background and padding */}
      <HeadingComponent heading="SERVICES" />
      {/* Description */}
      <p className="mt-4 text-center max-w-4xl mx-auto text-m">
        Discover the full range of services we offer at Santoba Tailors, each
        designed to enhance your style and fit seamlessly into your lifestyle.
      </p>
      {/* Section: Bespoke Tailoring */}
      <h2 className="mt-12 text-center text-xl tracking-wider">
        BESPOKE TAILORING
      </h2>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-stretch gap-12 p-12">
        {/* Service 1 */}
        <div className="w-full md:w-1/3 text-center m-2">
          <Image
            src="/images/wedImg1.jpg"
            alt="Suits & Tuxedos"
            layout="responsive"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
          <h3 className="mt-4 text-m">SUITS & TUXEDOS</h3>
          <p className="mt-2 text-sm">
            Impeccably crafted suits and tuxedos that exude sophistication and
            timeless elegance.
          </p>
        </div>
        {/* Service 2 */}
        <div className="w-full md:w-1/3 text-center m-2">
          <Image
            src="/images/wedImg1.jpg"
            alt="Shirts & Trousers"
            layout="responsive"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
          <h3 className="mt-4 text-m">SHIRTS & TROUSERS</h3>
          <p className="mt-2 text-sm">
            Custom shirts and trousers, expertly tailored to capture the essence
            of refined style and perfect fit.
          </p>
        </div>
        {/* Service 3 */}
        <div className="w-full md:w-1/3 text-center m-2">
          <Image
            src="/images/wedImg1.jpg"
            alt="Jackets"
            layout="responsive"
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
          <h3 className="mt-4 text-m">JACKETS</h3>
          <p className="mt-2 text-sm">
            Bespoke jackets that seamlessly blend heritage craftsmanship with
            modern aesthetics.
          </p>
        </div>
      </div>
      {/* Section: Alterations & Styling */}
      <h2 className="mt-16 text-center text-l tracking-wider">
      ALTERATIONS & STYLING
            </h2>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
        {" "}
        {/* Center items */}
        {/* Service 4 */}
        <div className="w-auto md:w-1/4 text-center">
          {" "}
          {/* Reduce width */}
          <Image
            src="/images/wedImg1.jpg"
            alt="Alterations & Restyling"
            layout="responsive"
            width={300} // Reduced width
            height={200} // Reduced height
            className="rounded-lg object-cover"
          />
          <h3 className="m-4 text-l ">ALTERATIONS & RESTYLING</h3>
          <p className="mt-2 text-sm">
            Masterful alterations and restyling services to enhance the fit and
            refresh the look of your cherished garments.
          </p>
        </div>
        {/* Service 5 */}
        <div className="w-auto md:w-1/4 text-center">
          {" "}
          {/* Reduce width */}
          <Image
            src="/images/wedImg1.jpg"
            alt="Personal Consultations"
            layout="responsive"
            width={300} // Reduced width
            height={200} // Reduced height
            className="rounded-lg object-cover"
          />
          <h3 className="m-4 text-l">PERSONAL CONSULTATIONS</h3>
          <p className="mt-2 text-sm">
            Personalized styling sessions offering expert guidance to define
            your signature style and create a distinctive wardrobe.
          </p>
        </div>
      </div>
      <h2 className="mt-16 text-center text-l tracking-wider">
        FOOTWEAR & ACCECORIES
      </h2>
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
        {" "}
        {/* Center items */}
        {/* Service 4 */}
        <div className="w-auto md:w-1/4 text-center">
          {" "}
          {/* Reduce width */}
          <Image
            src="/images/wedImg1.jpg"
            alt="Alterations & Restyling"
            layout="responsive"
            width={300} // Reduced width
            height={200} // Reduced height
            className="rounded-lg object-cover"
          />
          <h3 className="m-4 text-l ">HOMEMADE SHOES</h3>
          <p className="mt-2 text-sm">
          Masterful
alterations and restyling services to
enhance the fit and refresh the look of
your cherished garments
          </p>
        </div>
        {/* Service 5 */}
        <div className="w-auto md:w-1/4 text-center">
          {" "}
          {/* Reduce width */}
          <Image
            src="/images/wedImg1.jpg"
            alt="Personal Consultations"
            layout="responsive"
            width={300} // Reduced width
            height={200} // Reduced height
            className="rounded-lg object-cover"
          />
          <h3 className="m-4 text-l">ACCESSORIES</h3>
          <p className="mt-2 text-sm">
          Personalized
styling sessions offering expert guidance
to define your signature style and create
a distinctive wardrobe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
