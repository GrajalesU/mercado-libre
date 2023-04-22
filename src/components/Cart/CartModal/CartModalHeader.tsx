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
      <div className='flex items-center justify-between p-3 rounded-t'>
        <button
          className='float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none focus:outline-none'
          onClick={handleCloseModal}
        >
          <span className='block w-6 h-6 text-2xl text-gray-400 transition-colors bg-transparent outline-none hover:text-gray-300 focus:outline-none'>
            ×
          </span>
        </button>
      </div>
    );

  return (
    <div className='flex items-center justify-between p-3 rounded-t'>
      <div className='p-2'>
        <h3 className='text-xl font-semibold'>Carrito</h3>
        <h4 className='text-base'>
          Cantidad de productos: {countProducts(items)}
        </h4>
      </div>
      <button
        className='float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none focus:outline-none'
        onClick={handleCloseModal}
      >
        <span className='block w-6 h-6 text-2xl text-gray-400 transition-colors bg-transparent outline-none hover:text-gray-300 focus:outline-none'>
          ×
        </span>
      </button>
    </div>
  );
};
