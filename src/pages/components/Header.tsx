import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Toggler from "./Toggler";

const Header = () => {
  const links = ["home", "articles", "projects", "about"];
  const [toggle, setToggle] = useState(false);

  const { pathname } = useRouter();
  return (
    <div className="border-b-2 border-white md:border-none px-5  items-center text-xl py-2 flex gap-3 justify-between">
      <div
        onClick={() => setToggle(!toggle)}
        className="md:hidden relative z-50"
      >
        Menu
      </div>
      @
      <div
        className={`${
          !toggle
            ? "hidden"
            : "flex items-center justify-center bg-white fixed w-full min-h-full"
        }  transition md:relative  pb-3 top-0 left-0  flex-col md:flex md:flex-row md:jus  items-center flex-1`}
      >
        <ul className="flex items-center justify-center flex-col md:flex-row md:justify-start md:items-center flex-1 gap-10">
          {links.map((link) => (
            <li
              key={link}
              className={`hover:bg-yellow-400   hover:text-neutral-800 text-neutral-500 capitalize transition-colors ease-in ${
                pathname === `/${link}` && "bg-yellow-400 px-2 text-black"
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
