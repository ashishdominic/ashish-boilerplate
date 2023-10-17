import React from 'react'
import Image from 'next/image'
import images from '@/constants/images';

const CustomSearch = () => {
  return (
    <div className='w-full'>
      <div className='border border-solid border-gray-400 w-1/2  p-2 rounded-full flex'>
        <div className=' '>
        <Image 
             src={images.searchicon} 
             alt='search icon' 
             height={40} 
             width={20} 
            className='pt-0.5 '
            />
        </div>
        <div className='w-full pl-2'>
          <input  placeholder='Search' className='focus:outline-none  w-full' />
        </div>
      </div>
    </div>
  )
}

export default CustomSearch
