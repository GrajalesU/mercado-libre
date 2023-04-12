import Image from 'next/image';
import React from 'react';

export const Subscribe = () => (
  <section className='mb-20 overflow-hidden rounded-md bg-white shadow-sm'>
    <header className='flex items-center justify-between bg-gradient-to-r from-[#A90F90] to-[#0C1A51] p-6 text-white'>
      <h2 className='text-2xl font-bold'>Suscríbete al nivel 6</h2>
      <div className='flex flex-col border-l-2 border-l-white pl-[6px]'>
        <span className='text-sm font-medium line-through'>$ 50.690</span>
        <span className='text-xl font-semibold'>
          $ 17.899 <small className='ml-1'>/mes</small>
        </span>
      </div>
    </header>
    <main className='border-b border-b-gray-100 px-6 py-5'>
      <span className='text-[17px]'>
        Consigue los mejores beneficios en Mercado Libre
      </span>
      <ul className='mt-8 mb-2 flex justify-between'>
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
          <div className='mr-14 flex max-w-[330px] items-center gap-4'>
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
    <footer className='flex justify-end px-[30px] py-4'>
      <button className='rounded-md bg-blue px-6 py-3 font-semibold text-white'>
        Suscríbete
      </button>
    </footer>
  </section>
);
