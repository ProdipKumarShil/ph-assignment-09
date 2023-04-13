import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { saveTheId } from '../../utilities/db';

const AppliedJobsCard = ({ findedJob }) => {
  const {company, img, salary, jobTitle, location, arr} = findedJob
  return (
    <div className='border rounded-lg p-4 md:p-10 md:flex items-center mb-6'>
      <div className="h-60 md:w-60 bg-gray-200 flex items-center rounded-2xl">
        <img className='w-36 h-36  mx-auto ' src={img} alt="" />
      </div>
      <div className="grow md:ml-8">
        <h4 className='myTitle mb-1 mt-4 md:mt-0'>{jobTitle}</h4>
        <h6 className='subTitle text-gray-400'>{company}</h6>
        <div className="flex my-4">
          <p className='bg-clip-text myBg text-transparent text-lg font-semibold py-2 px-5 mr-4 border-[3px] rounded-lg  border-indigo-500'>{arr[0]}</p>
          <p className='bg-clip-text myBg text-transparent text-lg font-semibold py-2 px-5 mr-4 border-[3px] rounded-lg  border-indigo-500'>{arr[1]}</p>
        </div>
        <div className="md:flex myPara gap-5 items-center">
          <p className='flex items-center'><MapPinIcon className='w-6 h-6 mr-1 text-indigo-500' />{location}</p>
          <p className='flex items-center'><CurrencyDollarIcon className='w-6 h-6 mr-1 text-indigo-500' />{salary}</p>
        </div>
      </div>
      <button className='mBtn mt-6'>View Details</button>
    </div>
  );
};

export default AppliedJobsCard;