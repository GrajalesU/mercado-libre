import Image from "next/image";
import React from "react";
import Unselected from "./Unselected";
import Selected from "./Selected";

export default function Carrousel() {
  return (
    <section className="w-full relative min-h-[340px]">
      <Image
        src="/Carrousel.svg"
        alt="Women week"
        className="object-contain w-full absolute"
        width={1500}
        height={340}
      />
      <ul className="absolute z-30 flex gap-1 bottom-2 left-[calc(50%-34px)]">
        <li>
          <Unselected />
        </li>
        <li>
          <Selected />
        </li>
        <li>
          <Unselected />
        </li>
        <li>
          <Unselected />
        </li>
        <li>
          <Unselected />
        </li>
        <li>
          <Unselected />
        </li>
      </ul>
    </section>
  );
}
