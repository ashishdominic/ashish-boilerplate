import Image from 'next/image'
import React from 'react'
import CustomButtonNew from '../button'

const LadyOftheRoad = () => {
  return (
    <div className='flex flex-col lg:flex-row px-4 pt-6'>
      <div className='lg:w-1/2 pr-20 mr-20 pt-10'>
        <div className='font-poppins font-bold text-lg'>OUR LADY OF THE ROAD </div>
        <div className='mb-3 font-poppins font-bold text-lg'>FOUNDATION</div>
<div className=' font-poppins font-bold text-xs text-justify'>The Nuestra Señora del Camino Foundation is a non-profit entity whose objective is “…to improve the quality of life of people with intellectual disabilities and that of their families, through the support of a team of professionals animated by the spirit of Christian humanism. , with respect to the beliefs and the freedom of the people. </div>
        <CustomButtonNew type="submit" buttonType="PRIMARY" className='w-32'>
            Enroll
        </CustomButtonNew>
      </div>
      <div className="pt-2 hidden lg:flex lg:flex-row">
      <div className="grid grid-cols-5 grid-rows-5 gap-8">
    <div className='row-span-2'>
    <Image
         src="/assets/images/landing-page/lady_lady_wheelchair.png"
         alt="Logo"
         width={100}
         height={150}
       />  
      </div>
    <div className="row-span-2 col-start-2 row-start-2">
      <Image
         src="/assets/images/landing-page/ladies_donating.png"
         alt="Logo"
         width={100}
         height={150}
       />  
       </div>
    <div className="row-span-2 col-start-3 row-start-3">
      <Image
         src="/assets/images/landing-page/oldman_caretaker.png"
         alt="Logo"
         width={100}
         height={150}
       />  
       </div>
</div>
      </div>
      <div className="lg:hidden">
      <div className="grid grid-cols-4 grid-rows-2 gap-1">
        <div className="col-span-2 ">
          <Image
         src="/assets/images/landing-page/womenInWheelchair.svg"
         alt="Logo"
         width={300}
         height={250}
         className='w-full'       />
        </div>
    <div className="col-span-2 col-start-3">
    <Image
         src="/assets/images/landing-page/ladies_donating.png"
         alt="Logo"
         width={300}
         height={250}
         className='w-full'
       />  
    </div>
    <div className="col-span-2 col-start-2 row-start-2">
    <Image
         src="/assets/images/landing-page/oldman_caretaker.png"
         alt="Logo"
         width={300}
         height={250}
         className='w-full'
       />  
    </div>
</div>
    
      </div>
      
    </div>
  )
}

export default LadyOftheRoad
