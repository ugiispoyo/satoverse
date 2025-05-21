"use client";

import Reward from "@/components/Reward";

const Components = () => {
  return (
    <div className="w-full max-w-[1126px] mx-auto mt-9 ">
      <div className="flex w-full items-center max-lg:flex-col-reverse">
        <div className="w-full max-w-[690px] flex flex-col gap-4">
          <div className="w-full lg:bg-[url('/images/roadmap/bg-content.svg')] bg-[url('/images/sidebar-reward/bg-reward-mobile.svg')] min-h-[489px] px-4 max-lg:bg-no-repeat max-lg:max-w-[380px] max-lg:h-[550px] max-lg:bg-cover relative max-lg:flex max-lg:flex-col max-lg:mx-auto max-lg:px-[45px] max-lg:py-[30px] max-[380px]:p-0">
            <h1 className="font-joystix lg:hidden text-2xl lg:pt-12 lg:pl-13 text-[#B1F489]">
              ROADMAP
            </h1>
            <div className="w-full flex flex-col gap-4 max-lg:px-4 lg:pl-9 lg:pr-4 lg:mt-[80px] text-[#D4CA99]  max-lg:mb-[25px] max:lg:overflow-hidden max-lg:overflow-y-scroll">
              <div className="w-full lg:bg-[url('/images/roadmap/bg-phase.svg')] min-h-[87px] lg:pl-6 pt-6 lg:pr-4 lg:pb-4">
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
              <div className="w-full lg:bg-[url('/images/roadmap/bg-phase.svg')] min-h-[87px] lg:pl-6 pt-6 lg:pr-4 lg:pb-4">
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
              <div className="w-full lg:bg-[url('/images/roadmap/bg-phase.svg')] min-h-[87px] lg:pl-6 pt-6 lg:pr-4 lg:pb-4">
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
