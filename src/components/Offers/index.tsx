import Image from "next/image";
import React from "react";
import OfferCard from "./OfferCard";

export default function Offers() {
  return (
    <section className="my-[50px]">
      <div className="flex gap-[16.38px] items-end mb-[22px]">
        <h2 className="text-gray-300 text-[25px] font-light">Ofertas</h2>
        <span className="font-normal text-blue text-[15px] leading-5 mb-[7px] cursor-pointer">
          Ver todas
        </span>
      </div>
      <ul className="flex gap-4">
        <li>
          <OfferCard
            free
            offer={32}
            price="210.900"
            src="/offers/offer-1.png"
          />
        </li>
        <li>
          <OfferCard
            free
            full
            offer={25}
            price="74.990"
            src="/offers/offer-2.png"
          />
        </li>
        <li>
          <OfferCard
            free
            offer={50}
            price="134.950"
            src="/offers/offer-3.png"
          />
        </li>
        <li>
          <OfferCard
            free
            offer={30}
            price="149.900"
            src="/offers/offer-4.png"
          />
        </li>
        <li>
          <OfferCard full offer={17} price="69.990" src="/offers/offer-5.png" />
        </li>
      </ul>
    </section>
  );
}
