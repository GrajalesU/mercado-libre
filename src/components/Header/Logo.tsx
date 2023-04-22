import Image from "next/image";

const Logo = () =>(
    <>
      <Image src="/logo.svg" alt="Mercado Libre Logo" width={134} height={34} className="hidden lg:block" />
      <Image src="/logo_mobile.svg" alt="Mercado Libre Logo Mobile" width={50} height={34} className="px-[10px] lg:hidden" />
    </>
  );

export {Logo};