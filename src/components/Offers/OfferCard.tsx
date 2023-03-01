import Image from "next/image";
import React from "react";

type OfferCardProps = {
  src: string;
  price: string;
  offer: number;
  free?: boolean;
  full?: boolean;
};

export default function OfferCard({
  src = "/offers/offer-1.png",
  price = "210.900",
  offer = 32,
  free = false,
  full = false,
}: OfferCardProps) {
  return (
    <article className="bg-white rounded shadow-sm max-w-[224px]">
      <figure className="border-b border-b-gray-200/10">
        <Image width={224} height={224} src={src} alt="Silla de oficina" />
      </figure>
      <div className="pt-[10px] px-4 pb-[60px]">
        <div className="flex gap-[11.28px] items-center">
          <span className="text-2xl font-normal text-black">$ {price}</span>
          <span className="text-sm text-green">{offer}% OFF</span>
        </div>
        <div className="flex items-center gap-2">
          {free && (
            <span className="font-semibold text-green">Envío gratis</span>
          )}
          {full && (
            <Image
              src="/Full.svg"
              width={40}
              height={22}
              alt="full icon"
              className="py-[0.5px]"
            />
          )}
        </div>
      </div>
    </article>
  );
}
