import { useCartContext } from "@/context/Cart";
import Image from "next/image";
import React, { useState } from "react";
import CartModal from "./CartModal";

export default function CartButton() {
  const { items } = useCartContext();
  const [show, setShow] = useState(false);

  const handleOpenModal = () => {
    setShow(true);
  };

  return (
    <>
      <button className="absolute -right-8" onClick={handleOpenModal}>
        <div className="relative">
          <Image
            src="/Cart.svg"
            alt="Icono de carrito"
            width={30}
            height={25}
          />
          <span className="absolute top-[1px] left-[13px] text-white text-xs">
            {items.length > 9 && 9}
            {items.length > 0 && items.length < 10 && items.length}
          </span>
          {items.length > 9 && (
            <span className="absolute -top-1 right-1 text-white text-[10px]">
              +
            </span>
          )}
        </div>
      </button>
      <CartModal show={show} setShow={setShow} />
    </>
  );
}
