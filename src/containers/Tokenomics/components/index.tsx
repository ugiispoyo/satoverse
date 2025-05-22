"use client";
import React from "react";

import Reward from "@/components/Reward";

const Components = () => {
  return (
    <div className="w-full max-w-[1126px] mx-auto mt-9 ">
      <div className="flex w-full items-center max-[1120px]:flex-col-reverse">
        <div className="w-full max-w-[690px] flex flex-col gap-4">
          <div className="w-full bg-[url('/images/tokenomics/bg-content.png')] min-h-[489px] px-4 flex font-orbitron max-[1120px]:bg-[url('/images/sidebar-reward/bg-reward-mobile.svg')] max-[1120px]:bg-no-repeat max-[1120px]:max-w-[380px] max-[1120px]:h-[550px] max-[1120px]:bg-cover relative max-[1120px]:flex max-[1120px]:flex-col max-[1120px]:mx-auto max-[1120px]:px-[45px] max-[1120px]:py-[30px]">
            <h1 className="font-joystix text-[29px] max-[1120px]:text-2xl text-[#B1F489] mt-9 ml-8 max-[1120px]:mt-0 max-[1120px]:ml-0">
              TOkenomics
            </h1>

            {/* Mobile */}
            <div className="relative hidden max-[1120px]:flex">
              <img
                src="/images/tokenomics/tokenomics-mobile.svg"
                alt="tokenomics"
                className="hidden max-[1120px]:flex max-[1120px]:mt-4 w-full"
              />
              <h3 className="text-[#B1F489] text-[8px] text-shadow-white absolute top-[40px] left-[43%] uppercase font-extrabold">
                15% — Marketing Fund
              </h3>
              <h3 className="text-[#E98A90] text-[8px] max-w-[100px] text-shadow-white absolute top-[55px] left-[55%] uppercase font-extrabold">
                10% — Reserve Fund
              </h3>
              <h3 className="text-[#D54642] text-[8px] max-w-[100px] text-shadow-white absolute top-[80px] left-[68%] uppercase font-extrabold">
                20% — Development Fund
              </h3>
              <h3 className="text-[#DEB567] text-[8px] max-w-[100px] text-shadow-white absolute top-[60%] left-[68%] uppercase font-extrabold">
                15% — Staking Rewards
              </h3>
              <h3 className="text-[#9A65C4] text-[8px] max-w-[100px] text-shadow-white absolute top-[73%] left-[63%] uppercase font-extrabold">
                10% — Exchange Liquidity
              </h3>
            </div>
            <div className="max-[1120px]:flex hidden max-[1120px]:px-4 max-[1120px]:mb-[45px] font-usuzi text-xs mt-4 max-[1120px]:overflow-hidden max-[1120px]:overflow-y-scroll gap-4 flex-col">
              <div className="w-full uppercase font-extrabold max-lg:hidden">
                <h3 className="text-[#B1F489] text-base text-shadow-white">
                  15% — Marketing Fund
                </h3>
                <span className="block text-white text-[8px] text-shadow-white w-full max-w-[282px]">
                  Used to promote Satoverse through ads, partnerships, and
                  influencer collaborations.
                </span>
              </div>

              <div className="w-full uppercase font-extrabold">
                <h3 className="text-[#E98A90] text-base text-shadow-white">
                  10% — Reserve Fund
                </h3>
                <span className="block text-white text-[8px] text-shadow-white w-full max-w-[282px]">
                  Set aside for future needs and unexpected expenses, ensuring
                  stability.
                </span>
              </div>

              <div className="w-full uppercase font-extrabold">
                <h3 className="text-[#D54642] text-base text-shadow-white w-full max-w-[227px]">
                  20% — Development Fund
                </h3>
                <span className="block text-white text-[8px] text-shadow-white w-full max-w-[260px]">
                  Supports the ongoing improvement of Satoverse's Layer 2
                  technology and blockchain features.
                </span>
              </div>

              <div className="w-full uppercase font-extrabold">
                <h3 className="text-[#DEB567] text-base text-shadow-white w-full max-w-[227px]">
                  15% — Staking Rewards
                </h3>
                <span className="block text-white text-[8px] text-shadow-white w-full max-w-[210px]">
                  Rewards users who stake their tokens, helping secure and grow
                  the network.
                </span>
              </div>

              <div className="w-full uppercase font-extrabold">
                <h3 className="text-[#9A65C4] text-base text-shadow-white w-full max-w-[227px]">
                  10% — Exchange Liquidity
                </h3>
                <span className="block text-white text-[8px] text-shadow-white  w-full max-w-[227px]">
                  Ensures that Satoverse is available for trading on major
                  exchanges with enough liquidity.
                </span>
              </div>

              <div className="w-full text-[#B1F489] uppercase text-base font-extrabold">
                <h3 className="text-shadow-white">Total Supply:</h3>
                <span className="block text-shadow-white">
                  1,000,000,000,000 $SATO
                </span>
              </div>
            </div>

            {/* Desktop */}
            <div className="flex max-[1120px]:hidden">
              <div className="w-full top-[55px] left-[45%] absolute uppercase font-extrabold max-lg:hidden">
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

              <div className="w-full top-[55%] left-[70%] absolute uppercase font-extrabold">
                <h3 className="text-[#DEB567] text-base text-shadow-white w-full max-w-[227px]">
                  15% — Staking Rewards
                </h3>
                <span className="block text-white text-[8px] text-shadow-white w-full max-w-[210px]">
                  Rewards users who stake their tokens, helping secure and grow
                  the network.
                </span>
              </div>

              <div className="w-full top-[72%] left-[63%] absolute uppercase font-extrabold">
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
        </div>
        <div className="w-full max-w-[calc(1126px-690px)] mt-5">
          <Reward />
        </div>
      </div>
      <button className="absolute top-1/2 left-[0px] transform -translate-y-1/2 max-[1200px]:hidden">
        <img src="/images/arrow-left.svg" alt="arrow left" />
      </button>
      <button className="absolute top-1/2 right-[0px] transform -translate-y-1/2 max-[1200px]:hidden">
        <img src="/images/arrow-right.svg" alt="arrow right" />
      </button>
    </div>
  );
};

export default Components;
