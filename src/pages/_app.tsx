import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Navbar from '@/components/Layout/Navbar/Navbar';
import Header from '@/components/Layout/Header/Header';
import Footer from '@/components/Layout/Footer/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header>
        <Navbar />
        <Component {...pageProps} />
      </Header>
      <Footer />
    </>
  );
}
