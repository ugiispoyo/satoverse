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
          return (
            <li key={index}>
              <Link href={`/${item === "home" ? "" : item}`}>
                <img
                  src={`/images/navbar/${item}.svg`}
                  alt={item}
                  className={`w-auto h-[35px] hover:cursor-pointer ${
                    checkIsActive(item) && item !== "whitepaper" ? "hidden" : ""
                  }`}
                />
                <img
                  src={`/images/navbar/${item}-active.svg`}
                  alt={item}
                  className={`w-auto h-[40px] hover:cursor-pointer ${
                    !checkIsActive(item) || item === "whitepaper"
                      ? "hidden"
                      : ""
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
