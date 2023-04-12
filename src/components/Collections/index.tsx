import Image from 'next/image';
import React from 'react';

export const Collections = () => (
  <section>
    <div className='pt-10'>
      <div className='flex gap-[7px] pb-6 text-[26px] text-gray-300'>
        <h2 className='font-light'>Colecciones:</h2>
        <div className='flex gap-2'>
          <select
            className='appearance-none bg-transparent font-semibold focus:outline-0'
            name='Collections'
            id='Collections'
            defaultValue={'None'}
          >
            <option selected>Supermercado</option>
          </select>
          <Image
            src='/ArrowBtn.svg'
            alt='down button icon'
            width={14}
            height={24}
          />
        </div>
      </div>
      <div className='grid grid-cols-6 grid-rows-2 gap-4'>
        <div className='col-span-2 row-span-2 overflow-hidden rounded bg-white shadow-sm'>
          <Image
            src='/collections/Collections-1.png'
            alt='Cuido, detergente, pañales y diversos tipos de productos de un mercado'
            width={383}
            height={281}
            className='w-full object-cover'
          />
          <div className='flex flex-col gap-1 px-[25px] py-5 text-gray-400'>
            <span className='text-xs font-semibold tracking-[4px]'>
              Descubre
            </span>
            <span className='text-[28px] font-bold'>SUPERMERCADO</span>
          </div>
        </div>
        <div className='rounded bg-white shadow-sm'>
          <Image
            src='/collections/Collections-2.png'
            alt='Crema Eucerína'
            width={184}
            height={184}
            className='w-full'
          />
        </div>
        <div className='rounded bg-white shadow-sm'>
          <Image
            src='/collections/Collections-3.png'
            alt='Crema para cicatrices Cicatricure'
            width={184}
            height={184}
            className='w-full'
          />
        </div>
        <div className='rounded bg-white shadow-sm'>
          <Image
            src='/collections/Collections-4.png'
            alt='Crema hidratante Nivea'
            width={184}
            height={184}
            className='w-full'
          />
        </div>
        <div className='rounded bg-white shadow-sm'>
          <Image
            src='/collections/Collections-5.png'
            alt='Crema de noche Cicatricure'
            width={184}
            height={184}
            className='w-full'
          />
        </div>
        <div className='rounded bg-white shadow-sm'>
          <Image
            src='/collections/Collections-6.png'
            alt='Sopa instantánea Ramen Nissin'
            width={184}
            height={184}
            className='w-full'
          />
        </div>
        <div className='rounded bg-white shadow-sm'>
          <Image
            src='/collections/Collections-7.png'
            alt='Whiskey'
            width={184}
            height={184}
            className='w-full'
          />
        </div>
        <div className='rounded bg-white shadow-sm'>
          <Image
            src='/collections/Collections-8.png'
            alt='Crema intensiva corporal Eucerin'
            width={184}
            height={184}
            className='w-full'
          />
        </div>
        <div className='rounded bg-white shadow-sm'>
          <Image
            src='/collections/Collections-9.png'
            alt='Shampoo Tío Nacho'
            width={184}
            height={184}
            className='w-full'
          />
        </div>
      </div>
    </div>
  </section>
);
