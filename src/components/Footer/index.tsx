import Image from 'next/image';
import React from 'react';

export const Footer = () => (
  <div className='mx-auto max-w-[1184px] bg-white pt-4'>
    <footer className='pb-[50px]'>
      <div className='border-b border-b-gray-100 pb-3'>
        <nav>
          <ul className='mb-[7px] flex gap-5 text-xs text-black'>
            <li>Trabaja con nosotros</li>
            <li>Términos y condiciones</li>
            <li>Cómo cuidamos tu privacidad</li>
            <li>Accesibilidad</li>
            <li>Ayuda / PQR</li>
            <li>www.sic.gov.co</li>
          </ul>
        </nav>
        <span className='block text-[11px] text-gray-200'>
          Copyright © 1999-2023 MercadoLibre Colombia LTDA.
        </span>
        <span className='text-[11px] text-gray-200'>
          Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia
        </span>
      </div>
      <div className='flex gap-5 pt-5'>
        <Image
          src='/sic.png'
          alt='Superintendencia de industria y comercio'
          width={141}
          height={30}
        />
        <Image
          src='/pum.png'
          alt='Precio por unidad de medida'
          width={200}
          height={34}
        />
      </div>
    </footer>
  </div>
);
