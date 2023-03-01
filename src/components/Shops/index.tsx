import ShopCard from "./ShopCard";

export default function Shops() {
  return (
    <section className="pb-[72px]">
      <div className="flex gap-[16.38px] items-end mb-[22px]">
        <h2 className="text-gray-300 text-[25px] font-light">
          Las mejores tiendas te esperan
        </h2>
        <span className="font-normal text-blue text-[15px] leading-5 mb-[7px] cursor-pointer">
          Ver tiendas
        </span>
      </div>
      <ul className="flex justify-between">
        <li>
          <ShopCard
            brand="Lego"
            srcLogo="/shops/LegoLogo.png"
            srcBg="/shops/LegoBg.png"
            altBg="Lego Characters"
            items={{
              src: [
                "/shops/Lego-1.png",
                "/shops/Lego-2.png",
                "/shops/Lego-3.png",
              ],
              alt: ["Lego Bike", "Lego Transformer", "Lego Low Eider"],
            }}
          />
        </li>
        <li>
          <ShopCard
            brand="Xiaomi"
            srcLogo="/shops/XiaomiLogo.png"
            srcBg="/shops/XiaomiBg.png"
            altBg="Orange Bubbles"
            items={{
              src: [
                "/shops/Xiaomi-1.png",
                "/shops/Xiaomi-2.png",
                "/shops/Xiaomi-3.png",
              ],
              alt: [
                "Reloj Xiaomi",
                "Patineta eléctrica horizontal Xiaomi",
                "Patineta eléctrica frontal Xiaomi",
              ],
            }}
          />
        </li>
        <li>
          <ShopCard
            brand="Oster"
            srcLogo="/shops/OsterLogo.png"
            srcBg="/shops/OsterBg.png"
            altBg="Blur kitchen"
            items={{
              src: [
                "/shops/Oster-1.png",
                "/shops/Oster-2.png",
                "/shops/Oster-3.png",
              ],
              alt: ["Olla Oster", "Licuadora Oster", "Arrocera Oster"],
            }}
          />
        </li>
        <li>
          <ShopCard
            brand="Nikon"
            srcLogo="/shops/NikonLogo.png"
            srcBg="/shops/NikonBg.png"
            altBg="Blur kitchen"
            items={{
              src: [
                "/shops/Nikon-1.png",
                "/shops/Nikon-2.png",
                "/shops/Nikon-3.png",
              ],
              alt: ["Jack 3.5 Nikon", "HDMI Nikon", "Cámara Nikon"],
            }}
          />
        </li>
      </ul>
    </section>
  );
}
