import Image from 'next/image';

export default function Logo() {
  return (
    <>
      <Image src="/logo.svg" alt="Mercado Libre Logo" width={134} height={34} className="hidden lg:block" />
      <Image src="/logo_mobile.svg" alt="Mercado Libre Logo Mobile" width={75} height={34} className="px-[10px] lg:hidden" />
    </>
  );
}