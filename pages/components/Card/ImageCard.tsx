import Image from 'next/image';
import React from 'react';

const ImageCard = ({ imageSrc }) => {
  return (
    <div className="transition-opacity duration-300">
      <Image className="w-full h-full object-cover" src={imageSrc} width={504} height={684} alt="Card Image" />
    </div>
  );
};

export default ImageCard;
