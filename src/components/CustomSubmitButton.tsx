import React from 'react';
import { Button, ButtonProps } from '@mui/material';

type CustomSubmitButtonProps = ButtonProps & {
  label: string; // You can customize this to add a label to your button
};

const CustomSubmitButton: React.FC<CustomSubmitButtonProps> = ({ label, ...props }) => {
  return <Button {...props}>{label}</Button>;
};

export default CustomSubmitButton;


// import React from 'react';
// import { Button, ButtonProps } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   customButton: {
//     backgroundColor: 'blue', // Customize the background color
//     color: 'white', // Customize the text color
//     '&:hover': {
//       backgroundColor: 'darkblue', // Customize the hover background color
//     },
//   },
// }));

// type CustomSubmitButtonProps = ButtonProps & {
//   label: string; // You can customize this to add a label to your button
// };

// const CustomSubmitButton: React.FC<CustomSubmitButtonProps> = ({ label, ...props }) => {
//   const classes = useStyles();

//   return <Button {...props} className={classes.customButton}>{label}</Button>;
// };

// export default CustomSubmitButton;


// import React from 'react';
// import { Button, ButtonProps } from '@mui/material';
// import { styled } from '@mui/system'; // Import styled from '@mui/system'

// const CustomButton = styled(Button)(({  }) => ({
//   backgroundColor: 'blue', // Customize the background color
//   color: 'white', // Customize the text color
//   '&:hover': {
//     backgroundColor: 'red', // Customize the hover background color
//   },
// }));

// type CustomSubmitButtonProps = ButtonProps & {
//   label: string; // You can customize this to add a label to your button
// };

// const CustomSubmitButton: React.FC<CustomSubmitButtonProps> = ({ label, ...props }) => {
//   return <CustomButton {...props}>{label}</CustomButton>;
// };

// export default CustomSubmitButton;

