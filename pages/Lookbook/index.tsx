import React from 'react';
import HeadingComponent from '../components/Heading/Heading';
import ImageCard from '../components/Card/ImageCard';

const index = () => {
  return (
    <div className="text-white max-w-screen-lg mx-auto space-y-8">
      <HeadingComponent heading="LOOK BOOK" />

      {/* Paragraph Section */}
      <section className="text-center max-w-2xl mx-auto">
        <p className="text-gray-300 leading-relaxed lkbuk-font lkbuk-line-height lkbuk-font-weight">
          Explore our curated collection of tailored suits, jackets, shirts, trousers, and wedding attire.
          Each piece is designed to reflect the elegance and sophistication of Santoba Tailors' bespoke experience.
        </p>
      </section>

      <section className="flex justify-center items-center space-x-4 mt-8">
        {['ALL', 'CASUAL', 'SUMMER', 'CORPORATE', 'WEDDING', 'WOMENS'].map((menu, index) => (
          <React.Fragment key={menu}>
            <a
              href="#"
              className="hover:text-gray-400 text-nav-font-size font-light"
            >
              {menu}
            </a>
            {index < 5 && <span className="text-gray-500">|</span>}
          </React.Fragment>
        ))}
      </section>

      <section className="grid grid-cols-3 gap-0 mt-12">
        <ImageCard imageSrc="/images/card1.png" />
        <ImageCard imageSrc="/images/card2.png" />
        <ImageCard imageSrc="/images/card3.png" />
        <ImageCard imageSrc="/images/card4.png" />
        <ImageCard imageSrc="/images/card5.png" />
        <ImageCard imageSrc="/images/card6.png" />
        <ImageCard imageSrc="/images/card7.png" />
        <ImageCard imageSrc="/images/card8.png" />
        <ImageCard imageSrc="/images/card9.png" />
      </section>
    </div>
  );
};

export default index;
