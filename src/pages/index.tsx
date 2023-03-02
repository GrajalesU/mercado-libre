import Head from "next/head";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";
import Carrousel from "@/components/Carrousel";
import PaymentMethods from "@/components/PaymentMethods";
import Offers from "@/components/Offers";
import Subscribe from "@/components/Subscribe";
import Benefits from "@/components/Benefits";
import Discover from "@/components/Discover";
import Shops from "@/components/Shops";
import Collections from "@/components/Collections";
import Categories from "@/components/Categories";
import PaymentAndSecurityInfo from "@/components/PaymentAndSecurityInfo";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mercado Libre</title>
        <meta name="description" content="Clon de mercado libre" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.ico" />
      </Head>
      <div className={`min-h-screen bg-gray-100 ${roboto.className} font-sans`}>
        <Header />
        <main>
          <Carrousel />
          <div className="max-w-[1184px] mx-auto">
            <PaymentMethods />
            <Offers />
            <Subscribe />
            <Benefits />
            <Discover />
            <Shops />
          </div>
          <div className=" bg-gradient-to-b from-[#E6E6E6] to-[#ffffff00]">
            <div className="max-w-[1184px] mx-auto">
              <Collections />
              <Categories />
            </div>
          </div>
          <div className="bg-white">
            <div className="max-w-[1184px] mx-auto">
              <PaymentAndSecurityInfo />
            </div>
          </div>
        </main>
        <div className="bg-white">
          <Footer />
        </div>
      </div>
    </>
  );
}
