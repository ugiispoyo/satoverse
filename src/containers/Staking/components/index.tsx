"use client";
import React from "react";
import clsx from "clsx";

import Reward from "@/components/Reward";

const Components = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  // Sorry there are some that I hardcode with the image, because time seems to be running out. 
  // I want to take a break first.
  return (
    <div className="w-full max-w-[1126px] mx-auto mt-9">
      <div className="w-full relative">
        <img
          src="/images/staking/user.svg"
          alt="user-staking"
          className="w-full max-w-[216px] right-[-70px] absolute top-0"
        />
      </div>

      <div className="flex w-full items-center">
        <div className="w-full max-w-[690px] mx-auto relative mt-10">
          <img
            src="/images/staking/content.svg"
            alt="staking"
            className="w-full"
          />
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
