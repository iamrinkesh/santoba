import React from 'react'
import HeadingComponent from '../components/Heading/Heading'
import WeddingCard from '../components/Card/WeddingCard'
import ImageCard from '../components/Card/ImageCard'

const index = () => {
  return (
    <div className='text-white'>
      <HeadingComponent
        heading="WEDDING"
      />
      {/* Paragraph Section */}
      <section className="text-center max-w-2xl mx-auto">
        <p className="text-gray-300 leading-relaxed lkbuk-font lkbuk-line-height lkbuk-font-weight">
          For your special day, only perfection will do. Santoba Tailors offers bespoke wedding attire that exudes elegance, sophistication, and a personal touch. From the groom to the wedding party, we craft timeless pieces ensuring everyone looks their best.
        </p>
      </section>
      <section className="grid grid-cols-3 gap-10 pl-5 pr-5 mt-12">
        <ImageCard imageSrc="/images/card1.png" source="wedding" />
        <ImageCard imageSrc="/images/card2.png" source="wedding"/>
        <ImageCard imageSrc="/images/card3.png" source="wedding"/>
      </section>
    </div>
  )
}

export default index