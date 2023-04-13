import React from 'react';
import { useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react'
import error from '../../../public/98488-bot-error-404.json'
const Error = () => {
  return (
    <div className='max-w-7xl h-[100vh] mx-auto'>
      <div className="h-full w-full flex items-center flex-col justify-center">
        <Lottie className='w-1/2' animationData={error}/>
        <h1 className='text-5xl'>An Error Occurred</h1>
      </div>
    </div>
  );
};

export default Error;