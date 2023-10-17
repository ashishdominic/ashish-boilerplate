import { ReactNode } from 'react';
import LandingPage from '@/pages/LandingPage';

 

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='reset'>
        <LandingPage/>
        {children}
      </body>
    </html>
  );

}