import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3BottomLeftIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/outline'


const Navbar = () => {
  return (
    <div className='max-w-7xl flex justify-between items-center my-5 mx-auto px-4'>
      <Link to='/' className='text-3xl font-semibold'>CareerHub</Link>
      <ul className='hidden md:inline-block'>
        <Link to='jobDetails' className='mr-4 text-lg font-medium'>Job Details</Link>
        <Link to='yourJobs' className='mr-4 text-lg font-medium'>Your Jobs</Link>
        <Link to='blogs' className='mr-4 text-lg font-medium'>Blogs</Link>
      </ul>
      <Link to='/' className='mBtn hidden md:flex justify-center items-center'>Star Applying</Link>
      <Bars3CenterLeftIcon className='w-8 h-8 md:hidden cursor-pointer' />
    </div>
  );
};

export default Navbar;