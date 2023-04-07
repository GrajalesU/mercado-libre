//Teacher version
import { CartItem } from "@/types/Cart";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface CartContextProps {
  items: CartItem[];
  setItems: Dispatch<SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const useCartContext = () => {
  return useContext(CartContext);
};

interface CartContextProviderProps {
  children: React.ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Producto 345",
      price: 10000,
      quantity: 1,
      image: "/offers/offer-1.png",
      offer: 10,
      priceWithOffer: 9000,
    },
    {
      id: 2,
      name: "Motosierra",
      price: 2000000,
      quantity: 3,
      image: "/offers/offer-2.png",
    },
    {
      id: 3,
      name: "Alicate HD VISION AVIATOR",
      price: 3000,
      quantity: 1,
      image: "/offers/offer-3.png",
    },
    {
      id: 4,
      name: "Producto 345",
      price: 10000,
      quantity: 1,
      image: "/offers/offer-1.png",
      offer: 10,
      priceWithOffer: 9000,
    },
    {
      id: 5,
      name: "Motosierra",
      price: 2000000,
      quantity: 3,
      image: "/offers/offer-2.png",
    },
    {
      id: 6,
      name: "Alicate HD VISION AVIATOR",
      price: 3000,
      quantity: 1,
      image: "/offers/offer-3.png",
    },
    {
      id: 7,
      name: "Producto 345",
      price: 10000,
      quantity: 1,
      image: "/offers/offer-1.png",
      offer: 10,
      priceWithOffer: 9000,
    },
    {
      id: 8,
      name: "Motosierra",
      price: 2000000,
      quantity: 3,
      image: "/offers/offer-2.png",
    },
    {
      id: 9,
      name: "Alicate HD VISION AVIATOR",
      price: 3000,
      quantity: 1,
      image: "/offers/offer-3.png",
    },
    {
      id: 10,
      name: "Producto 345",
      price: 10000,
      quantity: 1,
      image: "/offers/offer-1.png",
      offer: 10,
      priceWithOffer: 9000,
    }
  ]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
