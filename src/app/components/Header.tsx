'use-client';
import React, { useEffect } from 'react';
import { UserProfile } from './UserProfile';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { useScroll } from '@/app/hooks/useScroll';

export default function Header() {
  const isScrolled = useScroll();

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
