import Image from 'next/image';
import React from 'react';

type CategoryItemProps = {
  src: string;
  alt: string;
  description: string;
};

export const CategoryItem = ({ src, alt, description }: CategoryItemProps) => (
  <div className='flex h-40 w-full flex-col items-center gap-4 border border-gray-100 bg-white'>
    <Image src={src} alt={alt} width={48} height={48} className='mt-[30px]' />
    <span className='text-center text-black'>{description}</span>
  </div>
);
