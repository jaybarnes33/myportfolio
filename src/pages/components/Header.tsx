import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import Toggler from "./Toggler";
import { BsListNested, BsX } from "react-icons/bs";
import { AppContext } from "@/context/App";

const Header = () => {
  const links = ["home", "projects"];
  const [toggle, setToggle] = useState(false);
  const { theme } = useContext(AppContext);
  const { pathname } = useRouter();
  return (
    <div className="border-b-2 dark:border-white border-black md:border-none px-5  items-center text-xl py-2 flex gap-3 justify-between">
      <div
        onClick={() => setToggle(!toggle)}
        className={`${
          theme === "dark" ? "text-neutral-100" : "text-neutral-900"
        } md:hidden relative z-[99999] font-bold`}
      >
        {!toggle ? <BsListNested /> : <BsX />}
      </div>
      @
      <div
        className={`${
          !toggle
            ? "hidden"
            : "flex items-center fade justify-center bg-white dark:bg-[#1a1a1a] fixed w-full min-h-[105vh] pb-[3rem] z-[9999]"
        }  transition md:relative  pb-3 top-0 left-0  flex-col md:flex md:flex-row md:justify-center  items-center flex-1 `}
      >
        <ul className="flex items-center justify-center flex-col md:flex-row md:justify-start md:items-center flex-1 gap-8">
          {links.map((link) => (
            <li
              key={link}
              className={`px-2 hover:bg-yellow-400   hover:text-neutral-800 text-neutral-500 capitalize transition-colors ease-in ${
                pathname === `/${link}` && "bg-yellow-400  text-black"
              } ${
                link === "home" &&
                pathname === "/" &&
                "bg-yellow-400 px-2 text-black"
              } `}
            >
              <Link href={link}>{link}</Link>
            </li>
          ))}
        </ul>
        <Toggler />
      </div>
    </div>
  );
};

export default Header;
