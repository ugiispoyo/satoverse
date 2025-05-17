"use client";
import React from "react";
import clsx from "clsx";

import Reward from "@/components/Reward";

const Components = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="w-full max-w-[1126px] mx-auto mt-9 ">
      <div className="flex w-full items-center">
        <div className="w-full max-w-[690px] flex flex-col gap-4">
          <div className="w-full bg-[url('/images/faq/bg-content.svg')] min-h-[489px] relative px-4">
            <div className="w-full flex flex-col gap-4 py-4 pl-9 pr-4 mt-[80px] text-[#D4CA99]">
              <div className="w-[626px] bg-[url('/images/faq/bg-faq-close.svg')] min-h-[103px] pl-4 pt-1 pr-4 pb-4 cursor-pointer">
                <h2 className="font-orbitron text-base font-extrabold">
                  Q.<span className="text-[#B1F489]"> 01</span>
                </h2>
                <h3 className=" text-base font-orbitron text-[#1C1C1C] font-extrabold pl-1 pt-3">
                  What is Satoverse?
                </h3>
              </div>
              <div
                onClick={() => setOpen(!open)}
                className={clsx(
                  "w-[626px] min-h-[87px] pl-4 pt-1 pr-4 pb-4 cursor-pointer",
                  open
                    ? "bg-[url('/images/faq/bg-faq-open.svg')] min-h-[200px]"
                    : "bg-[url('/images/faq/bg-faq-close.svg')] min-h-[103px]"
                )}
              >
                <h2 className="font-orbitron text-base font-extrabold">
                  Q.<span className="text-[#B1F489]"> 02</span>
                </h2>
                <h3 className=" text-base font-orbitron text-[#1C1C1C] font-extrabold pl-1 pt-3">
                  How do I participate in the presale?
                </h3>
                {open && (
                  <div className="w-full font-usuzi text-[8px] text-[#D4CA99] mt-8 flex gap-1 flex-col">
                    <p>
                      To participate in the{" "}
                      <span className="text-[#B1F489]">Satoverse</span> presale,
                      you simply need to follow these steps:
                    </p>
                    <ol className="list-disc pl-3 mt-1">
                      <li>
                        Register for the presale on the official Satoverse
                        website.
                      </li>
                      <li>
                        Choose the amount of SATOV tokens you want to purchase.
                      </li>
                      <li>
                        Complete the payment process using a supported
                        cryptocurrency.{" "}
                      </li>
                      <li>
                        Once your purchase is confirmed, your SATOV tokens will
                        be allocated to your wallet.
                      </li>
                    </ol>
                    <p>
                      Make sure to act fast — the earlier you buy, the lower the
                      price and the higher the staking rewards you'll receive!
                    </p>
                  </div>
                )}
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
