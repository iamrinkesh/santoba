import React from 'react'
import HeadingComponent from '../components/Heading/Heading'
import PageLayout from './../components/PageLayout/index';

const index = () => {
  return (
    <PageLayout>
    <div className='text-white'>
      <HeadingComponent
        heading="HOME"
      />
    </div>
    </PageLayout>
  )
}

export default index