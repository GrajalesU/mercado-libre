import { useCartContext } from '@/context/Cart';
import { addToCart } from '@/reducers/cart';
import { Product } from '@/types/Product';
import React, { ReactNode } from 'react';
import { toast } from 'react-toastify';

interface WithCardAdditionProps {
  children: ReactNode;
  product: Product;
}

export const WithCardAddition = ({
  children,
  product,
}: WithCardAdditionProps) => {
  const { dispatchCart, state } = useCartContext();

  const handleClick = () => {
    const item = state.find((item) => item.id === product.id);
    if (item?.quantity === product.stock) {
      toast.error('No hay más stock de este producto');
      return;
    }

    dispatchCart(addToCart(product));
    toast.success('Producto agregado al carrito');
  };

  return <button onClick={handleClick}>{children}</button>;
};
