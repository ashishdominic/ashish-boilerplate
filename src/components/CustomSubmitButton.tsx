
// import React from 'react';
// import { Button, ButtonProps } from '@mui/material';

// type CustomSubmitButtonProps = ButtonProps & {
//   label: string; // You can customize this to add a label to your button
// };

// const CustomSubmitButton: React.FC<CustomSubmitButtonProps> = ({ label, ...props }) => {
//   return <Button {...props}>{label}</Button>;
// };

// export default CustomSubmitButton;




// import React from 'react';
// import { Button, ButtonProps } from '@mui/material';

// type CustomSubmitButtonProps = ButtonProps & {
//   label: string; // You can customize this to add a label to your button
// };

// const CustomSubmitButton: React.FC<CustomSubmitButtonProps> = ({ label, ...props }) => {
//   const buttonStyles = {
//     backgroundColor: 'blue', 
//     color: 'white',
//     '&:hover': {
//                  backgroundColor: 'red',
//                },
//   };

//   return <Button {...props} style={buttonStyles}>{label}</Button>;
// };

// export default CustomSubmitButton;








import React from 'react';
import { Button, ButtonProps, styled } from '@mui/material';

const CustomButton = styled(Button)(({  }) => ({
  backgroundColor: '#1976d2',
  color: 'white',
  '&:hover': {
    backgroundColor: 'darkblue',
  },
}));

type CustomSubmitButtonProps = ButtonProps & {
  label: string;
};

const CustomSubmitButton: React.FC<CustomSubmitButtonProps> = ({ label, ...props }) => {

  return (
    <CustomButton {...props}>
      {label}
    </CustomButton>
  );
};

export default CustomSubmitButton;







// import React from 'react';
// import Button, { ButtonProps } from '@mui/material/Button';


// type BUTTON_TYPES = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

// interface CustomButtonProps extends ButtonProps {
//   buttonType: BUTTON_TYPES;
// }

// function CustomSubmitButton({ buttonType, ...props }: CustomButtonProps) {

//   const buttonStyles = {
//     backgroundColor:'red',
//     width:'100%'
//   };

//   const buttonProps: ButtonProps = {
//     ...props,

//     sx: {
//       ...buttonStyles,
//       ...(buttonType === 'PRIMARY' && {
//         variant: 'contained',
//         backgroundColor:'#00AA7F',
//         color:'white',
//       }),

//       ...(buttonType === 'SECONDARY' && { variant: 'outlined',color: '#00AA7F'}),
//       ...(buttonType === 'TERTIARY' && { variant: 'text', color: 'primary' }),
//       ...props.sx,

//     },

//   };
//   return <Button {...buttonProps}>{props.children}</Button>;

// }

// export default CustomSubmitButton;