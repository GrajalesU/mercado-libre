import Image from "next/image";

export default function Nav() {
  return (
    <div className="flex text-black pb-1 font-normal text-sm items-center gap-[52px]">
      <button className="w-[134px] leading-6 text-right">
        Ingresa tu domicilio
      </button>
      <nav className=" text-black/60">
        <ul className="flex gap-[17.8px]">
          <li>
            <select
              name="Category"
              id="Category"
              className="block bg-yellow focus:outline-0 w-[6rem] cursor-pointer"
              defaultValue={"Hello World"}
            >
              <option selected>Categorías</option>
            </select>
          </li>
          <li className="cursor-pointer">Ofertas</li>
          <li className="cursor-pointer">Historial</li>
          <li className="cursor-pointer">Supermercado</li>
          <li className="cursor-pointer">Moda</li>
          <li className="cursor-pointer">Vender</li>
          <li className="cursor-pointer">Ayuda / PQR</li>
        </ul>
      </nav>
      <span className="ml-36">Crea tu cuenta Ingresa Mis compras</span>
    </div>
  );
}
