import LoginPage2 from '@/components/NGOLogin/LoginPage2';

import { ReactNode } from 'react';

 

export default function RootLayout({ children }: { children: ReactNode }) {

  return (

    <html lang="en">

      <body><LoginPage2>{children}</LoginPage2></body>

    </html>

  );

}