import React, { Dispatch, SetStateAction, useRef } from 'react';
import animation from './styles/animation.module.css';
import { CartModalHeader } from './CartModalHeader';
import { CartModalBody } from './CartModalBody';
import { CartModalFooter } from './CartModalFooter';
interface CartModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export const CartModal = ({ show, setShow }: CartModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCloseModal = () => {
    modalRef.current?.classList.add(animation['fade-out-up']);
    setTimeout(() => {
      setShow(false);
    }, 500);
  };

  if (!show) return null;

  return (
    <>
      <div
        ref={modalRef}
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none ${animation['fade-in-down']}`}
      >
        <div className='relative mx-auto w-auto max-w-6xl'>
          <div className='relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none'>
            <CartModalHeader handleCloseModal={handleCloseModal} />
            <CartModalBody />
            <CartModalFooter handleCloseModal={handleCloseModal} />
          </div>
        </div>
      </div>
      <div className='fixed inset-0 z-40 bg-black opacity-25'></div>
    </>
  );
};
