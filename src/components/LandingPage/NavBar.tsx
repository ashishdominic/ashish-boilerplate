import React from 'react'
import Image from 'next/image'
import IconLabelButtons from '../IconButton'
import Link from 'next/link'

const NavBar = () => {
  return (
      <div className='flex justify-between' >
        <div>
        <Image
         src="assets/images/landing-page/logo.svg"
         alt="Logo"
         width={100}
         height={100}
       />
       </div>
       <div className='pt-4'>
         <Link href="/LoginPage">
           <IconLabelButtons />
         </Link>
       </div>

      </div> 
  )
}

export default NavBar
