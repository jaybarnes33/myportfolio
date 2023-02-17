import Link from "next/link";
import React from "react";

const Heading = ({ name }: { name: string }) => {
  return (
    <div className="flex justify-between items-end">
      <h1 className="text-4xl md:text-7xl uppercase">{name}</h1>
      <Link href={`/${name.toLowerCase()}`}>
        <span className="flex items-center text-2xl transition underline hover:scale-110">
          View all &rarr;
        </span>
      </Link>
    </div>
  );
};

export default Heading;
