"use client";
import React, { JSX } from "react";

import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <div className="w-full h-[900px] relative">
      <img
        src={"/images/border-top.svg"}
        alt="border-top"
        className="w-full h-auto"
      />
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
