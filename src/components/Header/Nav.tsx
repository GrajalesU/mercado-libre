import CartButton from "../Cart/CartButton";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="flex text-black pb-1 font-normal text-sm items-center gap-[45px] relative">
      <button className="w-[134px] leading-6 text-right">
        Ingresa tu domicilio
      </button>
      <nav className="hidden lg:block lg:text-black/60">
        <ul className="flex gap-[17.8px]">
        {/* <li className="cursor-pointer flex items-center">Categorias <Image width="20" height="20" src="/arrow-down.svg" alt={""}></Image> </li> */}
          <li>
            <select
              name="Category"
              id="Category"
              className="block bg-yellow border-0 focus:outline-0 cursor-pointer"
              defaultValue={"None"}
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
      <span className="hidden  lg:flex lg:items-center">Crea tu cuenta Ingresa Mis compras <CartButton p_height={25} p_width={30}/></span>
      
    </div>
  );
}