import { numberToPrice } from '@/utils/format';
import Image from 'next/image';
import React from 'react';

type OfferCardProps = {
  src: string;
  price: number;
  offer?: number;
  free?: boolean;
  full?: boolean;
};

export const OfferCard = ({
  src = '/offers/offer-1.png',
  price = 210900,
  offer = 32,
  free = false,
  full = false,
}: OfferCardProps) => (
  <article className='max-w-[224px] rounded bg-white shadow-sm'>
    <figure className='border-b border-b-gray-200/10'>
      <Image width={224} height={224} src={src} alt='Silla de oficina' />
    </figure>
    <div className='px-4 pt-[10px] pb-[60px]'>
      <div className='flex items-center gap-[11.28px]'>
        <span className='text-2xl font-normal text-black'>
          {numberToPrice(price)}
        </span>
        <span className='text-sm text-green'>{offer}% OFF</span>
      </div>
      <div className='flex items-center gap-2'>
        {free && <span className='font-semibold text-green'>Envío gratis</span>}
        {full && (
          <Image
            src='/Full.svg'
            width={40}
            height={22}
            alt='full icon'
            className='py-[0.5px]'
          />
        )}
      </div>
    </div>
  </article>
);
