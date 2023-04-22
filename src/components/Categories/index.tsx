import React from 'react';
import { CategoryItem } from './CategoryItem';

export const Categories = () => (
  <section className='mt-20 mb-5'>
    <h2 className='mb-6 gap-x-1 gap-y-1 text-xl font-light text-gray-300 lg:text-[25px]'>
      Categorías populares
    </h2>
    <ul className='grid grid-cols-2 gap-4 overflow-hidden rounded shadow-sm lg:grid-cols-7 lg:grid-rows-2 lg:gap-0'>
      <li>
        <CategoryItem
          src='/categories/categories-1.svg'
          alt='Carro'
          description='Carros, Motos y Otros'
        />
      </li>
      <li>
        <CategoryItem
          src='/categories/categories-2.svg'
          alt='Computador'
          description='Computación'
        />
      </li>
      <li>
        <CategoryItem
          src='/categories/categories-3.svg'
          alt='Camisa'
          description='Ropa y Accesorios'
        />
      </li>
      <li>
        <CategoryItem
          src='/categories/categories-4.svg'
          alt='Mueble'
          description='Hogar y Muebles'
        />
      </li>
      <li>
        <CategoryItem
          src='/categories/categories-5.svg'
          alt='Manubrio'
          description='Accesorios para Vehículos'
        />
      </li>
      <li>
        <CategoryItem
          src='/categories/categories-6.svg'
          alt='Horno'
          description='Electrodomésticos'
        />
      </li>
      <li className='hidden lg:block'>
        <CategoryItem
          src='/categories/categories-7.svg'
          alt='Cámara'
          description='Cámaras y Accesorios'
        />
      </li>
      <li className='hidden lg:block'>
        <CategoryItem
          src='/categories/categories-8.svg'
          alt='Smartphone'
          description='Celulares y Teléfonos'
        />
      </li>
      <li className='hidden lg:block'>
        <CategoryItem
          src='/categories/categories-9.svg'
          alt='Labial'
          description='Belleza y Cuidado Personal'
        />
      </li>
      <li className='hidden lg:block'>
        <CategoryItem
          src='/categories/categories-10.svg'
          alt='Balón de futbol'
          description='Deportes y Fitness'
        />
      </li>
      <li className='hidden lg:block'>
        <CategoryItem
          src='/categories/categories-11.svg'
          alt='Micrófono'
          description='Electrónica, Audio y Video'
        />
      </li>
      <li className='hidden lg:block'>
        <CategoryItem
          src='/categories/categories-12.svg'
          alt='Control'
          description='Consolas y Videojuegos'
        />
      </li>
      <li className='hidden lg:block'>
        <CategoryItem
          src='/categories/categories-13.svg'
          alt='Oso de peluche'
          description='Juegos y Juguetes'
        />
      </li>
      <li className='hidden lg:block'>
        <CategoryItem
          src='/categories/categories-14.svg'
          alt='Llave plana'
          description='Herramientas'
        />
      </li>
    </ul>
    <div className='flex justify-center py-4 mt-4 bg-white rounded shadow-sm lg:hidden'>
      <span className='text-lg font-normal text-blue lg:text-[20px]'>
        Descubre más
      </span>
    </div>
  </section>
);
