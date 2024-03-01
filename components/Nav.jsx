'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


const Nav = () => {
    const { data: session } = useSession() || { data: null };

    const [providers, setProviders ] = useState(null);

    const [toggleDropdown,setToggleDropdown] = useState(false);

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders();

            setProviders(response);
        }

        setUpProviders();
    }, [])
  return (
    <nav className='flex justify-evenly w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center items-center ml-5'>
            <Image 
                src="/assets/icons/logo.png"
                alt="Gallery Logo"
                width={30}
                height={30}
                className='object-contain'
            />
            <p>Photolib</p>
        </Link>

        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
            {session?.user ? (
              <div className='flex gap-3 md:gap-5'>
                <Link href="/users" className=''>
                    <button type="button" className='btn btn-sm'>
                      users
                    </button>
                </Link>
                <button type='button' onClick={signOut} className='btn btn-sm'>
                    Sign Out
                </button>

                <Link href="/">
                    <Image
                      src={session?.user.image}
                      alt='profile'
                      width={37}
                      height={37}
                      className='rounded-full mr-5'
                    />
                </Link>
              </div>
            ) : (
              <>
                {providers &&
                 Object.values(providers).map((provider) => (
                    <button 
                    key={provider.name}
                    type='button'
                    onClick={() => signIn(provider.id)}
                    className='btn btn-sm btn-active btn-accent mr-10 mt-5 '
                    >
                        Sign In
                    </button>
                ))}
              </>
            )}
        </div>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex relative'>
            {session?.user ? (
              <div className='flex'>
                <Image
                    src={session?.user.image}
                    alt='profile'
                    width={37}
                    height={37}
                    className='rounded-full'
                    onClick={() => setToggleDropdown((prev) => !prev)}
                />

                {toggleDropdown && (
                    <div className='absolute right-0 top-full mt-1 w-full p-5 rounded-lg  min-w-[210px] flex flex-col '>
                        <Link 
                            href="/users"
                            className='self-end'
                            onClick={() => setToggleDropdown(false)}
                        >
                            users
                        </Link>
                        
                        <button 
                            type='button'
                            onClick={() => {
                                setToggleDropdown(false);
                                signOut();
                            }}
                            className='self-end'
                        >
                            Sign out
                        </button>
                    </div>
                )}
              </div>
            ) : (
              <>
                {providers &&
                 Object.values(providers).map((provider) => (
                    <button 
                    key={provider.name}
                    type='button'
                    onClick={() => signIn(provider.id)}
                    className='btn btn-active btn-accent'
                    >
                        Sign In
                    </button>
                ))}
              </>
            )}
        </div>
    </nav>
  )
}

export default Nav;