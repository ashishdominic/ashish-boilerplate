import React from 'react'
import Image from 'next/image';
import IconLabelButtons from '../IconButton';
import NavBar from './NavBar';


const Hero = () => {
  return (
    // <div className='w-full' >
       <div className="bg-contain bg-left bg-no-repeat pb-10" style={{ backgroundImage: "url('assets/images/landing-page/wave.png')"}}>
 {/* <div className='bg-hero_img bg-cover'>  */}
      <NavBar/>
      <div className='flex justify-between'>
      <div className='w-1/2'>
        <div className='font-poppins font-bold text-white text-lg'>CARE India is working </div>
        <div className='mb-3 font-poppins font-bold text-white text-lg'>for over 70 years to bring</div>
<div className='mb-4 font-poppins font-bold text-white text-xs text-justify'>We are a not-for-profit organisation that builds capacity of communities to ensure empowerment for marginalised women and girls. Our sustainable and holistic interventions in Health, Livelihood, Education and Disaster Relief & Resilience, provide innovative solutions to deep-rooted development problems.</div>
<IconLabelButtons/>
      </div>
      <div className='flex-grow mb-20'>
      <Image
         src="/assets/images/landing-page/hero_image.png"
         alt="Hero_image"
         width={500}
         height={400}
       />  
      </div>
    </div>
    </div>
  )
}

export default Hero
