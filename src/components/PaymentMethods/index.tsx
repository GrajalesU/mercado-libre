import Image from 'next/image';
import React from 'react';
import cn from 'classnames';

const PAYMENT_INFO_CLASS =
  'flex w-full px-4 py-5 md:w-1/2 lg:w-auto border-b border-b-gray-100 md:border-0';

export const PaymentMethods = () => (
  <section className='shadow-[0 1px 1px 0 rgba(0,0,0,.1)] my-10 flex flex-wrap justify-between rounded bg-white px-12 md:flex-nowrap md:px-0'>
    <ul className='flex w-full flex-wrap justify-between'>
      <li className={cn(PAYMENT_INFO_CLASS)}>
        <Image
          className='mr-2'
          src='./CreditCard.svg'
          alt='Credit card icon'
          width={47}
          height={47}
        />
        <div className='flex flex-col'>
          <span className='text-lg'>Hasta 48 cuotas</span>
          <span className='text-md cursor-pointer text-blue'>Ver más</span>
        </div>
      </li>
      <li className={cn(PAYMENT_INFO_CLASS)}>
        <Image
          className='mr-2'
          src='./Bank.svg'
          alt='Credit card icon'
          width={47}
          height={47}
        />
        <div className='flex flex-col'>
          <span className='text-lg'>Transferencia desde tu banco</span>
          <span className='text-md cursor-pointer text-blue'>Ver más</span>
        </div>
      </li>
      <li className={cn(PAYMENT_INFO_CLASS)}>
        <Image
          className='mr-2'
          src='./Cash.svg'
          alt='Credit card icon'
          width={47}
          height={47}
        />
        <div className='flex flex-col'>
          <span className='text-lg'>Paga en efectivo</span>
          <span className='text-md cursor-pointer text-blue'>Ver más</span>
        </div>
      </li>
      <li
        className={cn('lg:border-l lg:border-l-gray-100', PAYMENT_INFO_CLASS)}
      >
        <Image
          className='mr-2'
          src='./More.svg'
          alt='Credit card icon'
          width={47}
          height={47}
        />
        <div className='flex flex-col'>
          <span className='text-lg'>Más medios de pago</span>
          <span className='text-md cursor-pointer text-blue'>Ver todos</span>
        </div>
      </li>
    </ul>
  </section>
);
