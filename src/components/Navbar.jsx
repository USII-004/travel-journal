import React from 'react';
import { FaEarthAmericas } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div>
      <div className='h-16 md:h-20 bg-[#F55A5A] mx-auto justify-center py-5 md:py-6 flex mb-4'>
        <FaEarthAmericas size={30} className='text-white mx-4' />
        <p className='text-white md:text-2xl'>My travel Journal.</p>
      </div>
    </div>
  )
}

export default Navbar