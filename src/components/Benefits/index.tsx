import React from 'react';
import BenefitCard from './BenefitCard';
import Slider from 'react-slick';
import { BENEFITS_SLIDER_SETTINGS } from './constants';

const Benefits = () => (
  <section className='mb-20'>
    <div className='mb-4 flex items-end gap-[16.38px] lg:mb-[22px]'>
      <h2 className='text-xl font-light text-gray-300 lg:text-[25px]'>
        Beneficios de Mercado Puntos
      </h2>
      <span className='mb-[7px] cursor-pointer text-[15px] font-normal leading-5 text-blue'>
        Ver todos los beneficios
      </span>
    </div>
    <Slider {...BENEFITS_SLIDER_SETTINGS}>
      <BenefitCard
        bgSrc='/benefits/DisneyAndStarBg.png'
        bgAlt='Disney Plus and Star Plus Series'
        logoSrc='/benefits/DisneyAndStarLogo.png'
        logoAlt='Disney Plus and Star Plus Logo'
        title='Sin cargo con el nivel 6'
        brand='Disney+ y Star+'
        gradientColor='#081330'
      />
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
    </Slider>
  </section>
);

export default Benefits;
