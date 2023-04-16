import Image from "next/image";
import React from "react";

type CategoryItemProps = {
  src: string;
  alt: string;
  description: string;
};

export default function CategoryItem({src, alt, description}: CategoryItemProps) {
  return (
    <div className="flex flex-col w-full border border-gray-100 h-40 bg-white items-center gap-4">
      <Image src={src} alt={alt} width={48} height={48} className="mt-[30px]"/>
      <span className="text-black text-center">{description}</span>
    </div>
  );
}
