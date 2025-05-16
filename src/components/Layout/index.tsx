"use client";
import React, { JSX } from "react";

import Navbar from "../Navbar";

import { borderTop } from "@/constants";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  function DynamicWidthContent({ text, img }: { text: string; img: string }) {
    const wordCount = text.length;

    let width = wordCount;

    if (width < 100) width = 100;

    return (
      <li
        style={{
          width: `${width}px`,
        }}
        className="flex items-center justify-center flex-1 relative h-[14px] overflow-hidden"
      >
        <img
          src={`/images/border-top/${img}.svg`}
          alt="border-top"
          className="w-full z-[5] absolute top-0"
        />
        <span className="text-[8px] font-usuzi text-[#0D0D0D] z-[6] bottom-1 pt-[4px]">
          {text}
        </span>
      </li>
    );
  }
  return (
    <div className="w-full h-[900px] relative">
      <ul className="w-full flex max-h-[40px] overflow-y-hidden mb-8">
        {borderTop.map((item, index) => (
          <React.Fragment key={index}>
            <DynamicWidthContent text={item.label} img={item.img} />
          </React.Fragment>
        ))}
      </ul>
      <Navbar />
      {props.children}
      <img
        src={"/images/border-right-bottom.svg"}
        alt="border-bottom"
        className="w-auto h-[329px] absolute bottom-0 right-0"
      />
    </div>
  );
}
