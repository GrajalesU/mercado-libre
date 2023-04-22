import Image from 'next/image';
import React from 'react';

export const Subscribe = () => (
  <section className='overflow-hidden bg-white rounded-md shadow-sm mb-9 lg:mb-20'>
    <header className='flex items-center justify-between bg-gradient-to-r from-[#A90F90] to-[#0C1A51] p-6 text-white'>
      <h2 className='text-2xl font-bold'>Suscríbete al nivel 6</h2>
      <div className='flex flex-col border-l-2 border-l-white pl-[6px]'>
        <span className='text-sm font-medium line-through'>$ 50.690</span>
        <span className='text-xl font-semibold'>
          $ 17.899 <small className='ml-1'>/mes</small>
        </span>
      </div>
    </header>
    <main className='px-6 py-5 border-b border-b-gray-100'>
      <span className='text-[17px]'>
        Consigue los mejores beneficios en Mercado Libre
      </span>
      <ul className='flex flex-col items-start justify-between gap-4 mt-8 mb-2 lg:flex-row lg:gap-0'>
        <li>
          <div className='flex items-center gap-4'>
            <Image
              src={'/DisneyPlus.svg'}
              alt='Disney Plus Icon'
              width={72}
              height={72}
              className='rounded-[37px] border border-[#EFEFEF]'
            />
            <span>Disney+ sin cargos</span>
          </div>
        </li>
        <li>
          <div className='flex items-center gap-4'>
            <Image
              src={'/StarPlus.svg'}
              alt='Star Plus Icon'
              width={72}
              height={72}
              className='rounded-[37px] border border-[#EFEFEF]'
            />
            <span>Star+ sin cargos</span>
          </div>
        </li>
        <li>
          <div className='flex items-center gap-4 lg:mr-14 lg:max-w-[330px]'>
            <Image
              src={'/Car.svg'}
              alt='Disney Plus Icon'
              width={72}
              height={72}
            />
            <p>
              Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de
              menos de $ 90.000
            </p>
          </div>
        </li>
      </ul>
    </main>
    <footer className='flex justify-end px-3 lg:px-[30px] py-4'>
      <button className='flex justify-between w-full px-6 py-3 font-semibold text-left bg-transparent rounded-md text-blue lg:w-auto lg:bg-blue lg:text-center lg:text-white'>
        Suscríbete
        <span className='scale-y-50 -rotate-90 lg:hidden'>V</span>
      </button>
    </footer>
  </section>
);
