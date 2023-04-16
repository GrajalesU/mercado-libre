import { useCartContext } from '@/context/Cart';
import { getDeliveryPrice, getSubtotal, getTotal } from '@/utils/cart';
import { numberToPrice } from '@/utils/format';
import React from 'react';

interface CartModalFooterProps {
  handleCloseModal: () => void;
}

export const CartModalFooter = ({ handleCloseModal }: CartModalFooterProps) => {
  const { state: items } = useCartContext();

  if (items.length === 0) return null;

  return (
    <div className='flex flex-col gap-4 rounded-b border-t border-gray-100 p-3'>
      <div className='mr-2 mb-2 ml-auto text-sm md:text-base'>
        <h3 className='flex'>
          <span className='mr-auto  block'>Total </span>
          <span className='ml-4 block font-bold'>
            {numberToPrice(getSubtotal(items))}
          </span>
        </h3>
        <h3 className='flex'>
          <span className='mr-auto block'>Envío </span>
          <span className='ml-4 block font-bold'>
            {numberToPrice(getDeliveryPrice(items))}
          </span>
        </h3>
        <h3 className='flex'>
          <span className='mr-auto block'>Total con envío </span>
          <span className='ml-4 block font-bold'>
            {numberToPrice(getTotal(items))}
          </span>
        </h3>
      </div>
      <div className='flex items-center justify-between py-4 px-2'>
        <button
          className='rounded border border-red px-0 py-1 text-lg font-bold text-red md:px-6 md:py-2 md:text-sm '
          type='button'
          onClick={handleCloseModal}
        >
          Cerrar
        </button>
        <button
          className='rounded bg-blue px-0 py-1 text-lg text-white md:px-6 md:py-2 md:text-sm'
          type='button'
          onClick={handleCloseModal}
        >
          Continuar compra
        </button>
      </div>
    </div>
  );
};
