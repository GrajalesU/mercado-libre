import Image from "next/image";
import React from "react";

export type ShopItemsProps = {
  src: [string, string, string];
  alt: [string, string, string];
};

export default function ShopItems({ src, alt }: ShopItemsProps) {
  return (
    <ul className="flex gap-[6px]">
      {src.map((el, idx) => (
        <li key={idx}>
          <div className="border rounded-lg border-gray-[#EEE] overflow-hidden cursor-pointer">
            <Image src={el} alt={alt[idx]} width={70} height={70} />
          </div>
        </li>
      ))}
    </ul>
  );
}
