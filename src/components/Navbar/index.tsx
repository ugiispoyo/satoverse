"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { JSX } from "react";

import { menu } from "@/constants";

type Props = {};

export default function Navbar(props: Props): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  const checkIsActive = (path: string) => {
    if (path === "home") {
      return pathname === "/";
    }
    return pathname.includes(path);
  };

  return (
    <div className="w-full flex max-w-[1280px] mx-auto items-center">
      <img
        src="/images/logo.png"
        onClick={() => router.push("/")}
        alt="logo"
        className="w-1/6 h-auto"
      />
      <ul className="w-full flex justify-between ml-3 gap-4">
        {menu.map((item, index) => {
          const isActive = checkIsActive(item);
          const isWhitepaper = item === "whitepaper";

          return (
            <li key={index}>
              <Link href={`/${item === "home" ? "" : item}`}>
                <div className="relative w-[163px] h-[50px] group">
                  {/* Normal Image */}
                  <img
                    src={`/images/navbar/${item}.svg`}
                    alt={item}
                    className={`
                absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out
                ${
                  isActive && !isWhitepaper
                    ? "opacity-0"
                    : "opacity-100 group-hover:opacity-0"
                }
              `}
                  />
                  {/* Active Image */}
                  <img
                    src={`/images/navbar/${item}-active.svg`}
                    alt={`${item}-active`}
                    className={`
                absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out
                ${
                  isActive && !isWhitepaper
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }
              `}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
