import { AppContext } from "@/context/App";
import React, { useContext } from "react";

const Toggler = () => {
  const { setTheme, theme } = useContext(AppContext);
  return (
    <ul className="flex gap-7 border-2 py-2 px-4 rounded-full border-black dark:border-yellow-700">
      <li
        className={
          theme !== "dark" ? "bg-slate-900 text-white rounded-xl px-3" : ""
        }
        onClick={() => setTheme("light")}
      >
        Light
      </li>

      <li
        className={theme === "dark" ? "bg-yellow-700 rounded px-3" : ""}
        onClick={() => setTheme("dark")}
      >
        Dark
      </li>
    </ul>
  );
};

export default Toggler;
