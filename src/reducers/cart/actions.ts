import { Product } from '@/types/Product';
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  SET_QUANTITY,
} from './types';
import { CartItem } from '@/types/Cart';

type AddToCartAction = {
  type: typeof ADD_TO_CART;
  payload: CartItem;
};

export function addToCart(product: Product): AddToCartAction {
  const cartItem: CartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    offer: product.offer,
    priceWithOffer: product.priceWithOffer,
    deliverPrice: product.deliverPrice,
    quantity: 1,
  };

  return {
    type: ADD_TO_CART,
    payload: cartItem,
  };
}

type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART;
  payload: number;
};

export function removeFromCart(id: number): RemoveFromCartAction {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}

type IncreaseQuantityAction = {
  type: typeof INCREASE_QUANTITY;
  payload: number;
};

export function increaseQuantity(id: number): IncreaseQuantityAction {
  return {
    type: INCREASE_QUANTITY,
    payload: id,
  };
}

type DecreaseQuantityAction = {
  type: typeof DECREASE_QUANTITY;
  payload: number;
};

export function decreaseQuantity(id: number): DecreaseQuantityAction {
  return {
    type: DECREASE_QUANTITY,
    payload: id,
  };
}

type ClearCartAction = {
  type: typeof CLEAR_CART;
};

export function clearCart(): ClearCartAction {
  return {
    type: CLEAR_CART,
  };
}

type SetQuantityAction = {
  type: typeof SET_QUANTITY;
  payload: {
    id: number;
    quantity: number;
  };
};

export function setQuantity(id: number, quantity: number): SetQuantityAction {
  return {
    type: SET_QUANTITY,
    payload: { id, quantity },
  };
}

export type CartAction =
  | AddToCartAction
  | RemoveFromCartAction
  | IncreaseQuantityAction
  | DecreaseQuantityAction
  | ClearCartAction
  | SetQuantityAction;
