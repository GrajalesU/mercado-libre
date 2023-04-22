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
    <div className='flex flex-col gap-4 p-3 border-t border-gray-100 rounded-b'>
      <div className='mb-2 ml-auto mr-2 text-sm md:text-base'>
        <h3 className='flex'>
          <span className='block mr-auto'>Total </span>
          <span className='block ml-4 font-bold'>
            {numberToPrice(getSubtotal(items))}
          </span>
        </h3>
        <h3 className='flex'>
          <span className='block mr-auto'>Envío </span>
          <span className='block ml-4 font-bold'>
            {numberToPrice(getDeliveryPrice(items))}
          </span>
        </h3>
        <h3 className='flex'>
          <span className='block mr-auto'>Total con envío </span>
          <span className='block ml-4 font-bold'>
            {numberToPrice(getTotal(items))}
          </span>
        </h3>
      </div>
      <div className='flex items-center justify-between px-2 py-4'>
        <button
          className='px-1 py-1 text-lg font-bold border rounded border-red text-red md:px-6 md:py-2 md:text-sm '
          type='button'
          onClick={handleCloseModal}
        >
          Cerrar
        </button>
        <button
          className='px-1 py-1 text-lg text-white rounded bg-blue md:px-6 md:py-2 md:text-sm'
          type='button'
          onClick={handleCloseModal}
        >
          Continuar compra
        </button>
      </div>
    </div>
  );
};
