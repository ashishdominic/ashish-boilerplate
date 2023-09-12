// components/DarkModeToggle.tsx
import React from 'react';
import { useTheme } from './Theme';
import Switch from '@mui/material/Switch';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <Switch
      checked={isDarkMode}
      onChange={handleToggle}
      name="darkModeToggle"
      color="primary"
    />
  );
};

export default DarkModeToggle;
