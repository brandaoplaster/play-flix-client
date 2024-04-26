'use-client';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const Logo = () => (
    <Image
      src='/images/logo.svg'
      alt='play flix'
      width={80}
      height={80}
      className='cursor-pointer'
    />
  );

  const NavLinks = () => (
    <nav>
      <ul className='hidden space-x-4 text-sm font-semibold md:flex'>
        <li>Home</li>
        <li>TV Show</li>
        <li>Movies</li>
        <li>Latest</li>
      </ul>
    </nav>
  );

  const UserProfile = () => (
    <div className='flex items-center space-x-4'>
      <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
      <Image
        src='https://rb.gy/g1pwyx'
        alt='Avatar'
        className='cursor-pointer rounded'
      />
    </div>
  );

  return (
    <header
      className={`${
        isScrolled && 'bg-black'
      } fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6`}
    >
      <div className='flex items-center space-x-4 md:space-x-4'>
        <Logo />

        <NavLinks />
      </div>

      <UserProfile />
    </header>
  );
}
