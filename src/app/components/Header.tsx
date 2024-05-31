'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { UserProfile } from './UserProfile';
import { Logo } from './Logo';
import { NavLinks } from './NavLinks';
import { useScroll } from '../hooks/useScroll';
import { SearchForm } from './SearchForm';

export default function Header() {
  const isScrolled = useScroll();

  const router = useRouter();
  const params = useSearchParams();
  const initialSearchTerm = params.get('title') || '';
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  function handleSearch(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const newParams = new URLSearchParams(params.toString());
    newParams.set('title', searchTerm);
    router.push(`/search?${newParams.toString()}`);
  }

  function handleSearchTermChange(e: ChangeEvent<HTMLInputElement>): void {
    setSearchTerm(e.target.value);
  }

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

      <SearchForm
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onSearchTermChange={handleSearchTermChange}
      />

      <UserProfile />
    </header>
  );
}
