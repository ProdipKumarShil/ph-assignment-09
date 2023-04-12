import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'

const CategoryCard = ({category}) => {
  const {title, subTitle, img} = category
  // console.log(category)
  return (
    <div>
      <div className="bg-myGradient p-10 bg-opacity-10 rounded-lg text-center">
        <div className="bg-myGradient mb-3 w-fit p-4 rounded-lg mx-auto">
          <img src={img} className=" h-14 w-14 text-blue-500" alt="" />
        </div>
        <h3 className='subTitle mt-8'>{title}</h3>
        <p className="text-gray-400">{subTitle}</p>
      </div>
    </div>
  );
};

export default CategoryCard;