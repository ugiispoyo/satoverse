"use client";
import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

import Reward from "@/components/Reward";

const Components = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div className="w-full max-w-[1126px] mx-auto mt-9 ">
      <div className="flex w-full items-center max-lg:flex-col-reverse">
        <div className="w-full max-w-[690px] flex flex-col lg:gap-4">
          <div className="w-full lg:bg-[url('/images/faq/bg-content.png')] bg-[url('/images/sidebar-reward/bg-reward-mobile.svg')] min-h-[489px] px-4 max-lg:bg-no-repeat max-lg:max-w-[380px] max-lg:h-[550px] max-lg:bg-cover relative max-lg:flex max-lg:flex-col max-lg:mx-auto max-lg:px-[45px] max-lg:py-[30px] max-[380px]:p-0">
            <h1 className="font-joystix lg:hidden text-2xl lg:pt-12 lg:pl-13 text-[#B1F489]">
              F.A.Q
            </h1>
            <div className="w-full flex flex-col gap-4 lg:py-4 lg:pl-9 lg:pr-4 lg:mt-[80px] mt-5 text-[#D4CA99]  max-lg:mb-[25px] max:lg:overflow-hidden overflow-x-hidden max-lg:overflow-y-scroll">
              <div className="lg:w-[626px] max-lg:w-[300px] lg:bg-[url('/images/faq/bg-faq-close.svg')] bg-[url('/images/faq/bg-faq-close-mobile.svg')] max-lg:bg-cover lg:min-h-[103px] min-h-[110px] lg:pl-4 lg:pt-1 lg:pr-4 lg:pb-4 pt-6 pl-5 cursor-pointer">
                <h2 className="font-orbitron lg:text-base text-sm font-extrabold">
                  Q.<span className="text-[#B1F489]"> 01</span>
                </h2>
                <h3 className="lg:text-base font-orbitron text-xs max-w-[265px] text-[#1C1C1C] font-extrabold pl-1 lg:pt-3 pt-4">
                  What is Satoverse?
                </h3>
              </div>
              <div
                onClick={() => setOpen(!open)}
                className={clsx(
                  "max-lg:bg-cover lg:pl-4 lg:pt-1 lg:pr-4 lg:pb-4 pt-6 pl-5 cursor-pointer",
                  open
                    ? "lg:bg-[url('/images/faq/bg-faq-open.svg')] lg:min-h-[200px] bg-[url('/images/faq/bg-faq-open-mobile.svg')] max-lg:pb-8"
                    : "lg:w-[626px] max-lg:w-[300px] lg:min-h-[103px] min-h-[110px] lg:bg-[url('/images/faq/bg-faq-close.svg')] bg-[url('/images/faq/bg-faq-close-mobile.svg')]"
                )}
              >
                <h2
                  onClick={() => setOpen(!open)}
                  className="font-orbitron lg:text-base text-sm font-extrabold"
                >
                  Q.<span className="text-[#B1F489]"> 02</span>
                </h2>
                <h3
                  onClick={() => setOpen(!open)}
                  className="lg:text-base font-orbitron text-xs text-[#1C1C1C] font-extrabold pl-1 lg:pt-3 pt-4"
                >
                  How do I participate in the presale?
                </h3>
                {open && (
                  <motion.div
                    key="faq-content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: open ? 0.3 : 0.5,
                      ease: "easeInOut",
                    }}
                    className="w-full font-usuzi max-lg:max-w-[250px] text-wrap text-[8px] text-[#D4CA99] mt-8 flex gap-1 flex-col overflow-hidden overflow-y-scroll max-lg:max-h-[100px]"
                  >
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
                  </motion.div>
                )}
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
