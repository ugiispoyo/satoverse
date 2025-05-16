import React from "react";
import ProgressBlocks from "../ProgressBlock";
import Link from "next/link";

type Props = {};

const Reward = (props: Props) => {
  return (
    <div className="w-full relative flex">
      <img
        src="/images/sidebar-reward/bg-reward.svg"
        alt="Reward"
        className="w-full max-w-[470px] min-h-[478px] absolute left-[-20px] z-[10]"
      />

      <div className="w-full flex mt-[60px] items-end justify-center flex-col z-[11] relative">
        <div className="w-full flex justify-center ml-5">
          <img src="/images/sidebar-reward/buy.svg" alt="buy-bagde" />
          <span className="text-[48px] font-joystix text-[#B1F489]">$SATO</span>
        </div>
        <div className="w-full flex items-end flex-col">
          <span className="text-[24px] font-joystix text-[#B1F489] w-full block text-center">
            presale NOW!{" "}
          </span>
          <span className="w-full block font-orbitron text-[#E3DAAC] text-[16px] text-center">
            World's first Bitcoin Layer 2
          </span>
          <div className="w-full pl-[30px] flex justify-center">
            <div className="bg-[url('/images/sidebar-reward/bg-countdown.svg')] w-[318px] h-[146px] relative flex mt-3 flex-col">
              <div className="w-full flex gap-3 max-w-[282px] max-h-[70px] mx-auto mt-5">
                <div className="flex flex-col justify-between items-center">
                  <span className="text-gradient-1 font-orbitron uppercase font-extrabold text-[12px] block text-center">
                    Days
                  </span>
                  <span className="text-gradient-2 font-orbitron uppercase font-extrabold text-[32px] block text-center">
                    20
                  </span>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <span className="text-gradient-1 font-orbitron uppercase font-extrabold text-[12px] block text-center">
                    Hours
                  </span>
                  <span className="text-gradient-2 font-orbitron uppercase font-extrabold text-[32px] block text-center">
                    20
                  </span>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <span className="text-gradient-1 font-orbitron uppercase font-extrabold text-[12px] block text-center">
                    Minutes
                  </span>
                  <span className="text-gradient-2 font-orbitron uppercase font-extrabold text-[32px] block text-center">
                    20
                  </span>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <span className="text-gradient-1 font-orbitron uppercase font-extrabold text-[12px] block text-center">
                    Seconds
                  </span>
                  <span className="text-gradient-2 font-orbitron uppercase font-extrabold text-[32px] block text-center">
                    20
                  </span>
                </div>
              </div>
              <span className="text-gradient-1 font-orbitron uppercase font-extrabold text-[12px] block text-center mt-[20px]">
                Until next price increase
              </span>
              <div className="w-full flex justify-center ml-1 mt-2">
                <ProgressBlocks progressPercent={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[318px] relative flex mt-4 flex-col mx-auto items-end pl-[20px]">
          <p className="text-[10px] font-orbitron text-[#E3DAAC] block text-center w-full uppercase font-extrabold">
            USDT Raised:{" "}
            <span className="text-gradient-3">
              $18,570,135.62{" "}
              <span className="text-gradient-4">/ $33,250,524</span>
            </span>
          </p>
          <p className="text-[10px] font-orbitron text-[#E3DAAC] flex justify-center w-full uppercase font-extrabold">
            Your purchased SOLX =
            <span className="flex">
              <span className="text-gradient-3">$11,570.62</span>
              <img src="/icons/help-circle.svg" alt="help" />
            </span>
          </p>
          <p className="text-[10px] font-orbitron text-[#E3DAAC] flex justify-center w-full uppercase font-extrabold">
            Your stakeable SOLX =
            <span className="flex">
              <span className="text-gradient-3">$6,570.04</span>
              <img src="/icons/help-circle.svg" alt="help" />
            </span>
          </p>
          <p className="text-[10px] font-orbitron text-[#E3DAAC] flex justify-center gap-2 w-full uppercase font-extrabold">
            <img src="/images/right.svg" alt="right" className="mr-1" />
            <div className="flex">
              1 SOLX =
              <span className="flex">
                <span className="text-gradient-3">$6,570.04</span>
                <img src="/icons/help-circle.svg" alt="help" />
              </span>
            </div>
            <img src="/images/left.svg" alt="left" />
          </p>
          <div className="flex w-full mt-4 gap-1">
            <button className="cursor-pointer relative w-full max-w-[164px] flex items-center justify-center">
              <img
                src={"/images/sidebar-reward/bg-button-buy-with-card.svg"}
                alt="buy"
                className="absolute w-full h-[35px] z-[5]"
              />
              <span className="text-[11px] text-gradient-5 z-[6]">
                BUY WITH CARD
              </span>
            </button>
            <button className="cursor-pointer relative w-full max-w-[164px] flex items-center justify-center">
              <img
                src={"/images/sidebar-reward/bg-button-buy-with-cripto.svg"}
                alt="buy"
                className="absolute w-full h-[35px] z-[5]"
              />
              <span className="text-[11px] text-gradient-5 z-[6]">
                BUY WITH CRYTO
              </span>
            </button>
          </div>
          <Link href={"#"}>
            <span className="underline text-[#E3DAAC] text-[11px] mt-3 block">
              Don't have a wallet?
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reward;
