import Image from 'next/image';
import React from 'react';

export const PaymentAndSecurityInfo = () => (
  <section className='py-10'>
    <ul className='flex flex-col items-stretch justify-center lg:flex-row lg:items-start'>
      <li className='mb-4 grow'>
        <div className='flex flex-col items-center text-center'>
          <Image
            src='/Payment.svg'
            alt='Tarjeta de crédito'
            width={66}
            height={45}
            className='mb-[25px]'
          />
          <h3 className='text-xl font-medium text-gray-400'>
            Paga con tarjeta o en efectivo
          </h3>
          <p className='mt-1 px-10 lg:px-0 lg:max-w-[300px] text-[15px] text-gray-200'>
            Con Mercado Pago, paga en cuotas y aprovecha la comodidad de
            financiación que te da tu banco, o hazlo con efectivo en puntos de
            pago. ¡Y siempre es seguro!
          </p>
          <span className='mt-2 text-[13px] text-blue'>
            Cómo pagar con Mercado Pago
          </span>
        </div>
      </li>
      <div className='self-center w-full border-b border-b-gray-100 lg:rotate-90 lg:w-[65px]' />
      <li className='my-4 grow'>
        <div className='flex flex-col items-center text-center'>
          <Image
            src='/Shipping.svg'
            alt='Caja de regalo'
            width={54}
            height={48}
            className='mb-[22px]'
          />
          <h3 className='text-xl font-medium text-gray-400'>
            Envío gratis desde $ 90.000
          </h3>
          <p className='mt-1 px-10 lg:px-0 lg:max-w-[300px] text-[15px] text-gray-200'>
            Con solo estar registrado en Mercado Libre, tienes envíos gratis en
            miles de productos seleccionados.
          </p>
          <span className='mt-2 text-[13px] text-blue'>
            Conoce más sobre este beneficio
          </span>
        </div>
      </li>
      <div className='self-center w-full border-b border-b-gray-100 lg:rotate-90 lg:w-[65px]' />
      <li className='mt-4 grow'>
        <div className='flex flex-col items-center text-center'>
          <Image
            src='/Protected.svg'
            alt='Escudo'
            width={49}
            height={52}
            className='mb-[17px]'
          />
          <h3 className='text-xl font-medium text-gray-400'>
            Seguridad, de principio a fin
          </h3>
          <p className='mt-1 px-10 lg:px-0 lg:max-w-[300px] text-[15px] text-gray-200'>
            ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no
            puedas hacer, porque estás siempre protegido.
          </p>
          <span className='mt-2 text-[13px] text-blue'>Cómo te protegemos</span>
        </div>
      </li>
    </ul>
  </section>
);
