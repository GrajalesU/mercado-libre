import React, { Dispatch, SetStateAction, useRef } from "react";
import animation from "./styles/animation.module.css";
import CartModalHeader from "./CartModalHeader";
import CartModalBody from "./CartModalBody";
import CartModalFooter from "./CartModalFooter";
interface CartModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function CartModal({ show, setShow }: CartModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCloseModal = () => {
    modalRef.current?.classList.add(animation["fade-out-up"]);
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  if (!show) return null;

  return (
    <>
      <div
        ref={modalRef}
        className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ${animation["fade-in-down"]}`}
      >
        <div className="relative w-auto mx-auto max-w-4xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <CartModalHeader handleCloseModal={handleCloseModal} />
            <CartModalBody />
            <CartModalFooter handleCloseModal={handleCloseModal} />
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
