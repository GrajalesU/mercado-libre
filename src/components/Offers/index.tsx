import React from 'react';
import { OfferCard } from './OfferCard';
import { PRODUCTS } from '@/db/products';
import { WithCardAddition } from '@/components/HOC/WithCardAddition';

export const Offers = () => (
  <section className='mt-[50px] mb-20'>
    <div className='mb-[22px] flex items-end gap-[16.38px]'>
      <h2 className='text-[25px] font-light text-gray-300'>Ofertas</h2>
      <span className='mb-[7px] cursor-pointer text-[15px] font-normal leading-5 text-blue'>
        Ver todas
      </span>
    </div>
    <ul className='flex justify-between'>
      {PRODUCTS.map((product) => (
        <li key={`Product_${product.id}`}>
          <WithCardAddition product={product}>
            <OfferCard
              free={!product.deliverPrice}
              offer={product.offer}
              full={product.isFull}
              price={product.priceWithOffer || product.price}
              src={product.image}
            />
          </WithCardAddition>
        </li>
      ))}
    </ul>
  </section>
);
