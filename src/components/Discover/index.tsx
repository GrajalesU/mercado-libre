import Image from "next/image";
import React from "react";

export default function Discover() {
  return (
    <section className="mb-20">
      <h2 className="text-gray-300 text-[25px] font-light mb-6">Descubre</h2>
      <ul className="flex justify-between">
        <li>
          <article className="flex bg-white max-w-[584px] items-center shadow-sm rounded overflow-hidden gap-8">
            <div className="flex flex-col w-full gap-3 py-4 pl-4 font-semibold text-gray-400">
              <h3 className=" tracking-[4px] text-[12px]">
                RENUEVA TUS ESPACIOS
              </h3>
              <div className="flex flex-col text-[28px]">
                <span>HOGAR Y MUEBLES</span>
                <span>HASTA 50% OFF</span>
              </div>
              <button className="w-3/5 px-6 py-2 text-white bg-blue">
                Ver más
              </button>
            </div>
            <Image
              src="/discover/Discover-1.png"
              alt="Furniture items"
              width={290}
              height={250}
            />
          </article>
        </li>
        <li>
          <article className="flex bg-white max-w-[584px] items-center shadow-sm rounded overflow-hidden gap-8">
            <div className="flex flex-col w-full gap-3 py-4 pl-4 font-semibold text-gray-400 grow">
              <h3 className=" tracking-[4px] text-[12px]">
                SUSCRÍBETE AL NIVEL 6
              </h3>
              <div className="flex flex-col text-[28px] uppercase">
                <span>Por solo</span>
                <span>$17.899 cada mes</span>
              </div>
              <button className="w-3/5 px-6 py-2 text-white bg-blue">
                Suscribirme
              </button>
            </div>
            <Image
              src="/discover/Discover-2.png"
              alt="Furniture items"
              width={290}
              height={250}
            />
          </article>
        </li>
      </ul>
    </section>
  );
}
