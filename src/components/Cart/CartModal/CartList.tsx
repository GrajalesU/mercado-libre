import { useCartContext } from '@/context/Cart';
import CartListElement from './CartListElement';
import scroll from './styles/scroll.module.css';

const CartList = () => {
  const { state: items } = useCartContext();
  return (
    <div
      className={`max-h-[40vh] overflow-y-auto px-4 lg:max-h-[45vh] ${scroll['custom-scroll']}`}
    >
      {items.map((item) => (
        <CartListElement key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
