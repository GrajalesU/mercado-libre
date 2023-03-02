import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="px-40 pt-4 bg-white border-t border-t-gray-100">
      <footer className="pb-[50px]">
        <div className="border-b border-b-gray-100 pb-3">
          <nav>
            <ul className="flex gap-5 text-xs text-black mb-[7px]">
              <li>Trabaja con nosotros</li>
              <li>Términos y condiciones</li>
              <li>Cómo cuidamos tu privacidad</li>
              <li>Accesibilidad</li>
              <li>Ayuda / PQR</li>
              <li>www.sic.gov.co</li>
            </ul>
          </nav>
          <span className="text-[11px] text-gray-200 block">Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
          <span className="text-[11px] text-gray-200">Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
        </div>
        <div className="flex gap-5 pt-5">
          <Image
            src="/sic.png"
            alt="Superintendencia de industria y comercio"
            width={141}
            height={30}
          />
          <Image
            src="/pum.png"
            alt="Precio por unidad de medida"
            width={200}
            height={34}
          />
        </div>
      </footer>
    </div>
  );
}
