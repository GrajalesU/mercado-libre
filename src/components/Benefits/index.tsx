import React from 'react';
import BenefitCard from './BenefitCard';
import Slider from 'react-slick';
import { BENEFITS_SLIDER_SETTINGS } from './constants';

const Benefits = () => (
  <section className='mb-20'>
    <div className='mb-[22px] flex items-end gap-[16.38px]'>
      <h2 className='text-[25px] font-light text-gray-300'>
        Beneficios de Mercado Puntos
      </h2>
      <span className='mb-[7px] cursor-pointer text-[15px] font-normal leading-5 text-blue'>
        Ver todos los beneficios
      </span>
    </div>
    <Slider {...BENEFITS_SLIDER_SETTINGS} className=''>
      <BenefitCard
        bgSrc='/benefits/DisneyAndStarBg.png'
        bgAlt='Disney Plus and Star Plus Series'
        logoSrc='/benefits/DisneyAndStarLogo.png'
        logoAlt='Disney Plus and Star Plus Logo'
        title='Sin cargo con el nivel 6'
        brand='Disney+ y Star+'
      />
      <BenefitCard
        bgSrc='/benefits/HBOMaxBg.png'
        bgAlt='HBO Max Series'
        logoSrc='/benefits/HBOMaxLogo.png'
        logoAlt='HBO Max Logo'
        title='Hasta 50% OFF'
        brand='HBO Max'
        freeTier
      />
      <BenefitCard
        bgSrc='/benefits/ParamountBg.png'
        bgAlt='Paramount Series'
        logoSrc='/benefits/ParamountLogo.png'
        logoAlt='Paramount Logo'
        title='Hasta 50% OFF'
        brand='Paramount+'
        freeTier
      />
    </Slider>
  </section>
);

export default Benefits;
