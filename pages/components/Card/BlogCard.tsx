import { useState, useEffect } from 'react';
import Image from 'next/image';

const BlogCard = ({ heading, paragraph, imageSrc, index, isLast }) => {
  const [isOddCall, setIsOddCall] = useState(true);

  useEffect(() => {
    // Toggle the state on each render based on the index
    setIsOddCall(index % 2 === 0);
  }, [index]);  // Depend on index to change on every render

  return (
    <div className="text-white max-w-screen-lg mx-auto py-8 px-4 space-y-8">
      <div className="flex gap-4 w-full">
        {isOddCall ? (
          // Odd call: Paragraph left, Image right
          <div className="flex w-full gap-8">
            <div className="w-1/2 px-4"> {/* Left side (paragraph) with padding */}
              <h2 className="text-3xl font-playfair font-normal leading-[42.73px] text-left">{heading}</h2>
              <p className="text-[14.93px] font-light leading-[36.68px] text-left mt-4">{paragraph}</p>
            </div>
            <div className="w-1/2 px-4"> {/* Right side (image) with padding */}
              <Image
                src={imageSrc}
                alt="Image"
                width={607.26}
                height={347.89}
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          // Even call: Image left, Paragraph right
          <div className="flex w-full gap-8">
            <div className="w-1/2 px-6"> {/* Left side (image) with padding */}
              <Image
                src={imageSrc}
                alt="Image"
                width={607.26}
                height={347.89}
                className="object-cover"
              />
            </div>
            <div className="w-1/2 px-6"> {/* Right side (paragraph) with padding */}
              <h2 className="text-3xl font-playfair font-normal leading-[42.73px] text-left">{heading}</h2>
              <p className="text-[14.93px] font-light leading-[36.68px] text-left mt-4">{paragraph}</p>
            </div>
          </div>
        )}
      </div>

      {!isLast && (
        <div className="w-full h-[1px] bg-gradient-to-b from-transparent via-gray-300 to-black mt-4"></div>
      )}
    </div>
  );
};

export default BlogCard;
