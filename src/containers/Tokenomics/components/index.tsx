"use client";
import React from "react";

import Reward from "@/components/Reward";

const Components = () => {
  return (
    <div className="w-full max-w-[1126px] mx-auto mt-9 ">
      <div className="flex w-full items-center">
        <div className="w-full max-w-[690px] flex flex-col gap-4">
          <div className="w-full bg-[url('/images/tokenomics/bg-content.svg')] min-h-[489px] relative px-4 flex font-orbitron">
            <h1 className="font-joystix text-[29px] text-[#B1F489] mt-8 ml-8">
              TOkenomics
            </h1>
            <div className="w-full top-[55px] left-[45%] absolute uppercase font-extrabold">
              <h3 className="text-[#B1F489] text-base text-shadow-white">
                15% — Marketing Fund
              </h3>
              <span className="block text-white text-[8px] text-shadow-white w-full max-w-[282px]">
                Used to promote Satoverse through ads, partnerships, and
                influencer collaborations.
              </span>
            </div>

            <div className="w-full top-[100px] left-[57%] absolute uppercase font-extrabold">
              <h3 className="text-[#E98A90] text-base text-shadow-white">
                10% — Reserve Fund
              </h3>
              <span className="block text-white text-[8px] text-shadow-white w-full max-w-[282px]">
                Set aside for future needs and unexpected expenses, ensuring
                stability.
              </span>
            </div>

            <div className="w-full top-[34%] left-[69%] absolute uppercase font-extrabold">
              <h3 className="text-[#D54642] text-base text-shadow-white w-full max-w-[227px]">
                20% — Development Fund
              </h3>
              <span className="block text-white text-[8px] text-shadow-white w-full max-w-[260px]">
                Supports the ongoing improvement of Satoverse's Layer 2
                technology and blockchain features.
              </span>
            </div>

            <div className="w-full top-[55%] left-[69%] absolute uppercase font-extrabold">
              <h3 className="text-[#DEB567] text-base text-shadow-white w-full max-w-[227px]">
                15% — Staking Rewards
              </h3>
              <span className="block text-white text-[8px] text-shadow-white w-full max-w-[210px]">
                Rewards users who stake their tokens, helping secure and grow
                the network.
              </span>
            </div>

            <div className="w-full top-[72%] left-[62%] absolute uppercase font-extrabold">
              <h3 className="text-[#9A65C4] text-base text-shadow-white w-full max-w-[227px]">
                10% — Exchange Liquidity
              </h3>
              <span className="block text-white text-[8px] text-shadow-white  w-full max-w-[227px]">
                Ensures that Satoverse is available for trading on major
                exchanges with enough liquidity.
              </span>
            </div>

            <div className="w-full bottom-[35px] absolute left-[50px] text-[#B1F489] uppercase text-base font-extrabold">
              <h3 className="text-shadow-white">Total Supply:</h3>
              <span className="block text-shadow-white">
                1,000,000,000,000 $SATO
              </span>
            </div>
          </div>
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
