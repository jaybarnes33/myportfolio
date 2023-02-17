import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./components/Header";
import AppContext from "../context/App";
import AOS from "aos";
import Head from "next/head";
import { useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AppContext>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <div className="dark:bg-[#1a1a1a] text-neutral-900 dark:text-gray-200 ">
        <Header />
        <Component {...pageProps} />
      </div>
    </AppContext>
  );
}
