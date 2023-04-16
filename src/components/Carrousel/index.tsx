import Image from 'next/image';
import React from 'react';
import Unselected from './Unselected';
import Selected from './Selected';

const Carrousel = () => (
  <section className='relative h-[340px] w-full'>
    <Image
      src='/Carrousel.svg'
      alt='Women week'
      className='absolute h-[340px] w-full object-cover'
      width={1500}
      height={340}
    />
    <ul className='absolute bottom-2 left-[calc(50%-34px)] z-30 flex gap-1'>
      <li>
        <Unselected />
      </li>
      <li>
        <Selected />
      </li>
      <li>
        <Unselected />
      </li>
      <li>
        <Unselected />
      </li>
      <li>
        <Unselected />
      </li>
      <li>
        <Unselected />
      </li>
    </ul>
  </section>
);

export default Carrousel;
