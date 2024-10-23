import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <div className="flex items-center justify-between shadow-sm p-4">
      <div className="flex items-center gap-10">
        <Image src="/book-doc.png" alt="logo" width={180} height={80} />
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <>
              <Link href={item.path}>
                <li
                  className="hover:text-primary cursor-pointer   hover:scale-105 transition-all ease-in-out"
                  key={index}
                >
                  {item.name}
                </li>
              </Link>
            </>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
