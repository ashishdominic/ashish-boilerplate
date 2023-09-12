// components/ThemeProvider.tsx
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline, createTheme, } from '@mui/material';
import { ThemeProviderProps } from '@emotion/react';

// Define your theme options for dark and light modes
// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

// const lightTheme = createTheme();

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    // Define your dark mode colors here
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // Define your light mode colors here
  },
});

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};



