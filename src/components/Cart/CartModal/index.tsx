import { useCartContext } from "@/context/Cart";
import React, {
  Dispatch,
  LegacyRef,
  MutableRefObject,
  SetStateAction,
  useRef,
} from "react";
import CartList from "./CartList";
import animation from "./styles/animation.module.css";
import { numberToPrice } from "@/utils/format";
interface CartModalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

export default function CartModal({ show, setShow }: CartModalProps) {
  const { items } = useCartContext();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCloseModal = () => {
    //Necesito que medio segundo antes de que se cierre el modal, se añada la clase fade-out-up
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
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-between p-5 rounded-t">
              <div>
                <h3 className="text-xl font-semibold">Carrito</h3>
                <h4 className="text-lg">Cantidad de productos: {items.length}</h4>
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

            {/*body*/}
            <div className="relative p-6 flex-auto">
              <CartList />
            </div>
            {/*footer*/}
            <div className="flex flex-col p-6 rounded-b gap-4 border-t border-gray-100">
              <h3 className="ml-auto mr-2 mb-2 text-lg">
                Total con envío{" "}
                <span className="font-bold ml-4">
                  {numberToPrice(
                    items.reduce((prev, current) => {
                      return prev + current.price * current.quantity;
                    }, 0)
                  )}
                </span>
              </h3>
              <button
                className="text-red font-bold uppercase px-6 py-2 text-sm border rounded border-red w-1/5 ml-auto mr-1 mb-1"
                type="button"
                onClick={handleCloseModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
