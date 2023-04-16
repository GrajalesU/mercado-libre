import React from "react";
import CategoryItem from "./CategoryItem";

export default function Categories() {
  return (
    <section className="mt-20 mb-5">
      <h2 className="text-gray-300 gap-x-1 gap-y-1 text-[25px] font-light mb-6">
        Categorías populares
      </h2>
      <ul className="grid grid-rows-2 grid-cols-7 rounded overflow-hidden shadow-sm">
        <li>
          <CategoryItem
            src="/categories/categories-1.svg"
            alt="Carro"
            description="Carros, Motos y Otros"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-2.svg"
            alt="Computador"
            description="Computación"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-3.svg"
            alt="Camisa"
            description="Ropa y Accesorios"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-4.svg"
            alt="Mueble"
            description="Hogar y Muebles"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-5.svg"
            alt="Manubrio"
            description="Accesorios para Vehículos"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-6.svg"
            alt="Horno"
            description="Electrodomésticos"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-7.svg"
            alt="Cámara"
            description="Cámaras y Accesorios"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-8.svg"
            alt="Smartphone"
            description="Celulares y Teléfonos"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-9.svg"
            alt="Labial"
            description="Belleza y Cuidado Personal"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-10.svg"
            alt="Balón de futbol"
            description="Deportes y Fitness"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-11.svg"
            alt="Micrófono"
            description="Electrónica, Audio y Video"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-12.svg"
            alt="Control"
            description="Consolas y Videojuegos"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-13.svg"
            alt="Oso de peluche"
            description="Juegos y Juguetes"
          />
        </li>
        <li>
          <CategoryItem
            src="/categories/categories-14.svg"
            alt="Llave plana"
            description="Herramientas"
          />
        </li>
      </ul>
    </section>
  );
}
