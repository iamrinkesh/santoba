import Image from 'next/image';
import React from 'react';

const WeddingCard = ({ imageSrc, source }) => {
  const dimensions = source === 'wedding'
        ? { width: 460.32, height: 345.95 }
        : { width: 504, height: 684 };
        
  return (
    <div className="transition-opacity duration-300">
      <Image
        className="w-full h-full object-cover"
        src={imageSrc}
        width={dimensions.width}
        height={dimensions.height}
        alt="Card Image"
      />
    </div>
  );
};

export default WeddingCard;
