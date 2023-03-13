import Image from "next/image";
import React from "react";

export default function PaymentMethods() {
  return (
    <section className="flex justify-between my-10 bg-white rounded shadow-sm">
      <ul className="flex p-[20.5px] w-full">
        <li className="grow">
          <div className="flex gap-[16.5px] ">
            <Image
              src="./CreditCard.svg"
              alt="Credit card icon"
              width={47}
              height={47}
            />
            <div className="flex flex-col">
              <span className="text-lg">Hasta 48 cuotas</span>
              <span className="cursor-pointer text-md text-blue">Ver más</span>
            </div>
          </div>
        </li>
        <li className="grow">
          <div className="flex gap-[16.5px]">
            <Image
              src="./Bank.svg"
              alt="Credit card icon"
              width={47}
              height={47}
            />
            <div className="flex flex-col">
              <span className="text-lg">Transferencia desde tu banco</span>
              <span className="cursor-pointer text-md text-blue">Ver más</span>
            </div>
          </div>
        </li>
        <li className="grow">
          <div className="flex gap-[16.5px]">
            <Image
              src="./Cash.svg"
              alt="Credit card icon"
              width={47}
              height={47}
            />
            <div className="flex flex-col">
              <span className="text-lg">Paga en efectivo</span>
              <span className="cursor-pointer text-md text-blue">Ver más</span>
            </div>
          </div>
        </li>
      </ul>
      <div className="flex min-w-[300px] gap-[16.5px] px-[20.5px] border-l border-l-gray-100 items-center">
        <Image src="./More.svg" alt="Credit card icon" width={47} height={47} />
        <div className="flex flex-col">
          <span className="text-lg">Más medios de pago</span>
          <span className="cursor-pointer text-md text-blue">Ver todos</span>
        </div>
      </div>
    </section>
  );
}
