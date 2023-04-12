import { CartButton } from '@/components/Cart/CartButton';

export const Nav = () => (
  <div className='relative flex items-center gap-[52px] pb-1 text-sm font-normal text-black'>
    <button className='w-[134px] text-right leading-6'>
      Ingresa tu domicilio
    </button>
    <nav className=' text-black/60'>
      <ul className='flex gap-[17.8px]'>
        <li>
          <select
            name='Category'
            id='Category'
            className='block w-[6rem] cursor-pointer bg-yellow focus:outline-0'
            defaultValue={'None'}
          >
            <option selected>Categorías</option>
          </select>
        </li>
        <li className='cursor-pointer'>Ofertas</li>
        <li className='cursor-pointer'>Historial</li>
        <li className='cursor-pointer'>Supermercado</li>
        <li className='cursor-pointer'>Moda</li>
        <li className='cursor-pointer'>Vender</li>
        <li className='cursor-pointer'>Ayuda / PQR</li>
      </ul>
    </nav>
    <span className='ml-36'>Crea tu cuenta Ingresa Mis compras</span>
    <CartButton />
  </div>
);
