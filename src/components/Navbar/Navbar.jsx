import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3BottomLeftIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/outline'


const Navbar = () => {
  return (
    <div className='max-w-7xl flex justify-between items-center my-5 mx-auto px-4'>
      <h1 className='text-3xl font-semibold'>CareerHub</h1>
      <ul className='hidden md:inline-block'>
        <Link className='mr-4 text-lg font-medium'>Statistics</Link>
        <Link className='mr-4 text-lg font-medium'>Applied Jobs</Link>
        <Link className='mr-4 text-lg font-medium'>Blog</Link>
      </ul>
      <button className='mBtn hidden md:inline-block'>Star Applying</button>
      <Bars3CenterLeftIcon className='w-8 h-8 md:hidden cursor-pointer' />
    </div>
  );
};

export default Navbar;