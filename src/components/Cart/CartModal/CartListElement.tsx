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
    <div className='flex flex-wrap items-center gap-8 px-2 py-4 border-b border-gray-100'>
      <div className='flex items-center gap-8'>
        <Image src={item.image} alt={item.name} width={50} height={50} />
        <div className='w-[140px] sm:w-full sm:max-w-[210px] lg:min-w-[450px] lg:max-w-[600px]'>
          <h3 className='text-lg font-bold truncate'>{item.name}</h3>
        </div>
      </div>
      <div className='flex gap-8 ml-auto'>
        <div className='flex items-center gap-2 lg:gap-8'>
          <div className='relative'>
            <div className='flex gap-2 p-1 text-xs border border-gray-100 rounded text-blue lg:p-2 lg:text-sm'>
              <button onClick={handleDecrease}>-</button>
              <input
                className={`w-10 text-center text-xs text-black lg:text-lg ${input['appearance-none']}`}
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
              className='w-6 h-6 lg:h-5 lg:w-5'
            />
          </button>
        </div>
        <div className='flex flex-col w-28 lg:ml-auto'>
          {item.offer && (
            <div className='ml-auto flex gap-2 text-[10px] lg:text-xs'>
              <span className='text-green'>{item.offer} %</span>
              <span className='line-through'>
                {numberToPrice(item.price * item.quantity)}
              </span>
            </div>
          )}
          {item.priceWithOffer ? (
            <span className='self-end font-semibold lg:text-lg'>
              {numberToPrice(item.priceWithOffer * item.quantity)}
            </span>
          ) : (
            <span className='self-end font-semibold lg:text-lg'>
              {numberToPrice(item.price * item.quantity)}
            </span>
          )}
          {item.deliverPrice && (
            <div className='flex gap-2 ml-auto'>
              <Image
                src='/Deliver.svg'
                alt='Icono de carro de domicilio'
                width={18}
                height={18}
              />
              <span className='self-end text-[10px] text-green lg:text-xs'>
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
