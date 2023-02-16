import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./components/Header";
import AppContext from "../context/App";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext>
      <div className="dark:bg-[#1a1a1a] text-neutral-900 dark:text-gray-200">
        <Header />
        <Component {...pageProps} />
      </div>
    </AppContext>
  );
}
