import { useCartContext } from '@/context/Cart';
import Image from 'next/image';
import React, { useState } from 'react';
import { CartModal } from './CartModal';
import { countProducts } from '@/utils/cart';

interface CartButtonProps{
  p_width:number; p_height:number;
}

export default function CartButton({p_width, p_height} : CartButtonProps) {

  const { state: items } = useCartContext();
  const [show, setShow] = useState(false);
  const quantity = countProducts(items);

  const handleOpenModal = () => {
    setShow(true);
  };

  return (
    <>
      <button className="scale-[70%] -right-8" onClick={handleOpenModal}>
        <div className="relative">
          <Image
            src="/Cart.svg"
            alt="Icono de carrito"
            width={p_width}
            height={p_height}

          />
          <span className='absolute -top-[1.5px] left-[13px] text-[13px] text-white'>
            {quantity > 9 && 9}
            {quantity > 0 && quantity < 10 && quantity}
          </span>
          {quantity > 9 && (
            <span className='absolute -top-1 right-1 text-[11px] text-white'>
              +
            </span>
          )}
        </div>
      </button>
      <CartModal show={show} setShow={setShow} />
    </>
  );
};
