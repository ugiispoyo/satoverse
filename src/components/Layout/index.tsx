"use client";
import React, { JSX, useRef, useEffect, useState } from "react";

import Navbar from "../Navbar";

import { borderTop } from "@/constants";

type Props = {
  children: React.ReactNode;
};
export default function Layout(props: Props): JSX.Element {
  const borderRef = useRef<HTMLUListElement>(null);
  const [renderedItems, setRenderedItems] = useState(borderTop);

  useEffect(() => {
    const updateborder = () => {
      if (borderRef.current) {
        const borderWidth = borderRef.current.scrollWidth;
        const windowWidth = window.innerWidth;
        const repeatCount = Math.ceil((windowWidth * 2) / borderWidth);

        const fullList: typeof borderTop = [];
        for (let i = 0; i < repeatCount; i++) {
          fullList.push(...borderTop);
        }

        setRenderedItems(fullList);
      }
    };

    updateborder();
    window.addEventListener("resize", updateborder);
    return () => window.removeEventListener("resize", updateborder);
  }, []);

  function DynamicWidthContent({ text, img }: { text: string; img: string }) {
    const textRef = useRef<HTMLSpanElement>(null);
    const [width, setWidth] = useState(100);

    useEffect(() => {
      if (textRef.current) {
        const measured = textRef.current.scrollWidth;
        setWidth(measured + 70);
      }
    }, [text]);

    return (
      <li
        style={{ width: `${width}px`, height: "40px" }}
        className="relative flex items-center justify-center"
      >
        <img
          src={`/images/border-top/${img}.svg`}
          alt="border-top"
          className="absolute top-0 left-0 w-full h-full object-fill z-[5]"
        />
        <span
          ref={textRef}
          className="relative z-[6] text-[7px] pb-[10px] font-usuzi text-[#0D0D0D] leading-[1] pl-[10px] pr-[2px]"
        >
          {text}
        </span>
      </li>
    );
  }

  return (
    <div className="w-full h-[100vh]  relative">
      <div className="w-full overflow-hidden max-h-[40px] relative top-[-10px] z-[51]">
        <ul
          ref={borderRef}
          className="flex w-max animate-marquee whitespace-nowrap"
        >
          {renderedItems.map((item, index) => (
            <DynamicWidthContent key={index} text={item.label} img={item.img} />
          ))}
        </ul>
      </div>

      <Navbar />
      {props.children}

      <img
        src={"/images/border-right-bottom.svg"}
        alt="border-bottom"
        className="w-auto h-[329px] fixed bottom-0 right-0 max-lg:hidden"
      />
    </div>
  );
}
