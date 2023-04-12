import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import { saveTheId } from '../../utilities/db';

const FeatureJobCard = ({job}) => {
  const {id, company, img, jobTitle, salary, location} = job
  return (
    <div className='border rounded-lg p-10'>
      <div className="flex ">
        <img className='w-28 h-28  mx-auto md:m-0 object-contain' src={img} alt="" />
      </div>
      <h4 className='myTitle mt-8 mb-1'>{jobTitle}</h4>
      <h6 className='subTitle text-gray-400'>{company}</h6>
      <div className="flex my-4">
        <p className='bg-clip-text myBg text-transparent text-lg font-semibold py-2 px-5 mr-4 border-[3px] rounded-lg  border-indigo-500'>Remote</p>
        <p className='bg-clip-text myBg text-transparent text-lg font-semibold py-2 px-5 mr-4 border-[3px] rounded-lg  border-indigo-500'>Fulltime</p>
      </div>
      <div className="md:flex myPara gap-5 items-center">
        <p className='flex items-center'><MapPinIcon className='w-6 h-6 mr-1'/>{location}</p>
        <p className='flex items-center'><CurrencyDollarIcon className='w-6 h-6 mr-1'/> Salary : {salary}</p>
      </div>
      <Link to={`/jobDetails/${id}`} onClick={() => saveTheId(id)} className='mBtn justify-center items-center flex mt-6'>View Details</Link>
      
    </div>
  );
};

export default FeatureJobCard;