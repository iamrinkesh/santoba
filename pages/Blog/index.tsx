import React from 'react';
import HeadingComponent from '../components/Heading/Heading';
import BlogCard from '../components/Card/BlogCard';

const index = () => {
  const blogData = [
    {
      heading: 'Full Canvas Construction',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      imageSrc: '/images/blog1.png',
    },
    {
      heading: 'Wedding Suit Styling',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      imageSrc: '/images/blog2.png',
    },
    {
      heading: 'Corporate Wear Trends',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      imageSrc: '/images/blog3.png',
    },
    {
      heading: 'Corporate Wear Trends',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      imageSrc: '/images/blog4.png',
    },
  ];

  return (
    <div className="text-white">
      <HeadingComponent heading="BLOG" />

      <div className="mt-8">
        {blogData.map((data, index) => (
          <div key={index} className="space-y-4">
            <BlogCard
              index={index} 
              heading={data.heading}
              paragraph={data.paragraph}
              imageSrc={data.imageSrc}
              isLast={index === blogData.length - 1}
            />
          </div>
        ))}

        <div className="flex justify-center">
          <a
            href="#"
            className="text-white"
            style={{
              fontFamily: 'Gilroy',
              fontSize: '18.84px',
              fontWeight: '300',
              lineHeight: '21.72px',
            }}
          >
            READ MORE
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
