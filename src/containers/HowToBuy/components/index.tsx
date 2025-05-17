"use client";

import Reward from "@/components/Reward";
import Link from "next/link";

const Components = () => {
  return (
    <div className="w-full max-w-[1126px] mx-auto mt-9 ">
      <div className="flex w-full items-center">
        <div className="w-full max-w-[690px] flex flex-col gap-4">
          <div className="w-full bg-[url('/images/howtobuy/bg-content.svg')] min-h-[489px] relative px-4">
            <h1 className="font-joystix text-3xl pt-12 pl-13 text-[#B1F489]">
              How to buy <span className="text-[#00FFFF]">$SATO</span>?
            </h1>
            <div className="ml-[358px] text-[#D4CA99] font-usuzi text-xs mt-4">
              <ul className="font-orbitron flex flex-col gap-3 text-[#D4CA99]">
                <li>
                  <span className="block text-base font-extrabold">
                    01.
                    <br />
                    <span className="text-[#00FFFF]">Get wallet</span>
                  </span>
                  <p className="font-usuzi text-[8px] my-3">
                    You will need a wallet to hold your $SATO.
                  </p>
                  <Link href={"#"}>
                    <span className="text-[10px] underline">DOWNLOAD</span>
                  </Link>
                </li>
                <li>
                  <span className="block text-base font-extrabold">
                    02.
                    <br />
                    <span className="text-[#00FFFF]">Add crypto</span>
                  </span>
                  <p className="font-usuzi text-[8px] my-3">
                    If you're looking to swap crypto for $SATO, you're going to
                    need some. Use your desired exchange for that, or pay by
                    card by selecting the button.
                  </p>
                </li>
                <li>
                  <span className="block text-base font-extrabold">
                    03.
                    <br />
                    <span className="text-[#00FFFF]">STAKING</span>
                  </span>
                  <p className="font-usuzi text-[8px] my-3">
                    You can chose to stake your tokens during the presale to
                    earn rewards, the sooner you enter the presale, the higher
                    the APY.
                  </p>
                  <Link href={"/staking"}>
                    <span className="text-[10px] underline">stake</span>
                  </Link>
                </li>
              </ul>
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
