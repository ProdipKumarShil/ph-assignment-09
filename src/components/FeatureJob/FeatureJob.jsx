import React from 'react';
import FeatureJobCard from './FeatureJobCard';

const FeatureJob = () => {
  return (
    <div>
      <h1 className='myHeader text-center'>Featured Jobs</h1>
      <p className='myPara text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="grid grid-cols-2 gap-6">
        <FeatureJobCard></FeatureJobCard>
        <FeatureJobCard></FeatureJobCard>
        <FeatureJobCard></FeatureJobCard>
        <FeatureJobCard></FeatureJobCard>
        <FeatureJobCard></FeatureJobCard>
        <FeatureJobCard></FeatureJobCard>
      </div>
    </div>
  );
};

export default FeatureJob;