import React, { useEffect, useState } from 'react';
import AppliedJobsCard from './AppliedJobsCard';
import Loader from '../Loader/Loader';

// const storedIds = JSON.parse(localStorage.getItem('applied-jobs')) || []


const AppliedJobs = () => {
  const [storedIds, setStoredId] = useState([])
  const [jobsData, setJobsData] = useState([])
  useEffect(
    () => {
      fetch('/data2.json')
        .then(res => res.json())
        .then(data => setJobsData(data))
      setStoredId(JSON.parse(localStorage.getItem('applied-jobs')))
    }
    , [])


  const findedJobsFromLocalStorage = []

  for (const storedId of storedIds) {
    const findedJob = jobsData.find(job => job.id == storedId)
    findedJobsFromLocalStorage.push(findedJob)
  }

  // console.log(findedJobsFromLocalStorage)

  if(findedJobsFromLocalStorage[0]){
    return (
      <div className='max-w-7xl mx-auto px-4'>
        {
          findedJobsFromLocalStorage.map((findedJob, idx) => <AppliedJobsCard findedJob={findedJob} key={idx}></AppliedJobsCard>)
        }
      </div>
    );
  }
  else{
    return <Loader></Loader>
  }

  
};

export default AppliedJobs;