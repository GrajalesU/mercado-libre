import Image from "next/image";
import React from "react";

type BenefitCardProps = {
  bgSrc: string;
  bgAlt: string;
  logoSrc: string;
  logoAlt: string;
  brand: string;
  title: string;
  freeTier?: boolean;
};

export default function BenefitCard({
  bgSrc,
  bgAlt,
  logoSrc,
  logoAlt,
  brand,
  title,
  freeTier,
}: BenefitCardProps) {
  return (
    <article className="w-[384px] h-[250px] rounded-md overflow-hidden relative">
      <Image
        src={bgSrc}
        alt={bgAlt}
        width={384}
        height={250}
        className="absolute object-cover"
      />
      <div className="absolute z-10 flex items-center gap-4 bottom-4 left-4">
        <Image src={logoSrc} width={80} height={80} alt={logoAlt} />
        <div className="text-white">
          {freeTier && <span className="text-[11px]">7 DÍAS GRATIS</span>}
          <h3 className="font-semibold">{title}</h3>
          <span className="font-[17px]">{brand}</span>
        </div>
      </div>
    </article>
  );
}
