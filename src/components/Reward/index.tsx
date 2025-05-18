"use client";
import React, { useState } from "react";
import Link from "next/link";

import ProgressBlocks from "../ProgressBlock";
import SakingProgress from "../SakingProgress";
import Modal from "../ModalConnectWalet";

type Props = {};

const Reward = (props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-end relative min-h-[40px]">
          <div className="max-w-[335px] w-full absolute right-[20px]">
            <span
              className="text-[#F4C46A] font-joystix text-[20px]"
              style={{
                textShadow: "0 0 10px rgba(227, 218, 172, 0.5)",
              }}
            >
              900% Staking rewards
            </span>
            <div className="w-full relative flex items-center justify-end h-[30px] pl-[50px] pt-2">
              <img
                src={"/images/sidebar-reward/progress-saking.svg"}
                alt="rocket"
                className="absolute w-full"
              />
              <div className="w-full max-w-[272px] h-[30px] pl-2">
                <SakingProgress progressPercent={80} />
              </div>
              <span className="text-[6px] font-orbitron text-[#C0C0C0] absolute bottom-[-5px] left-0">
                *Will decrease Next Stage
              </span>
            </div>
          </div>
        </div>
        <div className="w-full relative flex">
          <img
            src="/images/sidebar-reward/bg-reward.svg"
            alt="Reward"
            className="w-full max-w-[470px] min-h-[478px] absolute left-[-20px] z-[10]"
          />

          <div className="w-full flex mt-[60px] items-end justify-center flex-col z-[11] relative">
            <div className="w-full flex justify-center ml-5">
              <img src="/images/sidebar-reward/buy.svg" alt="buy-bagde" />
              <span className="text-[48px] font-joystix text-[#B1F489]">
                $SATO
              </span>
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
                <span className="flex">
                  1 SOLX =
                  <span className="flex">
                    <span className="text-gradient-3">$6,570.04</span>
                    <img src="/icons/help-circle.svg" alt="help" />
                  </span>
                </span>
                <img src="/images/left.svg" alt="left" />
              </p>
              <div className="flex w-full mt-4 gap-1">
                <button
                  className="cursor-pointer relative w-full max-w-[164px] flex items-center justify-center"
                  onClick={() => setIsOpenModal(true)}
                >
                  <img
                    src={"/images/sidebar-reward/bg-button-buy-with-card.svg"}
                    alt="buy"
                    className="absolute w-full h-[35px] z-[5]"
                  />
                  <span className="text-[11px] text-gradient-5 z-[6]">
                    BUY WITH CARD
                  </span>
                </button>
                <button
                  className="cursor-pointer relative w-full max-w-[164px] flex items-center justify-center"
                  onClick={() => setIsOpenModal(true)}
                >
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
        <div className="w-full flex justify-end relative mt-5 z-[10] pr-[30px]">
          <button className="bg-btn-buy-with-solana flex rounded-md items-center min-h-[44px] w-full max-w-[240px]">
            <img
              src="/icons/solana.svg"
              alt="solana"
              className="w-[40px] rounded-[100%] pt-2"
            />
            <span className="text-base font-orbitron font-[900] text-gradient-9">
              BUY WITH SOLANA
            </span>
          </button>
        </div>
      </div>

      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </>
  );
};

export default Reward;
