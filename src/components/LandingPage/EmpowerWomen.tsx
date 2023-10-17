import React from 'react';
import Image from 'next/image';
import CustomButtonNew from '../button';


const EmpowerWomen = () => {
  return (       
<div className="grid grid-cols-12 grid-rows-12 gap-7 w-">
    <div className="col-span-3 row-span-3 col-start-5">
      <Image
         src="/assets/images/landing-page/nurse-old-man-woman-sofa.png"
         alt="image"
         width={300}
         height={200}
       /> 
       </div>
    <div className="col-span-6 row-span-4 col-start-4 row-start-4">
      <div className='mb-3 font-poppins font-bold text-xl text-center'>Empowered women and</div>
    <div className='mb-3 font-poppins font-bold text-xl text-center text-green-500'>girls can lift</div>
    <div className='mb-3 font-poppins font-bold text-xl text-center'>their entire families</div>
    <div className=' font-poppins font-bold text-xs text-justify'>CARE India’s Health interventions work to improve the access to quality healthcare services for the poor and marginalised communities. By identifying the root causes of healthcare challenges, we work at the individual, community, and systemic levels to develop innovative solutions and help implement quality healthcare services. The ambit of our work includes improving of maternal and reproductive health, child health and nutrition, and early identification and treatment of communicable diseases. </div>
    <CustomButtonNew type="submit" buttonType="SECONDARY" className=' font-poppins font-bold text-xs'>
            Read About Us
    </CustomButtonNew>
</div>
    <div className="row-span-2 col-start-12 row-start-5">
    <Image
         src="/assets/images/landing-page/woman_caregiver_outdoor.png"
         alt="image"
         width={50}
         height={100}
       /> 
    </div>
    <div className="col-span-4 row-span-3 col-start-7 row-start-7">
    <Image
         src="/assets/images/landing-page/socialworkers-helping-disabled-man.png"
         alt="image"
         width={300}
         height={200}
       /> 
    </div>
    <div className="col-span-3 row-span-3 col-start-1 row-start-6">
       <Image
         src="/assets/images/landing-page/man-drink-coffee.png"
         alt="image"
         width={150}
         height={150}
       /> 
       </div>
    <div className="col-span-2 row-span-2 col-start-1 row-start-3"> 
     <Image
         src="/assets/images/landing-page/happy-nurse-man-wheelchair.png"
         alt="image"
         width={75}
         height={100}
       /> 
       </div>
    <div className="col-span-2 row-span-2 col-start-10 row-start-3">
    <Image
         src="/assets/images/landing-page/nurse-checking-man.png"
         alt="image"
         width={100}
         height={100}
       /> </div>
</div>   
    
  );
};

export default EmpowerWomen;
