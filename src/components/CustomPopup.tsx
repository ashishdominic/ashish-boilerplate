import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CustomSubmitButton from './CustomSubmitButton';

interface CustomPopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  onPrimaryButtonClick: () => void;
  onSecondaryButtonClick: () => void;
}

const CustomPopup: React.FC<CustomPopupProps> = ({
  open,
  onClose,
  title,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <div style={{ padding: '16px' }}></div>
      <DialogActions>
        <Button onClick={onSecondaryButtonClick} color="primary">
          Secondary Button
        </Button>
        {/* <Button onClick={onPrimaryButtonClick} color="primary" autoFocus>
          Primary Button
        </Button> */}
        <CustomSubmitButton 
                type="submit" 
                label="Delete"
                variant="contained"             
              />
      </DialogActions>
    </Dialog>
  );
};

export default CustomPopup;
