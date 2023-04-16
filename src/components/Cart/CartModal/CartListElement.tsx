import { useCartContext } from '@/context/Cart';
import { PRODUCTS } from '@/db/products';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  setQuantity,
} from '@/reducers/cart';
import { CartItem } from '@/types/Cart';
import { Product } from '@/types/Product';
import { numberToPrice } from '@/utils/format';
import Image from 'next/image';
import { toast } from 'react-toastify';
import input from './styles/input.module.css';

const CartListElement = ({ item }: { item: CartItem }) => {
  const { dispatchCart } = useCartContext();
  const product = PRODUCTS.find((product) => product.id === item.id) as Product;

  const handleAdd = () => {
    if (item.quantity === product.stock) {
      toast.error('No hay más stock de este producto');
      return;
    }

    dispatchCart(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatchCart(decreaseQuantity(item.id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > product.stock) {
      toast.error('No hay más stock de este producto');
      return;
    }
    if (value < 1) {
      toast.error('La cantidad debe ser mayor a 0');
      return;
    }

    dispatchCart(setQuantity(item.id, value));
  };

  const handleDelete = () => {
    dispatchCart(removeFromCart(item.id));
  };

  return (
    <div className='flex flex-wrap items-center gap-8 border-b border-gray-100 px-2 py-4'>
      <div className='flex items-center gap-8'>
        <Image src={item.image} alt={item.name} width={50} height={50} />
        <div className='w-[140px] sm:w-full sm:max-w-[210px] md:max-w-[240px] lg:min-w-[450px] lg:max-w-[600px]'>
          <h3 className='truncate text-lg font-bold'>{item.name}</h3>
        </div>
      </div>
      <div className='ml-auto flex gap-8'>
        <div className='flex items-center gap-2 md:gap-8'>
          <div className='relative'>
            <div className='flex gap-2 rounded border border-gray-100 p-1 text-xs text-blue md:p-2 md:text-sm'>
              <button onClick={handleDecrease}>-</button>
              <input
                className={`w-10 text-center text-xs text-black md:text-lg ${input['appearance-none']}`}
                value={item.quantity}
                min={1}
                max={product.stock}
                type='number'
                step={1}
                onChange={handleChange}
              />
              <button onClick={handleAdd}>+</button>
            </div>
            <small className='absolute w-full text-center text-[10px] text-gray-200'>
              {product.stock} disponibles
            </small>
          </div>
          <button onClick={handleDelete}>
            <Image
              src='/Delete.svg'
              width={20}
              height={20}
              alt='Eliminar'
              className='h-4 w-4 md:h-5 md:w-5'
            />
          </button>
        </div>
        <div className='flex w-28 flex-col md:ml-auto'>
          {item.offer && (
            <div className='ml-auto flex gap-2 text-[10px] md:text-xs'>
              <span className='text-green'>{item.offer} %</span>
              <span className='line-through'>
                {numberToPrice(item.price * item.quantity)}
              </span>
            </div>
          )}
          {item.priceWithOffer ? (
            <span className='self-end font-semibold md:text-lg'>
              {numberToPrice(item.priceWithOffer * item.quantity)}
            </span>
          ) : (
            <span className='self-end font-semibold md:text-lg'>
              {numberToPrice(item.price * item.quantity)}
            </span>
          )}
          {item.deliverPrice && (
            <div className='ml-auto flex gap-2'>
              <Image
                src='/Deliver.svg'
                alt='Icono de carro de domicilio'
                width={18}
                height={18}
              />
              <span className='self-end text-[10px] text-green md:text-xs'>
                {numberToPrice(item.deliverPrice)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartListElement;
