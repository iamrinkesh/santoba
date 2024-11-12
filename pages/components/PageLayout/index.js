import React from 'react';
import Footer from '../Footer/Footer';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">
        {children} {/* This will render the page content */}
      </main>

      {/* Footer */}
      <Footer  />
    </div>
  );
};

export default PageLayout;
