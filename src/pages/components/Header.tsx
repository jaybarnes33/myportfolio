import Link from "next/link";
import React from "react";
import Toggler from "./Toggler";

const Header = () => {
  const links = ["home", "articles", "projects", "about"];
  return (
    <div className="border-b-2 border-white md:border-none px-5  items-center text-xl py-2 flex gap-3 justify-between">
      <div className="md:hidden">Menu</div>@
      <div className=" hidden md:flex  items-center flex-1">
        <ul className="flex flex-1 gap-10">
          {links.map((link) => (
            <li
              key={link}
              className="hover:bg-yellow-700 capitalize transition-colors ease-in "
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
