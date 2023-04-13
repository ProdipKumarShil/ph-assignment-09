import Lottie from 'lottie-react'
import walk from '../../../public/toucan-walk-cycle.json'
import React from 'react';
import girlJob from '../../../public/job.json'

const FakeJobDetails = () => {
  return (
    <div className=''>
      <div className="">
        <Lottie className='w-80 mx-auto' animationData={walk} />
        <h1 className='text-5xl font-semibold text-center'>Please select a Job</h1>
      </div>
    </div>
  );
};

export default FakeJobDetails;