"use client";

import Reward from "@/components/Reward";
import Link from "next/link";

const Components = () => {
  return (
    <div className="w-full max-w-[1126px] mx-auto mt-9 ">
      <div className="flex w-full items-center">
        <div className="w-full max-w-[690px] flex flex-col gap-4">
          <div className="w-full bg-[url('/images/roadmap/bg-content.svg')] min-h-[489px] relative px-4">
            <div className="w-full flex flex-col gap-4 py-4 pl-9 pr-4 mt-[80px] text-[#D4CA99]">
              <div className="w-full  bg-[url('/images/roadmap/bg-phase.svg')] min-h-[87px] pl-6 pt-6 pr-4 pb-4">
                <h2 className="font-orbitron text-base font-extrabold">
                  PHASE 01.
                  <span className="text-[#00FFFF]"> Genesis Sale:</span>
                </h2>
                <p className="font-joystix text-[8px]">
                  The presale goes live, offering early supporters a chance to
                  purchase $SATOV tokens at a discounted price. This phase
                  builds excitement and awareness for the upcoming launch of
                  Satoverse.
                </p>
              </div>
              <div className="w-full  bg-[url('/images/roadmap/bg-phase.svg')] min-h-[87px] pl-6 pt-6 pr-4 pb-4">
                <h2 className="font-orbitron text-base font-extrabold">
                  PHASE 02.
                  <span className="text-[#00FFFF]"> SatoStaking & Growth:</span>
                </h2>
                <p className="font-joystix text-[8px]">
                  As the presale countdown ticks down, the price of $SATOV
                  increases, while rewards for early participants decrease. The
                  community continues to grow, and efforts are focused on
                  improving $SATO in preparation for (TGE).
                </p>
              </div>
              <div className="w-full  bg-[url('/images/roadmap/bg-phase.svg')] min-h-[87px] pl-6 pt-6 pr-4 pb-4">
                <h2 className="font-orbitron text-base font-extrabold">
                  PHASE 03.
                  <span className="text-[#00FFFF]"> Token Launch:</span>
                </h2>
                <p className="font-joystix text-[8px]">
                  $SATO is officially launched, and the token is listed on major
                  centralized and decentralized exchanges (CEX/DEX). This phase
                  marks the beginning of Satoverse's journey, with the focus
                  shifting to ecosystem development and adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[calc(1126px-690px)] mt-5">
          <Reward />
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
