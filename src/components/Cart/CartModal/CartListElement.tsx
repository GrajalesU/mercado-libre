import { CartItem } from "@/types/Cart";
import { numberToPrice } from "@/utils/format";
import Image from "next/image";

export default function CartListElement({ item }: { item: CartItem }) {
  return (
    <div className="flex gap-8 items-center border-b border-gray-100 px-2 py-4">
      <Image src={item.image} alt={item.name} width={50} height={50} />
      <div className="w-36">
        <h3 className="font-bold text-lg truncate">{item.name}</h3>
      </div>
      <div className="flex gap-2 text-blue text-sm rounded border border-gray-100 p-2">
        <button>-</button>
        <input
          className="text-black w-6 text-lg text-center"
          value={item.quantity}
        />
        <button>+</button>
      </div>
      <button>
        <Image src="/Delete.svg" width={20} height={20} alt="Eliminar" />
      </button>
      <div className="ml-auto flex flex-col">
        {item.offer && (
          <div className="flex gap-2 text-xs">
            <span className="text-green">{item.offer} %</span>
            <span className="line-through">{numberToPrice(item.price)}</span>
          </div>
        )}
        {item.priceWithOffer ? (
          <span className="self-end text-lg font-semibold">
            {numberToPrice(item.priceWithOffer)}
          </span>
        ) : (
          <span className="self-end text-lg font-semibold">
            {numberToPrice(item.price)}
          </span>
        )}
      </div>
    </div>
  );
}
