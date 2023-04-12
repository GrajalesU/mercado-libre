import React from 'react';
import BenefitCard from './BenefitCard';

const Benefits = () => (
  <section className='mb-20 h-full rounded bg-white pb-1 shadow-sm shadow-gray-100 lg:bg-transparent lg:shadow-none'>
    <header className='mb-[22px] flex items-baseline gap-[16.38px] border-b border-gray-100 px-4 lg:border-none lg:px-0'>
      <h2 className='my-3 text-lg font-bold text-black lg:my-0 lg:text-[25px] lg:font-light lg:leading-6 lg:text-gray-300'>
        Beneficios de Mercado Puntos
      </h2>
      <span className='mb-[7px] hidden cursor-pointer text-[15px] font-normal leading-5 text-blue lg:inline'>
        Ver todos los beneficios
      </span>
    </header>
    <ul className='flex justify-between overflow-hidden'>
      <li>
        <BenefitCard
          bgSrc='/benefits/DisneyAndStarBg.png'
          bgAlt='Disney Plus and Star Plus Series'
          logoSrc='/benefits/DisneyAndStarLogo.png'
          logoAlt='Disney Plus and Star Plus Logo'
          title='Sin cargo con el nivel 6'
          brand='Disney+ y Star+'
          gradientColor='#081330'
        />
      </li>
      <li>
        <BenefitCard
          bgSrc='/benefits/HBOMaxBg.png'
          bgAlt='HBO Max Series'
          logoSrc='/benefits/HBOMaxLogo.png'
          logoAlt='HBO Max Logo'
          title='Hasta 50% OFF'
          brand='HBO Max'
          gradientColor='#3C034E'
          freeTier
        />
      </li>
      <li>
        <BenefitCard
          bgSrc='/benefits/ParamountBg.png'
          bgAlt='Paramount Series'
          logoSrc='/benefits/ParamountLogo.png'
          logoAlt='Paramount Logo'
          title='Hasta 50% OFF'
          brand='Paramount+'
          gradientColor='#0064FF'
          freeTier
        />
      </li>
    </ul>

    <footer className='mt-[22px] flex items-center justify-between border-t border-gray-100 px-3 py-4 text-sm font-medium text-blue lg:hidden'>
      <span>Ver todos los beneficios</span>
      <svg
        className='h-3 w-2 stroke-blue'
        viewBox='0 0 9 14'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='none'
          fill-rule='evenodd'
          stroke-width='1.5'
          d='M1 1.343L6.657 7 1 12.657'
        ></path>
      </svg>
    </footer>
  </section>
);

export default Benefits;
