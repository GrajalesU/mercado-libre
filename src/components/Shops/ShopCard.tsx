import Image from "next/image";
import React from "react";
import ShopItems, { ShopItemsProps } from "./ShopItems";

type ShopCardProps = {
  items: ShopItemsProps;
  brand: string;
  srcBg: string;
  altBg: string;
  srcLogo: string;
};

export default function ShopCard({
  items,
  brand,
  srcBg,
  altBg,
  srcLogo,
}: ShopCardProps) {
  return (
    <article className="w-[284px] bg-white rounded overflow-hidden flex flex-col items-center relative shadow-sm">
      <Image
        src={srcBg}
        alt={altBg}
        width={390}
        height={95}
        className="object-contain mb-14"
      />
      <div className="absolute top-[55px] bg-white rounded-lg shadow-lg overflow-hidden cursor-auto">
        <Image src={srcLogo} alt={`${brand} Logo`} width={80} height={80} />
      </div>
      <div className="flex flex-col items-center gap-5 px-8 pb-5">
        <h3 className="text-2xl font-semibold cursor-pointer">{brand}</h3>
        <ShopItems {...items} />
        <span className="font-semibold text-gray-200 cursor-pointer">
          Ver tienda
        </span>
      </div>
    </article>
  );
}
