import React from "react";
import Logo from "./Logo";
import Image from "next/image";

export default function Search() {
  return (
    <div className="py-4 flex gap-[52px]">
      <Logo />
      <div className="flex min-w-[600px] items-center rounded-sm overflow-hidden bg-white justify-between">
        <input
          className=" min-w-[550px] text-base p-3 placeholder:text-[#00000040] focus:outline-0"
          type="text"
          placeholder="Buscar productos, marcas y más..."
        />
        <button className="px-3 py-2 border-l border-l-gray-100">
          <Image src="/search.svg" alt="search icon" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
