import React from 'react';
import { Logo } from './Logo';
import Image from 'next/image';

export const Search = () => (
  <div className='flex gap-[52px] py-4'>
    <Logo />
    <div className='flex min-w-[600px] items-center justify-between overflow-hidden rounded-sm bg-white'>
      <input
        className=' min-w-[550px] p-3 text-base placeholder:text-[#00000040] focus:outline-0'
        type='text'
        placeholder='Buscar productos, marcas y más...'
      />
      <button className='border-l border-l-gray-100 px-3 py-2'>
        <Image src='/search.svg' alt='search icon' width={24} height={24} />
      </button>
    </div>
  </div>
);
