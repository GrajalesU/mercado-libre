import { Product } from "@/types/Product";
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  SET_QUANTITY,
} from "./types";
import { CartItem } from "@/types/Cart";

export function addToCart(product: Product): {
  type: typeof ADD_TO_CART;
  payload: CartItem;
} {
  const cartItem: CartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    offer: product.offer,
    priceWithOffer: product.priceWithOffer,
    quantity: 1,
  };

  return {
    type: ADD_TO_CART,
    payload: cartItem,
  };
}

export function removeFromCart(id: number): {
  type: typeof REMOVE_FROM_CART;
  payload: number;
} {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}

export function increaseQuantity(id: number): {
  type: typeof INCREASE_QUANTITY;
  payload: number;
} {
  return {
    type: INCREASE_QUANTITY,
    payload: id,
  };
}

export function decreaseQuantity(id: number): {
  type: typeof DECREASE_QUANTITY;
  payload: number;
} {
  return {
    type: DECREASE_QUANTITY,
    payload: id,
  };
}

export function clearCart(): {
  type: typeof CLEAR_CART;
} {
  return {
    type: CLEAR_CART,
  };
}

export function setQuantity(
  id: number,
  quantity: number
): {
  type: typeof SET_QUANTITY;
  payload: {
    id: number;
    quantity: number;
  };
} {
  return {
    type: SET_QUANTITY,
    payload: { id, quantity },
  };
}
