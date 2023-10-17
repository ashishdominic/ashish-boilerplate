import React from 'react'
import Image from 'next/image'
import images from '@/constants/images'
import ImageGallery from './ImageGallery'
//import ImageGallery from './ImageGallery'
//import joyfulOldLady from './assets/images/landing-page/joyful-od-lady-sitting-couch.png'

const ServingElder = () => {
  return (
    <div>
<div className='pt-10 font-poppins font-bold text-xl text-lightgreen text-center'>
Serving the Elder Cause for four decades</div>
<div className="block md:hidden">
    <ImageGallery/>
  </div>
  <div className='hidden md:block'>
<div className="pt-6 grid grid-cols-10 grid-rows-2 gap-4">
        <div className="col-span-3 row-span-5">
        <Image src={images.prayingMan} alt="praying-man" width={350} height={500}/>
        </div>
    <div className=" row start-1 col-start-4">
    <Image
         src={images.patientWithDoctor}
         alt="patient-with-doctor"
         width={200}
         height={275}
       /> 
    </div>
    <div className=" row-start-1 col-start-6">
    <Image
         src={images.doctorCaringWoman}
         alt="doctor-caring-woman"
         width={200}
         height={275}
       /> 
    </div>
    <div className="col-span-3 row-span-5 col-start-8">
      <Image src={images.oldageHome} alt="oldage home" width={350} height={500}/>
    </div>
    <div className="col-start-4 row-start-2">
    <Image
         src={images.seniorWomanSittingBedroom}
         alt="seniorWomanSittingBedroom"
         width={200}
         height={200}
       /> 
    </div>
    <div className="row-start-2 col-start-6"> 
    <Image
         src={images.joyfulOldLady}
         alt="joyful-lady" 
         width={200}
         height={200} 
       />
       </div>
</div>
</div>
    </div>
  )
}

export default ServingElder
