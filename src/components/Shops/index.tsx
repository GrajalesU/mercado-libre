import Slider from 'react-slick';
import { ShopCard } from './ShopCard';
import { SHOP_SLIDER_SETTINGS } from './constants';
import { SHOPS } from '@/db/shops';

export const Shops = () => (
  <section className='pb-9 lg:pb-[72px]'>
    <div className='mb-4 flex items-end gap-[16.38px] lg:mb-[22px]'>
      <h2 className='hidden text-[25px] font-light text-gray-300 lg:block'>
        Las mejores tiendas te esperan
      </h2>
      <h2 className='text-xl font-light text-gray-300 lg:hidden lg:text-[25px]'>
        Tiendas Oficiales
      </h2>
      <span className='mb-[7px] cursor-pointer text-[15px] font-normal leading-5 text-blue'>
        Ver más
      </span>
    </div>
    <Slider {...SHOP_SLIDER_SETTINGS} className='group'>
      {SHOPS.map((shop) => (
        <div key={`Shop_${shop.id}`} className='mx-auto'>
          <ShopCard
            brand={shop.brand}
            srcBg={shop.srcBg}
            altBg={shop.altBg}
            srcLogo={shop.srcLogo}
            items={{
              src: shop.src,
              alt: shop.alt,
            }}
          />
        </div>
      ))}
    </Slider>
  </section>
);
