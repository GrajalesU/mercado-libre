import React from 'react';
import { Logo } from './Logo';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import {CartButton}  from '@/components/Cart/CartButton';

export const Search = () => (
  <div className='flex justify-between py-4 lg:justify-start lg:gap-[45px]'>
    <Logo />
    <div className='flex items-center justify-between overflow-hidden rounded-sm bg-white lg:min-w-[550px]'>
      <input
        className='w-[500px] min-w-[100px] p-3 text-base placeholder:text-[#00000040] focus:outline-0 lg:min-w-[500px]'
        type='text'
        placeholder='Buscar productos, marcas y más...'
      />
      <button className='border-l border-l-gray-100 px-3 py-2'>
        <Image
          className='max-w-fit'
          src='/search.svg'
          alt='search icon'
          width={24}
          height={24}
        />
      </button>
    </div>
    <div className='flex items-center justify-end pl-[10px] lg:hidden'>
      <MdMenu className='text-[40px]' />
      <CartButton p_height={25} p_width={45} />
    </div>
  </div>
);
