import '@/styles/global.css';
import React from 'react';
import { CustomThemeProvider } from '../components/Theme';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <CustomThemeProvider>
    <Component {...pageProps} />
  </CustomThemeProvider>
);

export default MyApp;




// import '@/styles/global.css';
// import React, { useState, useEffect } from 'react';
// import { CustomThemeProvider } from '../components/Theme';
// import type { AppProps } from 'next/app';

// const MyApp = ({ Component, pageProps }: AppProps) => {
//   // Initialize dark mode state from localStorage
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     const storedDarkMode = localStorage.getItem('darkMode');
//     return storedDarkMode === 'true';
//   });

//   useEffect(() => {
//     // Update localStorage when dark mode state changes
//     localStorage.setItem('darkMode', isDarkMode.toString());
//   }, [isDarkMode]);

//   const ctheme = isDarkMode ? darkTheme : lightTheme;

//   return (
//     <CustomThemeProvider theme={ctheme}>
//       <Component {...pageProps} />
//     </CustomThemeProvider>
//   );
// };

// export default MyApp;
