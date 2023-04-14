import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";

const FakeJobDetailsNav = () => {
  const [navIcon, setNavIcon] = useState(true)
  const changeState = () => {
    setNavIcon(!navIcon)
    console.log(navIcon)
  }
  return (
    <div className=''>
      <div className="max-w-7xl flex justify-between items-center my-5 mx-auto px-4 relative bg-red-400">
        <Link to='/' className='text-3xl font-semibold'>Bd Jobs</Link>
        <ul className='hidden md:inline-block'>
          <NavLink to='' className={({ isActive }) => isActive ? 'mr-4 text-lg font-medium text-indigo-400 underline' : 'mr-4 text-lg font-medium'}>Home</NavLink>
          <NavLink to='/Statistics' className={({ isActive }) => isActive ? 'mr-4 text-lg font-medium text-indigo-400 underline' : 'mr-4 text-lg font-medium'}>Statistics</NavLink>
          <NavLink to='yourJobs' className={({ isActive }) => isActive ? 'mr-4 text-lg font-medium text-indigo-400 underline' : 'mr-4 text-lg font-medium'}>Your Jobs</NavLink>
          <NavLink to='blogs' className={({ isActive }) => isActive ? 'mr-4 text-lg font-medium text-indigo-400 underline' : 'mr-4 text-lg font-medium'}>Blogs</NavLink>
        </ul>
        <Link to='/' className='mBtn hidden md:flex justify-center items-center'>Star Applying</Link>


        {/* useState */}
        <div className={`${navIcon ? '-top-96' : 'top-12'} absolute  w-11/12 mx-auto duration-300 bg-gray-200 p-8 rounded-lg shadow-lg md:hidden`}>
          <div className=" ">
            <ul className='md:hidden flex flex-col gap-3'>
              <NavLink to='jobDetails' className={({ isActive }) => isActive ? 'mr-4 text-lg font-medium text-indigo-400 underline' : 'mr-4 text-lg font-medium'}>Job Details</NavLink>
              <NavLink to='yourJobs' className={({ isActive }) => isActive ? 'mr-4 text-lg font-medium text-indigo-400 underline' : 'mr-4 text-lg font-medium'}>Your Jobs</NavLink>
              <NavLink to='blogs' className={({ isActive }) => isActive ? 'mr-4 text-lg font-medium text-indigo-400 underline' : 'mr-4 text-lg font-medium'}>Blogs</NavLink>
            </ul>
            <Link to='/' className='mBtn flex justify-center items-center mt-4'>Star Applying</Link>
          </div>
        </div>
        {navIcon ? <Bars3CenterLeftIcon onClick={changeState} className='w-8 h-8 md:hidden cursor-pointer' /> : <XMarkIcon onClick={changeState} className='w-8 h-8 md:hidden cursor-pointer' />}
      </div>
    </div>
  );
};

export default FakeJobDetailsNav;