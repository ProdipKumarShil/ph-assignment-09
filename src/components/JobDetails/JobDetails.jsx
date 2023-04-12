import React, { useEffect, useState } from 'react';
import { BeakerIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const id = useLoaderData()
  const [jobs, setJobs] = useState([])
  // console.log(id)
  useEffect(
    () => {
      fetch('/data2.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    }
    , [])

  const clickedJob = jobs.find(job => job.id == id)

  if(clickedJob){
    const { id, company, jobTitle, salary, phone, location, jobResponsibility, experience, email, education, description } = clickedJob
    
    return (
      <div className='max-w-7xl mx-auto my-10 p-4 grid  md:grid-cols-12 items-center grid-flow-dense'>
        <div className="w-full md:col-span-8 pr-4">
          <p className='myPara mb-6'><span className='font-bold text-black'>Job Description:</span> {description}</p>
          <p className='myPara mb-6'><span className='font-bold text-black'>Job Responsibility:</span> {jobResponsibility}</p>
          <p className='myPara mb-6'><span className='font-bold text-black'>Educational Requirements:</span> {education}</p>
          <p className='myPara mb-6'><span className='font-bold text-black'>Experiences:</span> {experience}</p>
        </div>
        <div className=" h-full md:col-span-4 bg-myGradient p-8 rounded-lg m-2">
          {/* job details */}
          <div className="">
            <h1 className='myTitle mb-6 '>Job Details</h1>
            <hr />
            <div className="flex items-center gap-2 my-4">
              <CurrencyDollarIcon className='h-6 w-6 text-indigo-500' />
              <p className='myPara'><span className='font-bold text-slate-500 '>Salary: </span> {salary}</p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <CurrencyDollarIcon className='h-6 w-6 text-indigo-500' />
              <p className='myPara'><span className='font-bold text-slate-500'>Job Title: </span> {jobTitle}</p>
            </div>
          </div>
          <div className="mt-4 ">
            <h1 className='myTitle mb-6 '>Contact Information</h1>
            <hr />
            <div className="flex items-center gap-2 my-4">
              <CurrencyDollarIcon className='h-6 w-6 text-indigo-500' />
              <p className='myPara'><span className='font-bold text-slate-500 '>Phone :</span> {phone}</p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <CurrencyDollarIcon className='h-6 w-6 text-indigo-500' />
              <p className='myPara'><span className='font-bold text-slate-500 '>Email :</span> {email}</p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <CurrencyDollarIcon className='h-6 w-6 text-indigo-500' />
              <p className='myPara'><span className='font-bold text-slate-500 '>Address :</span> {location}</p>
            </div>
          </div>
          <button className='myBg w-full h-16 rounded-lg text-white text-xl font-bold active:scale-95'>Apply</button>
        </div>
      </div>
    );
  }
  else{
    return <h1>Please wait</h1>
  }

  
};

export default JobDetails;