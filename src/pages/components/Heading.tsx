import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Heading = ({ name }: { name: string }) => {
  const { pathname } = useRouter();
  console.log(pathname);
  console.log(name);
  return (
    <div className="flex justify-between items-center pt-5 pb-2 border-b">
      <h1
        className={`pb-2  ${
          pathname === `/${name.toLowerCase()}`
            ? "text-5xl md:text-9xl"
            : "text-4xl md:text-9xl"
        }   uppercase`}
      >
        {name}
      </h1>
      <Link href={`/${name?.toLowerCase()}`}>
        <span
          className={`flex flex-row items-center ${
            pathname === `/${name?.toLowerCase()}` && "hidden"
          } md:text-2xl transition underline hover:scale-110`}
        >
          View all &rarr;
        </span>
      </Link>
    </div>
  );
};

export default Heading;
