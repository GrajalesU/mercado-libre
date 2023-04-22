import React from 'react';
import { OfferCard } from './OfferCard';
import { PRODUCTS } from '@/db/products';
import { WithCardAddition } from '@/components/HOC/WithCardAddition';
import Slider from 'react-slick';
import { OFFER_SLIDER_SETTINGS } from './constants';

export const Offers = () => (
  <section className='mt-[50px] mb-20'>
    <div className='mb-4 flex items-end gap-[16.38px] lg:mb-[22px]'>
      <h2 className='text-xl font-light text-gray-300 lg:text-[25px]'>
        Ofertas
      </h2>
      <span className='mb-[7px] cursor-pointer text-[15px] font-normal leading-5 text-blue'>
        Ver todas
      </span>
    </div>
    <Slider {...OFFER_SLIDER_SETTINGS} className='group'>
      {PRODUCTS.map((product) => (
        <div key={`Product_${product.id}`} className='mx-auto'>
          <WithCardAddition product={product}>
            <OfferCard
              free={!product.deliverPrice}
              offer={product.offer}
              full={product.isFull}
              price={product.priceWithOffer || product.price}
              src={product.image}
            />
          </WithCardAddition>
        </div>
      ))}
    </Slider>
  </section>
);
