import { CartItem } from "@/types/Cart";
import {
  ADD_TO_CART,
  CLEAR_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
  SET_QUANTITY,
} from "./types";
import { CartAction } from "./actions";

export type CartState = CartItem[];

export const initialCartState: CartState = [];

export function cartReducer(
  state: CartState = initialCartState,
  action: CartAction
) {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;

      const existingItem = state.find(
        (currentItem) => currentItem.id === item.id
      );

      if (existingItem) {
        return state.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, item];
    }

    case REMOVE_FROM_CART: {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    }

    case INCREASE_QUANTITY: {
      const id = action.payload;
      const item = state.find((item) => item.id === id);

      if (item) {
        return state.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return state;
      }
    }
    case DECREASE_QUANTITY: {
      const id = action.payload;
      const item = state.find((item) => item.id === id);
      if (item?.quantity === 1) {
        return state.filter((item) => item.id !== id);
      }
      if (item) {
        return state.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return state;
    }
    case SET_QUANTITY: {
      const { id, quantity } = action.payload;
      const item = state.find((item) => item.id === id);

      if (item) {
        return state.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
      }
      return state;
    }
    case CLEAR_CART: {
      return initialCartState;
    }
    default:
      return state;
  }
}
