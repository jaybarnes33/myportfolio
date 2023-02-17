import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const Socials = () => {
  const links = [
    {
      icon: <FaGithub />,
      link: "https://github.com/jaybarnes33",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/jay_codes_",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/jbotwumasi",
    },
  ];
  return (
    <ul className="flex gap-7 text-5xl">
      {links.map((link) => (
        <li
          data-aos="flip-right"
          className="text-neutral-800 transition hover:text-yellow-600 hover:scale-125"
          key={link.link}
        >
          <Link href={link.link} target="_blank" rel="noreferrer noopener">
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
