import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const FeatureJobCard = () => {
  return (
    <div className='border rounded-lg p-10'>
      <img className='w-28 h-28 object-cover' src="/shazam.png" alt="" />
      <h4 className='myTitle mt-8 mb-1'>Technical Database Engineer</h4>
      <h6 className='subTitle text-gray-400'>Shazam Software Inc</h6>
      <div className="flex my-4">
        <p className='bg-clip-text myBg text-transparent text-lg font-semibold py-2 px-5 mr-4 border-[3px] rounded-lg  border-indigo-500'>Remote</p>
        <p className='bg-clip-text myBg text-transparent text-lg font-semibold py-2 px-5 mr-4 border-[3px] rounded-lg  border-indigo-500'>Fulltime</p>
      </div>
      <div className="flex myPara gap-5 items-center">
        <p className='flex items-center'><MapPinIcon className='w-6 h-6 mr-1'/> Dhaka, Bangladesh</p>
        <p className='flex items-center'><CurrencyDollarIcon className='w-6 h-6 mr-1'/> Salary : 100K - 150K</p>
      </div>
      <button className='mBtn mt-6'>View Details</button>
    </div>
  );
};

export default FeatureJobCard;