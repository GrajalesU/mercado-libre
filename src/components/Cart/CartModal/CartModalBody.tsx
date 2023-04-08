import React from "react";
import CartList from "./CartList";
import { useCartContext } from "@/context/Cart";

export default function CartModalBody() {
  const { state: items } = useCartContext();

  if (items.length === 0) {
    return (
      <div className="relative p-6 flex-auto flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold">Carrito vacío</h3>
        <h4 className="text-base">No hay productos en el carrito</h4>
      </div>
    );
  }

  return (
    <div className="relative p-6 flex-auto">
      <CartList />
    </div>
  );
}
