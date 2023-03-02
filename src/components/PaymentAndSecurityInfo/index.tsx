import Image from "next/image";
import React from "react";

export default function PaymentAndSecurityInfo() {
  return (
    <section className="py-10">
      <ul className="flex items-start justify-center">
        <li className="grow">
          <div className="text-center flex flex-col items-center">
            <Image
              src="/Payment.svg"
              alt="Tarjeta de crédito"
              width={66}
              height={45}
              className="mb-[25px]"
            />
            <h3 className="text-gray-400 font-medium text-xl">
              Paga con tarjeta o en efectivo
            </h3>
            <p className="max-w-[300px] text-gray-200 text-[15px] mt-1">
              Con Mercado Pago, paga en cuotas y aprovecha la comodidad de
              financiación que te da tu banco, o hazlo con efectivo en puntos de
              pago. ¡Y siempre es seguro!
            </p>
            <span className="text-blue text-[13px] mt-2">Cómo pagar con Mercado Pago</span>
          </div>
        </li>
        <div className="w-1 h-[65px] border-l border-l-gray-100" />
        <li className="grow">
          <div className="text-center flex flex-col items-center">
            <Image
              src="/Shipping.svg"
              alt="Caja de regalo"
              width={54}
              height={48}
              className="mb-[22px]"
            />
            <h3 className="text-gray-400 font-medium text-xl">
              Envío gratis desde $ 90.000
            </h3>
            <p className="max-w-[300px] text-gray-200 text-[15px] mt-1">
              Con solo estar registrado en Mercado Libre, tienes envíos gratis
              en miles de productos seleccionados.
            </p>
            <span className="text-blue text-[13px] mt-2">Conoce más sobre este beneficio</span>
          </div>
        </li>
        <div className="w-1 h-[65px] border-l border-l-gray-100" />
        <li className="grow">
          <div className="text-center flex flex-col items-center">
            <Image
              src="/Protected.svg"
              alt="Escudo"
              width={49}
              height={52}
              className="mb-[17px]"
            />
            <h3 className="text-gray-400 font-medium text-xl">
              Seguridad, de principio a fin
            </h3>
            <p className="max-w-[300px] text-gray-200 text-[15px] mt-1">
              ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no
              puedas hacer, porque estás siempre protegido.
            </p>
            <span className="text-blue text-[13px] mt-2">Cómo te protegemos</span>
          </div>
        </li>
      </ul>
    </section>
  );
}
