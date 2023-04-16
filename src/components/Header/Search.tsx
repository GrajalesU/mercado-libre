import React from "react";
import Logo from "./Logo";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import CartButton from "../Cart/CartButton";

export default function Search() {
  return (
    <div className="py-4 flex lg:gap-[45px] justify-between lg:justify-start">
      <Logo/>      
      <div className="flex lg:min-w-[550px] items-center rounded-sm overflow-hidden bg-white justify-between">
        <input
          className="min-w-[100px] w-[500px] lg:min-w-[500px] text-base p-3 placeholder:text-[#00000040] focus:outline-0"
          type="text"
          placeholder="Buscar productos, marcas y más..."
        />
        <button className="px-3 py-2 border-l border-l-gray-100">
          <Image src="/search.svg" alt="search icon" width={24} height={24} />
        </button>
      </div>
      <div className="flex items-center lg:hidden pl-[10px] justify-end">
        <MdMenu className="text-[40px]"/>
        <CartButton p_height={25} p_width={45}/>
      </div>
    </div>
  </div>
);
