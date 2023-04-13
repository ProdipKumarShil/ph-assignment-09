import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react'
import girlJob from '../../../public/job.json'
import { BeakerIcon } from '@heroicons/react/24/solid'
import CategoryCard from '../CategoryCard/CategoryCard';
import FeatureJob from '../FeatureJob/FeatureJob';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
  const jobsL = useLoaderData()

  const [showBtnValue, setShowBtnValue] = useState(false)

  const [jobs, setJobs] = useState(jobsL.slice(0, 4))

  const showAll = () => {
    setShowBtnValue(!showBtnValue)
    console.log({ showBtnValue })
    setJobs(jobsL)
  }

  const [categorys, setCategorys] = useState([])
  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
      .then(data => setCategorys(data))
  }
    , [])

  

  return (
    <div className='max-w-7xl mx-auto p-4'>
      {/* banner section */}
      <div className="md:flex items-center">
        {/* text */}
        <div className="">
          <h1 className='text-7xl font-bold leading-tight'>One Step <br /> Closer To Your <br /><span className='bg-clip-text myBg text-transparent'>Dream Job</span></h1>
          <p className='md:w-[500px] my-8 text-xl text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          <Link className='mBtn flex items-center justify-center' to='blogs'>Get Started</Link>
        </div>
        {/* lottie animations */}
        <Lottie className='mt-4 md:mt-0' animationData={girlJob} />
      </div>
      {/* banner section */}

      {/* category section */}
      <div className="">
        <h1 className='myHeader mx-auto text-center mt-20'>Job Category List</h1>
        <p className='myPara text-center my-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        {/* category card */}
        <div className="mb-4 grid md:grid-cols-4 gap-7 p-4 md:p-10">
          {/* dynamic category card goes here */}

          {
            categorys.map((category, idx) => <CategoryCard key={idx} category={category}></CategoryCard>)
          }

        </div>
      </div>

      <FeatureJob jobs={jobs} showBtnValue={showBtnValue}></FeatureJob>
      <div className="flex mt-4">
        <button onClick={showAll} className={`mx-auto mBtn myBg ${showBtnValue ? 'hidden' : ''}`}>Show All</button>
      </div>
    </div>
  );
};

export default Home;