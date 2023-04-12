import React from "react";
import BenefitCard from "./BenefitCard";

const Benefits = () => (
    <section className="h-full pb-1 mb-20 bg-white rounded shadow-sm shadow-gray-100 lg:shadow-none lg:bg-transparent">
      <header className="flex gap-[16.38px] items-baseline mb-[22px] border-b lg:border-none border-gray-100 px-4 lg:px-0">
        <h2 className="text-black lg:text-gray-300 text-lg lg:text-[25px] lg:leading-6 font-bold lg:font-light my-3 lg:my-0">
          Beneficios de Mercado Puntos
        </h2>
        <span className="font-normal text-blue text-[15px] leading-5 mb-[7px] cursor-pointer hidden lg:inline">
          Ver todos los beneficios
        </span>
      </header>
      <ul className="flex justify-between overflow-hidden">
        <li>
          <BenefitCard
            bgSrc="/benefits/DisneyAndStarBg.png"
            bgAlt="Disney Plus and Star Plus Series"
            logoSrc="/benefits/DisneyAndStarLogo.png"
            logoAlt="Disney Plus and Star Plus Logo"
            title="Sin cargo con el nivel 6"
            brand="Disney+ y Star+"
            gradientColor="#081330"
          />
        </li>
        <li>
          <BenefitCard
            bgSrc="/benefits/HBOMaxBg.png"
            bgAlt="HBO Max Series"
            logoSrc="/benefits/HBOMaxLogo.png"
            logoAlt="HBO Max Logo"
            title="Hasta 50% OFF"
            brand="HBO Max"
            gradientColor="#3C034E"
            freeTier
          />
        </li>
        <li>
          <BenefitCard
            bgSrc="/benefits/ParamountBg.png"
            bgAlt="Paramount Series"
            logoSrc="/benefits/ParamountLogo.png"
            logoAlt="Paramount Logo"
            title="Hasta 50% OFF"
            brand="Paramount+"
            gradientColor="#0064FF"
            freeTier
          />
        </li>
      </ul>

      <footer className="px-3 py-4 border-t border-gray-100 mt-[22px] text-blue font-medium text-sm flex justify-between items-center lg:hidden">
        <span>Ver todos los beneficios</span>
        <svg
          className="w-2 h-3 stroke-blue"
          viewBox="0 0 9 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            fill-rule="evenodd"
            stroke-width="1.5"
            d="M1 1.343L6.657 7 1 12.657"
          ></path>
        </svg>
      </footer>
    </section>
  );

  export default Benefits;