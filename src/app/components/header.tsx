import React from 'react';

export default function Header() {
  return (
    <header className='fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6'>
      <div className='flex items-center space-x-4 md:space-x-4'>
        <img src='/images/logo.svg' alt='Netflix' className='w-24' />

        <ul className='hidden space-x-4 text-sm font-semibold md:flex'>
          <li>Home</li>
          <li>TV Show</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>

      <div className='flex items-center space-x-4'>
        <p className='hidden cursor-not-allowed lg:inline'>Kids</p>
        <img
          src='https://rb.gy/g1pwyx'
          alt='Avatar'
          className='cursor-pointer rounded'
        />
      </div>
    </header>
  );
}
