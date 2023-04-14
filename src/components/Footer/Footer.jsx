import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#1A1919]'>
      <div className="max-w-7xl mx-auto pt-32 pb-14 text-zinc-300 grid md:grid-cols-4 px-6 ">
        <div className=" pr-4 ">
          <h1 className='text-4xl font-semibold text-zinc-300 mb-4'>Bd Jobs</h1>
          <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
        </div>
        <div className="mt-6 md:mt-0">
          <h4 className='text-xl font-semibold'>Company</h4>
          <ul className='text-slate-300 mt-3'>
            <li>Integrations</li>
            <li>Customers</li>
            <li>PrototypeContact</li>
            <li>Prototype</li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <h4 className='text-xl font-semibold'>Support</h4>
          <ul className='text-slate-300 mt-3'>
            <li>Integrations</li>
            <li>Customers</li>
            <li>PrototypeContact</li>
            <li>Prototype</li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <h4 className='text-xl font-semibold'>Contact</h4>
          <p>524 Broadway , NYC <br /> +1 777 - 978 - 5570</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;