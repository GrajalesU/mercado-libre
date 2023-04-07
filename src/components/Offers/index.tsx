import React from "react";
import OfferCard from "./OfferCard";
import { PRODUCTS } from "@/db/products";
import WithCardAddition from "../HOC/WithCardAddition";

export default function Offers() {
  return (
    <section className="mt-[50px] mb-20">
      <div className="flex gap-[16.38px] items-end mb-[22px]">
        <h2 className="text-gray-300 text-[25px] font-light">Ofertas</h2>
        <span className="font-normal text-blue text-[15px] leading-5 mb-[7px] cursor-pointer">
          Ver todas
        </span>
      </div>
      <ul className="flex justify-between">
        {PRODUCTS.map((product) => (
          <li key={`Product_${product.id}`}>
            <WithCardAddition product={product}>
              <OfferCard
                free={!product.deliverPrice}
                offer={product.offer}
                full={product.isFull}
                price={product.priceWithOffer || product.price}
                src={product.image}
              />
            </WithCardAddition>
          </li>
        ))}
      </ul>
    </section>
  );
}
