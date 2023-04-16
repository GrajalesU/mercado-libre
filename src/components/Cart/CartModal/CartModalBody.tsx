import React from 'react';
import CartList from './CartList';
import { useCartContext } from '@/context/Cart';

export const CartModalBody = () => {
  const { state: items } = useCartContext();

  if (items.length === 0) {
    return (
      <div className='relative flex flex-auto flex-col items-center justify-center p-6'>
        <h3 className='text-xl font-semibold'>Carrito vacío</h3>
        <h4 className='text-base'>No hay productos en el carrito</h4>
      </div>
    );
  }

  return (
    <div className='relative flex-auto p-6'>
      <CartList />
    </div>
  );
};
