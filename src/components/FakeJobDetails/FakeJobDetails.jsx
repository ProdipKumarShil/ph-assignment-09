import Lottie from 'lottie-react'
import walk from '../../../public/toucan-walk-cycle.json'
import React from 'react';
import girlJob from '../../../public/job.json'

const FakeJobDetails = () => {
  return (
    <div className='flex items-center justify-center w-[100vw] h-[100vh]'>
      <Lottie animationData={walk} />
      <h1 className='text-5xl font-semibold text-center'>Please select a Job</h1>
    </div>
  );
};

export default FakeJobDetails;