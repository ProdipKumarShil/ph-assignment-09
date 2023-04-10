import React from 'react';
import { BeakerIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const JobDetails = () => {
  return (
    <div className='max-w-7xl mx-auto my-10 p-4 grid  md:grid-cols-12 items-center grid-flow-dense'>
      <div className="w-full md:col-span-8 pr-4">
        <p className='myPara mb-6'><span className='font-bold text-black'>Job Description:</span> A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</p>
        <p className='myPara mb-6'><span className='font-bold text-black'>Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</p>
        <p className='myPara mb-6'><span className='font-bold text-black'>Educational Requirements:</span> Bachelor degree to complete any reputational university.</p>
        <p className='myPara mb-6'><span className='font-bold text-black'>Experiences:</span> 2-3 Years in this field.</p>
      </div>
      <div className=" h-full md:col-span-4 bg-myGradient p-8 rounded-lg m-2">
        {/* job details */}
        <div className="">
          <h1 className='myTitle mb-6 '>Job Details</h1>
          <hr />
          <div className="flex items-center gap-2 my-4">
            <CurrencyDollarIcon className='h-6 w-6 text-indigo-500' />
            <p className='myPara'><span className='font-bold text-slate-500 '>Salary: </span> 100K - 150K (Per Month)</p>
          </div>
          <div className="flex items-center gap-2 my-4">
            <CurrencyDollarIcon className='h-6 w-6 text-indigo-500' />
            <p className='myPara'><span className='font-bold text-slate-500'>Job Title: </span>Product Designer</p>
          </div>
        </div>
        <div className="mt-4 ">
          <h1 className='myTitle mb-6 '>Contact Information</h1>
          <hr />
          <div className="flex items-center gap-2 my-4">
            <CurrencyDollarIcon className='h-6 w-6 text-indigo-500' />
            <p className='myPara'><span className='font-bold text-slate-500 '>Phone :</span> 01750-00 00 00</p>
          </div>
          <div className="flex items-center gap-2 my-4">
            <CurrencyDollarIcon className='h-6 w-6 text-indigo-500' />
            <p className='myPara'><span className='font-bold text-slate-500 '>Email :</span>info@gmail.com</p>
          </div>
          <div className="flex items-start gap-2 my-4">
            <CurrencyDollarIcon className='h-8 w-8 text-indigo-500' />
            <p className='myPara'><span className='font-bold text-slate-500 '>Address :</span>Dhanmondi 32, Sukrabad Dhaka, Bangladesh</p>
          </div>
        </div>
        <button className='myBg w-full h-16 rounded-lg text-white text-xl font-bold active:scale-95'>Apply</button>
      </div>
    </div>
  );
};

export default JobDetails;