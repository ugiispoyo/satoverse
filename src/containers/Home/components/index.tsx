"use client";

import Reward from "@/components/Reward";
import WhatIs from "./what-is";

const Components = () => {
  return (
    <div className="w-full max-w-[1126px] mx-auto mt-5 pb-8">
      <div className="flex w-full">
        <div className="w-full max-w-[690px] flex flex-col gap-4">
          <img
            src="/images/home/home.svg"
            alt="Home"
            className="w-full max-w-[640px] h-auto"
          />
          <div className="w-full">
            <WhatIs />
          </div>
        </div>
        <div className="w-full max-w-[calc(1126px-690px)] mt-5">
          <Reward />
        </div>
      </div>
    </div>
  );
};

export default Components;
