import Image from 'next/image';
import React from 'react';

export type ShopItemsProps = {
  src: [string, string, string];
  alt: [string, string, string];
};

export const ShopItems = ({ src, alt }: ShopItemsProps) => (
  <ul className='flex gap-[6px]'>
    {src.map((el, idx) => (
      <li key={src[idx] + alt[idx]}>
        <div className='border-gray-[#EEE] cursor-pointer overflow-hidden rounded-lg border'>
          <Image src={el} alt={alt[idx]} width={70} height={70} />
        </div>
      </li>
    ))}
  </ul>
);
