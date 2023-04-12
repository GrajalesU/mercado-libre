import Image from 'next/image';
import React from 'react';

export const PaymentMethods = () => (
  <section className='my-10 flex justify-between rounded bg-white shadow-sm'>
    <ul className='flex w-full p-[20.5px]'>
      <li className='grow'>
        <div className='flex gap-[16.5px] '>
          <Image
            src='./CreditCard.svg'
            alt='Credit card icon'
            width={47}
            height={47}
          />
          <div className='flex flex-col'>
            <span className='text-lg'>Hasta 48 cuotas</span>
            <span className='text-md cursor-pointer text-blue'>Ver más</span>
          </div>
        </div>
      </li>
      <li className='grow'>
        <div className='flex gap-[16.5px]'>
          <Image
            src='./Bank.svg'
            alt='Credit card icon'
            width={47}
            height={47}
          />
          <div className='flex flex-col'>
            <span className='text-lg'>Transferencia desde tu banco</span>
            <span className='text-md cursor-pointer text-blue'>Ver más</span>
          </div>
        </div>
      </li>
      <li className='grow'>
        <div className='flex gap-[16.5px]'>
          <Image
            src='./Cash.svg'
            alt='Credit card icon'
            width={47}
            height={47}
          />
          <div className='flex flex-col'>
            <span className='text-lg'>Paga en efectivo</span>
            <span className='text-md cursor-pointer text-blue'>Ver más</span>
          </div>
        </div>
      </li>
    </ul>
    <div className='flex min-w-[300px] items-center gap-[16.5px] border-l border-l-gray-100 px-[20.5px]'>
      <Image src='./More.svg' alt='Credit card icon' width={47} height={47} />
      <div className='flex flex-col'>
        <span className='text-lg'>Más medios de pago</span>
        <span className='text-md cursor-pointer text-blue'>Ver todos</span>
      </div>
    </div>
  </section>
);
