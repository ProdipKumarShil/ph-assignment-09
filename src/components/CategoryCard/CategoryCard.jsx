import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

const CategoryCard = () => {
  return (
    <div>
      <div className="bg-myGradient p-10 bg-opacity-10 rounded-lg">
        <div className="bg-myGradient mb-3 w-fit p-4 rounded-lg">
          <BeakerIcon className=" h-14 w-14 text-blue-500" />
        </div>
        <h3 className='subTitle mt-8'>Account & Finance</h3>
        <p className="text-gray-400">300 Jobs Available</p>
      </div>
    </div>
  );
};

export default CategoryCard;