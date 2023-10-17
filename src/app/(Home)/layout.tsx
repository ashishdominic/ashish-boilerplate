
import UserDashboard from '@/components/dashboard/UserDashboard';
import { ReactNode } from 'react';

 

export default function RootLayout({ children }: { children: ReactNode }) {

  return (

    <html lang="en">

      <body><UserDashboard>{children}</UserDashboard></body>

    </html>

  );

}