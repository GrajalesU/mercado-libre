import Image from 'next/image';
import React from 'react';

export const Discover = () => (
  <section className='mb-20'>
    <h2 className='mb-6 text-[25px] font-light text-gray-300'>Descubre</h2>
    <ul className='grid grid-cols-1 lg:grid-cols-2'>
      <li className='my-2 mr-2'>
        <article className='shadow-sm flex max-w-[584px] items-center gap-8 overflow-hidden rounded bg-white'>
          <div className='flex w-full flex-col gap-3 py-4 pl-4 font-semibold text-gray-400'>
            <h3 className=' text-[12px] tracking-[4px]'>
              RENUEVA TUS ESPACIOS
            </h3>
            <div className='flex flex-col text-[28px]'>
              <span>HOGAR Y MUEBLES</span>
              <span>HASTA 50% OFF</span>
            </div>
            <button className='w-3/5 bg-blue px-6 py-2 text-white'>
              Ver más
            </button>
          </div>
          <Image
            src='/discover/Discover-1.png'
            alt='Furniture items'
            width={290}
            height={250}
          />
        </article>
      </li>
      <li className='my-2'>
        <article className='shadow-sm flex max-w-[584px] items-center gap-8 overflow-hidden rounded bg-white'>
          <div className='flex w-full grow flex-col gap-3 py-4 pl-4 font-semibold text-gray-400'>
            <h3 className=' text-[12px] tracking-[4px]'>
              SUSCRÍBETE AL NIVEL 6
            </h3>
            <div className='flex flex-col text-[28px] uppercase'>
              <span>Por solo</span>
              <span>$17.899 cada mes</span>
            </div>
            <button className='w-3/5 bg-blue px-6 py-2 text-white'>
              Suscribirme
            </button>
          </div>
          <Image
            src='/discover/Discover-2.png'
            alt='Furniture items'
            width={290}
            height={250}
          />
        </article>
      </li>
    </ul>
  </section>
);
