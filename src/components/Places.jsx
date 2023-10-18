import React from 'react';
import {FaLocationDot} from "react-icons/fa6";


const Places = (props) => {
  return (
    <div className='py-4 px-8 md:px-24 md:py-8'>
      <div className='md:flex'>
        <img src={props.imageUrl} alt='/' className='h-[250px] md:h-[400px] md:w-[350px] rounded-md' />
        <div>
          <div className='flex mt-4'>
            <FaLocationDot  className='text-[#F55A5A]'/>
            <p className='px-2 text-[#918E9B] text-sm md:text-lg'>{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Places