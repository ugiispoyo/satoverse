"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { JSX, useEffect, useState } from "react";
import { menu } from "@/constants";
import clsx from "clsx";

type Props = {};

export default function Navbar(props: Props): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const checkIsActive = (path: string) => {
    if (path === "home") return pathname === "/";
    return pathname.includes(path);
  };

  return (
    <div className="w-full flex justify-between items-center px-4 py-3 max-w-[1280px] mx-auto">
      <img
        src="/images/logo.png"
        onClick={() => router.push("/")}
        alt="logo"
        className="xl:w-[220px] lg:w-[160px] w-[230px] h-auto cursor-pointer max-sm:w-[180px]"
      />

      {/* Desktop Menu */}
      <ul className="hidden lg:flex w-full justify-end ml-3 gap-4">
        {menu.map((item, index) => {
          const isActive = checkIsActive(item.label);
          const isWhitepaper = item.pathname === "whitepaper";

          return (
            <li key={index}>
              <Link href={`/${item.pathname === "home" ? "" : item.pathname}`}>
                <div className="relative xl:w-[155px] w-[120px] h-[50px] group">
                  <img
                    src={`/images/navbar/${item.pathname}.svg`}
                    alt={item.label}
                    className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out
                      ${
                        isActive && !isWhitepaper
                          ? "opacity-0"
                          : "opacity-100 group-hover:opacity-0"
                      }`}
                  />
                  <img
                    src={`/images/navbar/${item.pathname}-active.svg`}
                    alt={`${item.pathname}-active`}
                    className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out
                      ${
                        isActive && !isWhitepaper
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className={clsx(
          "lg:hidden text-xl gap-1 flex z-[99] items-center bg-[inear-gradient(180deg_#212121_0%_#1C1C1C_34.73%_#1C1C1C_100%)] rounded-lg py-[8px] px-[18px] max-sm:px-[16px] shadow-[0px_0px_4px_0px_#B1F48973]",
          isMenuOpen && "absolute top-[50px] right-[20px]"
        )}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <img
            src="/icons/close-menu.svg"
            alt="close menu"
            className="w-[24px] h-auto max-sm:w-[18px]"
          />
        ) : (
          <img
            src="/icons/menu.svg"
            alt="menu"
            className="w-[24px] h-auto max-sm:w-[18px]"
          />
        )}
        <span className="text-base max-sm:text-xs font-orbitron font-[900] text-[#B1F489]">
          MENU
        </span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={clsx(
            "fixed top-0 right-0 w-full h-full bg-menu z-40 text-white flex flex-col items-start px-6 py-8 space-y-6 text-xl font-bold tracking-wide transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <img
            src="/images/logo.png"
            onClick={() => router.push("/")}
            alt="logo"
            className="xl:w-[220px] lg:w-[160px] w-[230px] h-auto cursor-pointer max-sm:w-[180px] max-sm:mt-4"
          />

          {menu.map((item, index) => (
            <Link
              key={index}
              href={`/${item.pathname === "home" ? "" : item.pathname}`}
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                "w-full pb-2 font-orbitron font-[900] text-base flex items-start uppercase",
                item.pathname === "staking"
                  ? "text-[#1C1C1C]"
                  : "text-[#E3DAAC] border-b border-[#E3DAAC]"
              )}
            >
              {item.label.toUpperCase()}
              {item.pathname === "staking" && (
                <img
                  src="/icons/start.svg"
                  alt="start"
                  className="inline-block ml-1"
                />
              )}
            </Link>
          ))}

          {/* Social icons */}
          <div className="flex justify-center w-full gap-4 mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/icons/twitter.svg" alt="X" className="w-[40px]" />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <img
                src="/icons/telegram.svg"
                alt="Telegram"
                className="w-[40px]"
              />
            </a>
          </div>

          {/* Language Selector */}
          <select className="mt-6 bg-black font-orbitron max-w-[360px] mx-auto text-white px-3 py-2 border border-green-300 rounded w-full p-4">
            <option value="en">EN</option>
            <option value="id">ID</option>
          </select>

          {/* Buy Button */}
          <button className="mt-4 px-6 py-3 bg-[url('/images/navbar/bg-buy-sato.svg')] bg-no-repeat bg-center bg-contain font-orbitron text-[11px] font-[900] rounded-xl w-full">
            <span className="text-gradient-5">BUY $SATO</span>
          </button>
        </div>
      )}
    </div>
  );
}
