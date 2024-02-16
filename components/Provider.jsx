"use client";

import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Provider = ({ children, session }) => {
  const router = useRouter();

  if (session?.user === null) {
    router.push('/');
  }

  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}

export default Provider;