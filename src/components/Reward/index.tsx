"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";

import ProgressBlocks from "../ProgressBlock";
import SakingProgress from "../SakingProgress";
import Modal from "../ModalConnectWalet";

import { Input } from "../Form";
import ModalChoosePayment from "../ModalChoosePayment";
import ModalStatus from "../ModalStatus";

type Props = {};

const Reward = (props: Props) => {
  const searchParams = useSearchParams();
  const isConnectWallet = searchParams.get("connect-wallet");

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenModalChoosePayment, setIsOpenModalChoosePayment] =
    useState(false);
  const [isOpenModalStatus, setIsOpenModalStatus] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col max-lg:mb-5">
        <div className="w-full flex lg:justify-end justify-center relative min-h-[40px]">
          <div className="lg:max-w-[335px] max-w-[310px] w-full lg:absolute lg:right-[20px]">
            <span
              className="text-[#F4C46A] font-joystix lg:text-[20px] text-base"
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
              <span className="text-[10px] font-orbitron text-[#C0C0C0] absolute bottom-[-5px] left-0">
                *Will decrease Next Stage
              </span>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            "w-full relative flex max-lg:bg-no-repeat max-lg:bg-cover",
            isConnectWallet
              ? "max-lg:bg-[#121512] max-lg:mt-4 max-lg:pb-3 max-lg:rounded"
              : "max-lg:bg-[url('/images/sidebar-reward/bg-reward-mobile.svg')] max-lg:min-h-[465px]"
          )}
        >
          <img
            src={
              isConnectWallet
                ? "/images/sidebar-reward/bg-reward-wallet-active.svg"
                : "/images/sidebar-reward/bg-reward.svg"
            }
            alt="Reward"
            className="hidden lg:flex w-full max-w-[470px] min-h-[478px] absolute left-[-20px] z-[6]"
          />
          <img
            src="/images/web3-payments.svg"
            alt="web3-payments"
            className="h-[12px] absolute lg:top-[40px] lg:right-[70px] top-[5px] right-[40px]"
          />

          <div className="w-full flex lg:mt-[60px] lg:items-end justify-center flex-col z-[11] relative">
            <div className="w-full flex justify-center lg:ml-5">
              <img
                src="/images/sidebar-reward/buy.svg"
                alt="buy-bagde"
                className="max-lg:hidden"
              />
              <span className="lg:text-[48px] text-[35px] font-joystix text-[#B1F489]">
                $SATO
              </span>
            </div>
            <div className="w-full flex items-end flex-col">
              <span className="text-[24px] font-joystix text-[#B1F489] w-full block text-center">
                presale NOW!{" "}
              </span>
              <span className="w-full block font-[900] font-orbitron text-[#E3DAAC] text-[16px] text-center">
                World's first Bitcoin Layer 2
              </span>
              <div className="w-full lg:pl-[30px] flex justify-center">
                <div className="bg-[url('/images/sidebar-reward/bg-countdown.svg')] lg:w-[318px] lg:h-[146px] max-lg:bg-cover w-[310px] h-[142px] relative flex mt-3 flex-col">
                  <div className="w-full flex gap-3 max-w-[282px] max-h-[70px] mx-auto mt-5 max-lg:justify-between">
                    <div className="flex flex-col justify-between items-center">
                      <span className="text-[#E3DAAC] font-orbitron uppercase font-extrabold text-[12px] block text-center">
                        Days
                      </span>
                      <span className="text-gradient-2 font-orbitron uppercase font-extrabold text-[32px] max-lg:text-[28px] block text-center">
                        20
                      </span>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                      <span className="text-[#E3DAAC] font-orbitron uppercase font-extrabold text-[12px] block text-center">
                        Hours
                      </span>
                      <span className="text-gradient-2 font-orbitron uppercase font-extrabold text-[32px] max-lg:text-[28px] block text-center">
                        20
                      </span>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                      <span className="text-[#E3DAAC] font-orbitron uppercase font-extrabold text-[12px] block text-center">
                        Minutes
                      </span>
                      <span className="text-gradient-2 font-orbitron uppercase font-extrabold text-[32px] max-lg:text-[28px] block text-center">
                        20
                      </span>
                    </div>
                    <div className="flex flex-col justify-between items-center">
                      <span className="text-[#E3DAAC] font-orbitron uppercase font-extrabold text-[12px] block text-center">
                        Seconds
                      </span>
                      <span className="text-gradient-2 font-orbitron uppercase font-extrabold text-[32px] max-lg:text-[28px] block text-center">
                        20
                      </span>
                    </div>
                  </div>
                  <span className="text-gradient-1 font-orbitron uppercase font-extrabold text-[12px] block text-center mt-[20px]">
                    Until next price increase
                  </span>
                  <div className="w-full flex justify-center ml-1 lg:mt-2 mt-1">
                    <ProgressBlocks progressPercent={20} />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[318px] relative flex mt-4 flex-col mx-auto lg:items-end lg:pl-[20px]">
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
              {isConnectWallet ? (
                <div className="w-full mt-4 flex flex-col gap-1">
                  <div className="w-full flex items-end gap-1 relative">
                    <div className="flex flex-col w-full max-w-[220px]">
                      <Input label="Pay with eth" defaultValue={0} />
                    </div>
                    <button
                      onClick={() => setIsOpenModalChoosePayment(true)}
                      className="relative w-full max-w-[125px] h-[36px] bg-[#1c1c1c] flex items-center justify-center"
                    >
                      <img
                        src="/images/sidebar-reward/bg-button.svg"
                        className="absolute w-full bottom-0 z-[3]"
                        alt="bg"
                      />
                      <div className="w-full flex items-center justify-center z-[4] relative gap-1">
                        <img
                          src="/icons/coin/4.png"
                          alt="eth"
                          className="h-[12px] w-[12px]"
                        />
                        <span className="text-[10px] text-[#E3DAAC] font-[900] font-orbitron block">
                          ETH
                        </span>
                        <img
                          src="/icons/double-arrow-left.png"
                          alt="eth"
                          className="h-[6px]"
                        />
                      </div>
                    </button>
                    <span className="absolute uppercase font-orbitron text-[10px] font-[900] text-[#E3DAAC] top-[7px] right-[16%]">
                      <span className="text-[#F95D51] mr-1">MAX</span>Balance =
                      0
                    </span>
                  </div>
                  <div className="w-full relative">
                    <Input
                      label="Receive solx"
                      defaultValue={0}
                      endAdornment={
                        <img
                          src="/icons/satoverse.svg"
                          alt="satoverse"
                          className="w-[16px]"
                        />
                      }
                    />
                  </div>
                  <span className="uppercase text-center block text-[10px] font-orbitron text-[#E3DAAC] font-[900] mt-1">
                    you do not have enough eth to pay for this transaction.
                  </span>

                  <button
                    className="cursor-pointer relative w-full max-w-[280px] flex items-center justify-center mx-auto mt-2"
                    onClick={() => setIsOpenModal(true)}
                  >
                    <img
                      src={"/images/sidebar-reward/bg-button-buy-stake.svg"}
                      alt="buy"
                      className="absolute w-full h-[35px] z-[5]"
                    />
                    <span className="text-[11px] text-gradient-5 z-[6] font-[900]">
                      BUY AND STAKE FOR 900% REWARDS
                    </span>
                  </button>
                  <button
                    className="cursor-pointer relative w-full max-w-[280px] flex items-center justify-center mx-auto mt-4"
                    onClick={() => setIsOpenModal(true)}
                  >
                    <img
                      src={"/images/sidebar-reward/bg-button-buy-solx.svg"}
                      alt="buy"
                      className="absolute w-full h-[35px] z-[5]"
                    />
                    <span className="text-[11px] text-gradient-5 z-[6] font-[900]">
                      BUY SOLX
                    </span>
                  </button>

                  <span className="uppercase text-center block text-[10px] font-orbitron text-[#E3DAAC] font-[900] mt-2">
                    WANT TO PAY WITH CARD INSTEAD?{" "}
                    <Link href="#">
                      <span className="text-[#A0FF8E] uppercase underline">
                        CLICK HERE!
                      </span>
                    </Link>
                    <br />
                    <Link href={"#"}>
                      <span className="underline">
                        nOT ENOUGH ETH? TOP UP NOW
                      </span>
                    </Link>
                  </span>
                </div>
              ) : (
                <>
                  <div className="flex w-full mt-4 gap-1">
                    <button
                      className="cursor-pointer relative w-full max-w-[164px] flex items-center justify-center"
                      onClick={() => setIsOpenModal(true)}
                    >
                      <img
                        src={
                          "/images/sidebar-reward/bg-button-buy-with-card.svg"
                        }
                        alt="buy"
                        className="absolute w-full h-[35px] z-[5]"
                      />
                      <span className="text-[11px] text-gradient-5 z-[6] font-[900]">
                        BUY WITH CARD
                      </span>
                    </button>
                    <button
                      className="cursor-pointer relative w-full max-w-[164px] flex items-center justify-center"
                      onClick={() => setIsOpenModal(true)}
                    >
                      <img
                        src={
                          "/images/sidebar-reward/bg-button-buy-with-cripto.svg"
                        }
                        alt="buy"
                        className="absolute w-full h-[35px] z-[5]"
                      />
                      <span className="text-[11px] text-gradient-5 z-[6] font-[900]">
                        BUY WITH CRYTO
                      </span>
                    </button>
                  </div>
                </>
              )}
              <Link href={"#"}>
                <span className="underline text-[#E3DAAC] font-orbitron uppercase text-[11px] mt-3 block max-lg:text-center max-lg:mt-5 font-[900]">
                  Don't have a wallet?
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex lg:justify-end justify-center relative mt-5 z-[10] lg:pr-[30px] mb-5">
          <button
            onClick={() => setIsOpenModalStatus(true)}
            className="bg-btn-buy-with-solana flex rounded-md items-center min-h-[44px] w-full max-w-[240px]"
          >
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
      <ModalChoosePayment
        isOpen={isOpenModalChoosePayment}
        onClose={() => setIsOpenModalChoosePayment(false)}
      />
      <ModalStatus
        isOpen={isOpenModalStatus}
        onClose={() => setIsOpenModalStatus(false)}
        status="success"
      />
    </>
  );
};

export default Reward;
