import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='max-w-7xl flex justify-between items-center my-5 mx-auto'>
      <h1 className='text-3xl font-semibold'>CareerHub</h1>
      <ul className=''>
        <Link className='mr-4 text-lg font-medium'>Statistics</Link>
        <Link className='mr-4 text-lg font-medium'>Applied Jobs</Link>
        <Link className='mr-4 text-lg font-medium'>Blog</Link>
      </ul>
      <button className='mBtn'>Star Applying</button>
    </div>
  );
};

export default Navbar;