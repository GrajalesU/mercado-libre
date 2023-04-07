import { CartContextProvider } from "@/context/Cart";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
      <ToastContainer position="bottom-right"/>
    </CartContextProvider>
  );
}
