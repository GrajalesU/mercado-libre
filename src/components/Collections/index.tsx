import Image from "next/image";
import React from "react";

export default function Collections() {
  return (
    <section>
      <div className="pt-10">
        <div className="flex gap-[7px] pb-6 text-gray-300 text-[26px]">
          <h2 className="font-light">Colecciones:</h2>
          <div className="flex gap-2">
            <select
              className="font-semibold bg-transparent focus:outline-0 appearance-none"
              name="Collections"
              id="Collections"
              defaultValue={"None"}

            >
              <option selected>Supermercado</option>
            </select>
            <Image
              src="/ArrowBtn.svg"
              alt="down button icon"
              width={14}
              height={24}
            />
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-6 gap-4">
          <div className="row-span-2 col-span-2 bg-white rounded shadow-sm overflow-hidden">
            <Image
              src="/collections/Collections-1.png"
              alt="Cuido, detergente, pañales y diversos tipos de productos de un mercado"
              width={383}
              height={281}
              className="object-cover w-full"
            />
            <div className="px-[25px] py-5 flex flex-col gap-1 text-gray-400">
              <span className="text-xs tracking-[4px] font-semibold">
                Descubre
              </span>
              <span className="font-bold text-[28px]">SUPERMERCADO</span>
            </div>
          </div>
          <div className="bg-white rounded shadow-sm">
            <Image
              src="/collections/Collections-2.png"
              alt="Crema Eucerína"
              width={184}
              height={184}
              className="w-full"
            />
          </div>
          <div className="bg-white rounded shadow-sm">
            <Image
              src="/collections/Collections-3.png"
              alt="Crema para cicatrices Cicatricure"
              width={184}
              height={184}
              className="w-full"
            />
          </div>
          <div className="bg-white rounded shadow-sm">
            <Image
              src="/collections/Collections-4.png"
              alt="Crema hidratante Nivea"
              width={184}
              height={184}
              className="w-full"
            />
          </div>
          <div className="bg-white rounded shadow-sm">
            <Image
              src="/collections/Collections-5.png"
              alt="Crema de noche Cicatricure"
              width={184}
              height={184}
              className="w-full"
            />
          </div>
          <div className="bg-white rounded shadow-sm">
            <Image
              src="/collections/Collections-6.png"
              alt="Sopa instantánea Ramen Nissin"
              width={184}
              height={184}
              className="w-full"
            />
          </div>
          <div className="bg-white rounded shadow-sm">
            <Image
              src="/collections/Collections-7.png"
              alt="Whiskey"
              width={184}
              height={184}
              className="w-full"
            />
          </div>
          <div className="bg-white rounded shadow-sm">
            <Image
              src="/collections/Collections-8.png"
              alt="Crema intensiva corporal Eucerin"
              width={184}
              height={184}
              className="w-full"
            />
          </div>
          <div className="bg-white rounded shadow-sm">
            <Image
              src="/collections/Collections-9.png"
              alt="Shampoo Tío Nacho"
              width={184}
              height={184}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
