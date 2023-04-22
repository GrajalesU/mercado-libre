import Image from 'next/image';
import React from 'react';

type BenefitCardProps = {
  bgSrc: string;
  bgAlt: string;
  logoSrc: string;
  logoAlt: string;
  brand: string;
  title: string;
  freeTier?: boolean;
  gradientColor?: string;
};

const BenefitCard = ({
  bgSrc,
  bgAlt,
  logoSrc,
  logoAlt,
  brand,
  title,
  freeTier = false,
  gradientColor = 'rgba(0, 0, 0, 0.5)'
}: BenefitCardProps) => (
  <article className='relative m-0 aspect-video h-[170px] overflow-hidden rounded-md lg:h-[250px] lg:w-[384px]'>
    <Image
      src={bgSrc}
      alt={bgAlt}
      width={384}
      height={250}
      className='absolute object-cover'
    />
    <div
      style={{
        background: `linear-gradient(0deg, ${gradientColor} 0%, rgba(0, 0, 0, 0) 100%)`,
      }}
      className='absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center w-auto gap-0 lg:mt-8 lg:flex-row lg:gap-4 lg:pb-4 lg:pl-4 '
    >
      <Image src={logoSrc} width={80} height={80} alt={logoAlt} />
      <div className='mt-3 mb-2 text-center text-white lg:mt-0 lg:mb-0 lg:text-left'>
        {freeTier && <span className='text-[11px]'>7 DÍAS GRATIS</span>}
        <h3 className='font-semibold'>{title}</h3>
        <span className='font-[17px]'>{brand}</span>
      </div>
    </div>
  </article>
);

export default BenefitCard;
