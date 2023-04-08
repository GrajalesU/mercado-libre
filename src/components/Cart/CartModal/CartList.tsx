import { useCartContext } from "@/context/Cart";
import CartListElement from "./CartListElement";
import scroll from "./styles/scroll.module.css";

export default function CartList() {
  const { state: items } = useCartContext();
  return (
    <div
      className={`max-h-[50vh] overflow-y-auto px-4 ${scroll["custom-scroll"]}`}
    >
      {items.map((item) => (
        <CartListElement key={item.id} item={item} />
      ))}
    </div>
  );
}
