import { useCartContext } from "@/context/Cart";
import { getDeliveryPrice, getSubtotal, getTotal } from "@/utils/cart";
import { numberToPrice } from "@/utils/format";
import React from "react";

interface CartModalFooterProps {
  handleCloseModal: () => void;
}

export default function CartModalFooter({
  handleCloseModal,
}: CartModalFooterProps) {
  const { state: items } = useCartContext();

  if (items.length === 0) return null;

  return (
    <div className="flex flex-col p-3 rounded-b gap-4 border-t border-gray-100">
      <div className="mr-2 mb-2 ml-auto md:text-base text-sm">
        <h3 className="flex">
          <span className="mr-auto  block">Total </span>
          <span className="font-bold block ml-4">
            {numberToPrice(getSubtotal(items))}
          </span>
        </h3>
        <h3 className="flex">
          <span className="mr-auto block">Envío </span>
          <span className="font-bold block ml-4">
            {numberToPrice(getDeliveryPrice(items))}
          </span>
        </h3>
        <h3 className="flex">
          <span className="mr-auto block">Total con envío </span>
          <span className="font-bold block ml-4">
            {numberToPrice(getTotal(items))}
          </span>
        </h3>
      </div>
      <div className="flex items-center justify-between py-4 px-2">
        <button
          className="text-red font-bold px-0 py-1 text-lg md:px-6 md:py-2 md:text-sm border rounded border-red "
          type="button"
          onClick={handleCloseModal}
        >
          Cerrar
        </button>
        <button
          className="text-white bg-blue px-0 py-1 text-lg md:px-6 md:py-2 md:text-sm rounded"
          type="button"
          onClick={handleCloseModal}
        >
          Continuar compra
        </button>
      </div>
    </div>
  );
}
