import { CartContextProvider } from '@/context/Cart';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export const App = ({ Component, pageProps }: AppProps) => (
  <CartContextProvider>
    <Component {...pageProps} />
    <ToastContainer position='bottom-right' />
  </CartContextProvider>
);
