'use client';
import React, { JSX } from "react";

import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  return (
    <div className="w-full">
      <img
        src={"/images/border-top.svg"}
        alt="border-top"
        className="w-full h-auto"
      />
      <Navbar />
      {props.children}
    </div>
  );
}
