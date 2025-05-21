"use client";

import VideoPlayer from "@/components/VideoPlayer";
import Reward from "@/components/Reward";
import WhatIs from "./what-is";

const Components = () => {
  return (
    <div className="w-full max-w-[1126px] mx-auto mt-5 pb-8">
      <div className="flex w-full max-lg:flex-col-reverse">
        <div className="w-full lg:max-w-[690px] flex flex-col gap-4">
          <div className="w-full max-w-[529px] flex justify-center mx-auto lg:mt-6">
            <VideoPlayer src="/satoverse.mp4" />
          </div>
          <div className="w-full">
            <WhatIs />
          </div>
        </div>
        <div className="w-full lg:max-w-[calc(1126px-690px)] max-w-[380px] max-lg:mx-auto mt-5">
          <Reward />
        </div>
      </div>
    </div>
  );
};

export default Components;
