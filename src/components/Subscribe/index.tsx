import Image from "next/image";
import React from "react";

export default function Subscribe() {
  return (
    <section className="mb-20 overflow-hidden bg-white rounded-md shadow-sm">
      <header className="p-6 bg-gradient-to-r from-[#A90F90] to-[#0C1A51] text-white flex justify-between items-center">
        <h2 className="text-2xl font-bold">Suscríbete al nivel 6</h2>
        <div className="flex flex-col border-l-2 border-l-white pl-[6px]">
          <span className="text-sm font-medium line-through">$ 50.690</span>
          <span className="text-xl font-semibold">
            $ 17.899 <small className="ml-1">/mes</small>
          </span>
        </div>
      </header>
      <main className="px-6 py-5 border-b border-b-gray-100">
        <span className="text-[17px]">
          Consigue los mejores beneficios en Mercado Libre
        </span>
        <ul className="flex flex-col gap-4 md:gap-0 items-start md:flex-row justify-between mt-8 mb-2">
          <li>
            <div className="flex items-center gap-4">
              <Image
                src={"/DisneyPlus.svg"}
                alt="Disney Plus Icon"
                width={72}
                height={72}
                className="rounded-[37px] border border-[#EFEFEF]"

              />
              <span>Disney+ sin cargos</span>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-4">
              <Image
                src={"/StarPlus.svg"}
                alt="Star Plus Icon"
                width={72}
                height={72}
                className="rounded-[37px] border border-[#EFEFEF]"
              />
              <span>Star+ sin cargos</span>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-4 md:max-w-[330px] md:mr-14">
              <Image
                src={"/Car.svg"}
                alt="Disney Plus Icon"
                width={72}
                height={72}
              />
              <p>
                Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de
                menos de $ 90.000
              </p>
            </div>
          </li>
        </ul>
      </main>
      <footer className="flex justify-end px-[30px] py-4">
        <button className="px-6 py-3 font-semibold text-white rounded-md bg-blue">Suscríbete</button>
      </footer>
    </section>
  );
}
