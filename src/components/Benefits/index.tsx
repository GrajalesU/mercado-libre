import React from "react";
import BenefitCard from "./BenefitCard";

export default function Benefits() {
  return (
    <section className="mb-20">
      <div className="flex gap-[16.38px] items-end mb-[22px]">
        <h2 className="text-gray-300 text-[25px] font-light">
          Beneficios de Mercado Puntos
        </h2>
        <span className="font-normal text-blue text-[15px] leading-5 mb-[7px] cursor-pointer">
          Ver todos los beneficios
        </span>
      </div>
      <ul className="flex justify-between">
        <li>
          <BenefitCard
            bgSrc="/benefits/DisneyAndStarBg.png"
            bgAlt="Disney Plus and Star Plus Series"
            logoSrc="/benefits/DisneyAndStarLogo.png"
            logoAlt="Disney Plus and Star Plus Logo"
            title="Sin cargo con el nivel 6"
            brand="Disney+ y Star+"
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
            freeTier
          />
        </li>
      </ul>
    </section>
  );
}
