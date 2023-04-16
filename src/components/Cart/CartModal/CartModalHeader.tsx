import { useCartContext } from "@/context/Cart";
import { countProducts } from "@/utils/cart";
import React from "react";

interface CartModalHeaderProps {
  handleCloseModal: () => void;
}

export default function CartModalHeader({
  handleCloseModal,
}: CartModalHeaderProps) {
  const { state: items } = useCartContext();

  if (items.length === 0)
    return (
      <div className="flex items-center justify-between p-3 rounded-t">
        <button
          className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
          onClick={handleCloseModal}
        >
          <span className="bg-transparent text-gray-400 hover:text-gray-300 transition-colors h-6 w-6 text-2xl block outline-none focus:outline-none">
            ×
          </span>
        </button>
      </div>
    );

  return (
    <div className="flex items-center justify-between p-3 rounded-t">
      <div>
        <h3 className="text-xl font-semibold">Carrito</h3>
        <h4 className="text-base">
          Cantidad de productos: {countProducts(items)}
        </h4>
      </div>
      <button
        className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        onClick={handleCloseModal}
      >
        <span className="bg-transparent text-gray-400 hover:text-gray-300 transition-colors h-6 w-6 text-2xl block outline-none focus:outline-none">
          ×
        </span>
      </button>
    </div>
  );
}
