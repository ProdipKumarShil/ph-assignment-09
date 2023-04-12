import React from 'react';
import FeatureJobCard from './FeatureJobCard';

const FeatureJob = ({jobs}) => {
  // console.log(jobs)
  return (
    <div>
      <h1 className='myHeader text-center'>Featured Jobs</h1>
      <p className='myPara text-center mb-10 mt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
      <div className="grid md:grid-cols-2 gap-6">
        {
          jobs.map(job => <FeatureJobCard key={job.id} job={job}></FeatureJobCard>)
        }
      </div>
    </div>
  );
};

export default FeatureJob;