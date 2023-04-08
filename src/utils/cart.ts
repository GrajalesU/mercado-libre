import { CartState } from "@/reducers/cart";

export const countProducts = (cart: CartState) => {
  return cart.reduce((acc, item) => acc + item.quantity, 0);
};

export const getSubtotal = (cart: CartState) => {
  return cart.reduce((prev, current) => {
    const price = current.priceWithOffer || current.price;
    return prev + price * current.quantity;
  }, 0);
};

export const getDeliveryPrice = (cart: CartState) => {
  return cart.reduce((prev, current) => {
    const deliverPrice = current.deliverPrice || 0;
    return prev + deliverPrice;
  }, 0);
};

export const getTotal = (cart: CartState) => {
  return getSubtotal(cart) + getDeliveryPrice(cart);
};
