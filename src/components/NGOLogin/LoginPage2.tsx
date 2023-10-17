import React from 'react'
import Image from 'next/image'
import images from '@/constants/images';

type LoginProps = {
  children: React.ReactNode;
};


const LoginPage2 = (props:LoginProps) => {
  return (
    <div className='shadow-md  flex flex-col items-center h-1/2 w-1/2 m-52'>
      <div className='bg-secondarygreen  rounded-tl-lg rounded-tr-lg  flex items-center justify-between w-full'>
        <div className='text-white text-xl font-bold pl-4'>Bienvenido de nuevo</div>
           <div>
           <Image 
             src={images.manLogin} 
             alt='man login' 
             height={100} 
             width={200} 
             className='pr-4 pt-1 '
            />
           </div>
      </div>
         <div className='bg-white w-full h-72 '>
           {props.children}
         </div>
    </div>
  )
}

export default LoginPage2
