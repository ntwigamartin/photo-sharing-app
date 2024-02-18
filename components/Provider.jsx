"use client";

import { useRouter } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';


const Provider = ({ children, session }) => {
  const router = useRouter();


    /* if (!session || session.user === null) {
      router.push('/');
  
    } */
  

  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}

export default Provider;