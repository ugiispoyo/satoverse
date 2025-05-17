"use client";
import React from "react";

import User from "./user";
import History from "./history";

const Components = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto mt-4">
      <div className="w-full relative flex justify-end">
        <User />
      </div>

      <div className="flex w-full items-center">
        <div className="w-full max-w-[690px] mx-auto relative mt-10">
          <History />
        </div>
      </div>
      <button className="absolute top-1/2 left-[0px] transform -translate-y-1/2">
        <img src="/images/arrow-left.svg" alt="arrow left" />
      </button>
      <button className="absolute top-1/2 right-[0px] transform -translate-y-1/2">
        <img src="/images/arrow-right.svg" alt="arrow right" />
      </button>
    </div>
  );
};

export default Components;
