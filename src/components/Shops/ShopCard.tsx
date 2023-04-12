import Image from 'next/image';
import React from 'react';
import { ShopItemsProps, ShopItems } from './ShopItems';

type ShopCardProps = {
  items: ShopItemsProps;
  brand: string;
  srcBg: string;
  altBg: string;
  srcLogo: string;
};

export const ShopCard = ({
  items,
  brand,
  srcBg,
  altBg,
  srcLogo,
}: ShopCardProps) => (
  <article className='relative flex w-[284px] flex-col items-center overflow-hidden rounded bg-white shadow-sm'>
    <Image
      src={srcBg}
      alt={altBg}
      width={390}
      height={95}
      className='mb-14 object-contain'
    />
    <div className='absolute top-[55px] cursor-auto overflow-hidden rounded-lg bg-white shadow-lg'>
      <Image src={srcLogo} alt={`${brand} Logo`} width={80} height={80} />
    </div>
    <div className='flex flex-col items-center gap-5 px-8 pb-5'>
      <h3 className='cursor-pointer text-2xl font-semibold text-black'>
        {brand}
      </h3>
      <ShopItems {...items} />
      <span className='cursor-pointer font-semibold text-gray-200'>
        Ver tienda
      </span>
    </div>
  </article>
);
