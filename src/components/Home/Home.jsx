import React from 'react';
import Lottie from 'lottie-react'
import girlJob from '../../../public/job.json'
import { BeakerIcon } from '@heroicons/react/24/solid'
import CategoryCard from '../CategoryCard/CategoryCard';

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      {/* banner section */}
      <div className="flex items-center">
        {/* text */}
        <div className="">
          <h1 className='text-7xl font-bold leading-tight'>One Step <br /> Closer To Your <br /><span className='bg-clip-text myBg text-transparent'>Dream Job</span></h1>
          <p className='w-[500px] my-8 text-xl text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <button className='mBtn'>Get Started</button>
        </div>
        {/* lottie animations */}
        <Lottie animationData={girlJob} />
      </div>
      {/* banner section */}

      {/* category section */}
      <div className="">
        <h1 className='myHeader mx-auto text-center mt-20'>Job Category List</h1>
        <p className='myPara text-center mt-2'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        {/* category card */}
        <div className="mb-4 grid grid-cols-4 gap-7 p-10">
          {/* dynamic category card goes here */}
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
          <CategoryCard></CategoryCard>
        </div>
      </div>
    </div>
  );
};

export default Home;