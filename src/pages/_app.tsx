import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./components/Header";
import AppContext from "../context/App";

import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>
      <div className="dark:bg-[#1a1a1a] text-neutral-900 dark:text-gray-200 ">
        <Header />
        <Component {...pageProps} />
        <footer className="flex justify-center py-3">
          <span> &copy; {new Date().getFullYear()} Otwumasi</span>
        </footer>
      </div>
    </AppContext>
  );
}
