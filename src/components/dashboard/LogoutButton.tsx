'useclient'
import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import images from '@/constants/images';
import { Icon } from '@mui/material';

const LogoutButton = () => {
  const svgIcon = (
    <Icon>
      <img alt="edit" src={images.logoutIcon} className='w-full pb-1'/>
    </Icon>
  );

  return (
      <Stack direction="row" spacing={3}>
      <Button variant="contained" startIcon={svgIcon} className='text-white bg-secondarygreen w-32 normal-case p-1'>
        Log out
     </Button>    
     </Stack>

  )

}

export default LogoutButton