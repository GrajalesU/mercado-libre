import { useCartContext } from '@/context/Cart';
import { countProducts } from '@/utils/cart';
import React from 'react';

interface CartModalHeaderProps {
  handleCloseModal: () => void;
}

export const CartModalHeader = ({ handleCloseModal }: CartModalHeaderProps) => {
  const { state: items } = useCartContext();

  if (items.length === 0)
    return (
      <div className='flex items-center justify-between rounded-t p-3'>
        <button
          className='float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none outline-none focus:outline-none'
          onClick={handleCloseModal}
        >
          <span className='block h-6 w-6 bg-transparent text-2xl text-gray-400 outline-none transition-colors hover:text-gray-300 focus:outline-none'>
            ×
          </span>
        </button>
      </div>
    );

  return (
    <div className='flex items-center justify-between rounded-t p-3'>
      <div>
        <h3 className='text-xl font-semibold'>Carrito</h3>
        <h4 className='text-base'>
          Cantidad de productos: {countProducts(items)}
        </h4>
      </div>
      <button
        className='float-right ml-auto border-0 bg-transparent p-1 text-3xl font-semibold leading-none outline-none focus:outline-none'
        onClick={handleCloseModal}
      >
        <span className='block h-6 w-6 bg-transparent text-2xl text-gray-400 outline-none transition-colors hover:text-gray-300 focus:outline-none'>
          ×
        </span>
      </button>
    </div>
  );
};
