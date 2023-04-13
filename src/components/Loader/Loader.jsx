import React from 'react';
import Lottie from 'lottie-react'
import loader from '../../../public/double-loader.json'
const Loader = () => {
  return (
    <div className='max-w-7xl h-[100vh] flex justify-center justify-center mx-auto'>
      <Lottie className='w-1/2' animationData={loader}/>
    </div>
  );
};

export default Loader;