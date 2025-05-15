"use client";
import React from "react";
import clsx from "clsx";

import Reward from "@/components/Reward";

const Components = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="w-full max-w-[1126px] mx-auto mt-9 ">
      <div className="flex w-full items-center">
        <div className="w-full max-w-[690px] flex flex-col gap-4">
          <div className="w-full bg-[url('/images/tokenomics/content.svg')] min-h-[489px] relative px-4"></div>
        </div>
        <div className="w-full max-w-[calc(1126px-690px)] mt-5">
          <Reward />
        </div>
      </div>
      <button className="absolute top-1/2 left-[20px] transform -translate-y-1/2">
        <img src="/images/arrow-left.svg" alt="arrow left" />
      </button>
      <button className="absolute top-1/2 right-[20px] transform -translate-y-1/2">
        <img src="/images/arrow-right.svg" alt="arrow right" />
      </button>
    </div>
  );
};

export default Components;
