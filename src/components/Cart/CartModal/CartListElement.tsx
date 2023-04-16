import { useCartContext } from "@/context/Cart";
import { PRODUCTS } from "@/db/products";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  setQuantity,
} from "@/reducers/cart";
import { CartItem } from "@/types/Cart";
import { Product } from "@/types/Product";
import { numberToPrice } from "@/utils/format";
import Image from "next/image";
import { toast } from "react-toastify";
import input from "./styles/input.module.css";

export default function CartListElement({ item }: { item: CartItem }) {
  const { dispatchCart } = useCartContext();
  const product = PRODUCTS.find((product) => product.id === item.id) as Product;

  const handleAdd = () => {
    if (item.quantity === product.stock) {
      toast.error("No hay más stock de este producto");
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
      toast.error("No hay más stock de este producto");
      return;
    }
    if (value < 1) {
      toast.error("La cantidad debe ser mayor a 0");
      return;
    }

    dispatchCart(setQuantity(item.id, value));
  };

  const handleDelete = () => {
    dispatchCart(removeFromCart(item.id));
  };

  return (
    <div className="flex flex-wrap gap-8 items-center border-b border-gray-100 px-2 py-4">
      <div className="flex gap-8 items-center">
        <Image src={item.image} alt={item.name} width={50} height={50} />
        <div className="sm:w-full w-[140px] sm:max-w-[210px] md:max-w-[240px] lg:min-w-[450px] lg:max-w-[600px]">
          <h3 className="font-bold text-lg truncate">{item.name}</h3>
        </div>
      </div>
      <div className="flex gap-8 ml-auto">
        <div className="flex gap-2 md:gap-8 items-center">
          <div className="relative">
            <div className="flex gap-2 text-blue text-xs md:text-sm rounded border border-gray-100 p-1 md:p-2">
              <button onClick={handleDecrease}>-</button>
              <input
                className={`text-black w-10 text-xs md:text-lg text-center ${input["appearance-none"]}`}
                value={item.quantity}
                min={1}
                max={product.stock}
                type="number"
                step={1}
                onChange={handleChange}
              />
              <button onClick={handleAdd}>+</button>
            </div>
            <small className="absolute text-gray-200 text-center w-full text-[10px]">{product.stock} disponibles</small>
          </div>
          <button onClick={handleDelete}>
            <Image
              src="/Delete.svg"
              width={20}
              height={20}
              alt="Eliminar"
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </button>
        </div>
        <div className="md:ml-auto flex flex-col w-28">
          {item.offer && (
            <div className="flex gap-2 text-[10px] md:text-xs ml-auto">
              <span className="text-green">{item.offer} %</span>
              <span className="line-through">
                {numberToPrice(item.price * item.quantity)}
              </span>
            </div>
          )}
          {item.priceWithOffer ? (
            <span className="self-end md:text-lg font-semibold">
              {numberToPrice(item.priceWithOffer * item.quantity)}
            </span>
          ) : (
            <span className="self-end md:text-lg font-semibold">
              {numberToPrice(item.price * item.quantity)}
            </span>
          )}
          {item.deliverPrice && (
            <div className="flex gap-2 ml-auto">
              <Image
                src="/Deliver.svg"
                alt="Icono de carro de domicilio"
                width={18}
                height={18}
              />
              <span className="self-end text-[10px] md:text-xs text-green">
                {numberToPrice(item.deliverPrice)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
