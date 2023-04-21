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
}: BenefitCardProps) => (
  <article className='relative h-[250px] overflow-hidden rounded-md px-1'>
    <Image
      src={bgSrc}
      alt={bgAlt}
      width={384}
      height={250}
      className='absolute object-cover'
    />
    <div className='absolute bottom-4 left-4 z-10 flex items-center gap-4'>
      <Image src={logoSrc} width={80} height={80} alt={logoAlt} />
      <div className='text-white'>
        {freeTier && <span className='text-[11px]'>7 DÍAS GRATIS</span>}
        <h3 className='font-semibold'>{title}</h3>
        <span className='font-[17px]'>{brand}</span>
      </div>
    </div>
  </article>
);

export default BenefitCard;
