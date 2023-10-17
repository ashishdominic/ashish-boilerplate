
import { Box, Grid } from '@mui/material'
import React from 'react'
import Image from 'next/image';
 import images from '@/constants/images'
const ImageGallery = () => {
  return (
    <div className='mt-4'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box className='p-4'>
          <Image
          src={images.oldageHome}
          alt="Image 1"
          layout='responsive'
          height={450}
          width={300}
          // objectFit='contain'
          // layout='fill'
        />
          </Box>
        </Grid>
        <Grid item xs={6}>
        <Box className=' p-4'>
        <Image
          src={images.patientWithDoctor}
          alt="Image 2"
          layout='responsive'
          width={120}
          height={150}
        />
          </Box>
        </Grid>
        <Grid item xs={6} className='relative'>
        <Box className='p-4'>
        <Image
          src={images.doctorCaringWoman}
          alt="Image 3"
          // layout='responsive'
          // width={120}
          // height={200}
          fill={true}
          objectFit='contain'
        />
          </Box>
       </Grid>
        <Grid item xs={12}>
        <Box className='p-4'>
        <Image
          src={images.seniorWomanSittingBedroom}
          alt="Image 4"
          layout='responsive'
          width={300}
          height={150}
        />
         </Box>
         </Grid>
        <Grid item xs={12}>
        <Box className='p-4'>
        <Image
          src={images.joyfulOldLady}
          alt="Image 5"
          layout='responsive'
          width={300}
          height={150}
        /></Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default ImageGallery
