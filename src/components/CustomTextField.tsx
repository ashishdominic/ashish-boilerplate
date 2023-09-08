import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

import {  useField } from 'formik';

type CustomTextFieldProps = TextFieldProps & {
  name: string;  // Name is made required here
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  const config = {
    ...field,
    ...props,
    error: Boolean(meta.touched && meta.error),
    helperText: meta.touched && meta.error ? meta.error : '',
  };

  return <TextField {...config} />;
};

export default CustomTextField;

