import { useCartContext } from "@/context/Cart";
import { addToCart } from "@/reducers/cart";
import { Product } from "@/types/Product";
import React, { ReactNode } from "react";
import { toast } from "react-toastify";

interface WithCardAdditionProps {
  children: ReactNode;
  product: Product;
}

export default function WithCardAddition({
  children,
  product,
}: WithCardAdditionProps) {
  const { dispatchCart } = useCartContext();

  const handleClick = () => {
    //TODO: ADD TOAST TO SHOW PRODUCT ADDED
    dispatchCart(addToCart(product));
  };

  return <button onClick={handleClick}>{children}</button>;
}
