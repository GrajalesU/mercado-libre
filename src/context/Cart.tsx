import {
  CartAction,
  CartState,
  cartReducer,
  initialCartState,
} from "@/reducers/cart";
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

interface CartContextProps {
  state: CartState;
  dispatchCart: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const useCartContext = () => {
  return useContext(CartContext);
};

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [state, dispatchCart] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};
