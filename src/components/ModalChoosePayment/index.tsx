import clsx from "clsx";
import Link from "next/link";
import React, { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalChoosePayment: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#000000bd] h-screen w-full px-4">
      <div className="bg-[url('/images/sidebar-reward/bg-reward-mobile.svg')] relative bg-no-repeat bg-cover bg-center rounded-2xl w-full max-w-[480px] min-h-[700px] max-sm:min-h-[760px] transition-all transform px-8 max-sm:px-2">
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-10 right-13 max-[460px]:right-5 cursor-pointer z-[999]"
          onClick={onClose}
        >
          <img
            src="/icons/close.svg"
            alt="close"
            className="w-[20px] h-[20px]"
          />
        </button>
        <div className="flex items-center justify-center flex-col py-10 relative">
          {/* WALLET ICON */}
          <img
            src="/icons/wallet-add.svg"
            alt="wallet"
            className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] mt-4"
          />

          {/* TITLE */}
          <h2 className="font-joystix text-[24px] sm:text-[24px] text-gradient-8 text-center">
            Choose payment method
          </h2>

          <div className="flex w-full px-4 mt-4 justify-between max-sm:justify-evenly max-sm:flex-wrap max-sm:gap-2 max-sm:mb-2">
            <button className="bg-btn-best-wallet font-orbitron font-[900] w-full max-w-[82px]! rounded-md! flex justify-between items-center h-[50px] sm:h-[56px]">
              <span className="text-gradient-5 text-sm sm:text-base block w-full">
                ALL
              </span>
            </button>
            <button className="bg-btn-other-connect-wallet gap-1 font-orbitron font-[900] w-full p-0! max-w-[82px]! rounded-md! flex justify-center items-center h-[50px] sm:h-[56px]">
              <img src="/icons/coin/4.png" className="w-[20px]" alt="icon-eth" />
              <span className="text-gradient-5 text-sm sm:text-base">ETH</span>
            </button>
            <button className="bg-btn-other-connect-wallet gap-1 font-orbitron font-[900] w-full p-0! max-w-[82px]! rounded-md! flex justify-center items-center h-[50px] sm:h-[56px]">
              <img src="/icons/coin/1.png" className="w-[20px]" alt="icon-bsc" />
              <span className="text-gradient-5 text-sm sm:text-base">BSC</span>
            </button>
            <button className="bg-btn-other-connect-wallet gap-1 font-orbitron font-[900] w-full p-0! max-w-[82px]! rounded-md! flex justify-center items-center h-[50px] sm:h-[56px]">
              <img src="/icons/coin/5.png" className="w-[20px]" alt="icon-sol" />
              <span className="text-gradient-5 text-sm sm:text-base">SOL</span>
            </button>
          </div>

          <div className="w-full flex flex-col gap-3 mt-3 px-4">
            {[
              {
                label: "ETHEREUM",
                icons: "/icons/coin/4.png",
                name: "ETH",
                background: "bg-btn-best-wallet",
                price: "~$0.212",
                total: "0",
              },
              {
                label: "BNB",
                icons: "/icons/coin/1.png",
                name: "BNB",
                background: "bg-btn-other-connect-wallet",
                price: "~$0",
                total: "0",
              },
              {
                label: "Tether",
                icons: "/icons/coin/2.png",
                name: "USDT",
                background: "bg-btn-other-connect-wallet",
                price: "~$0",
                total: "0",
              },
              {
                label: "USDC",
                icons: "/icons/coin/3.png",
                name: "USDC",
                background: "bg-btn-other-connect-wallet",
                price: "~$0",
                total: "0",
              },
            ].map((item, index) => (
              <button
                key={index}
                className={clsx(
                  "font-orbitron font-[900] w-full flex max-w-full! justify-between items-center px-4 h-[56px] rounded-md",
                  item.background
                )}
              >
                <div className="flex gap-2 items-center">
                  <img
                    src={item.icons}
                    alt={item.label}
                    className="w-[32px] h-[32px]"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-gradient-5 text-sm">
                      {item.label}
                    </span>
                    <span className="text-gradient-3 text-[10px]">
                      {item.name}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-gradient-5 text-sm">{item.price}</span>
                  <span className="text-gradient-3 text-[10px]">
                    {item.total}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <span className="block text-center text-[10px] font-orbitron font-[900] text-[#E3DAAC] my-4">
            OR
          </span>

          <div className="w-full flex px-4">
            <button className="cursor-pointer relative w-full max-w-full flex items-center justify-center mx-auto">
              <img
                src={"/images/sidebar-reward/bg-button-buy-with-card-red.svg"}
                alt="buy"
                className="absolute w-full z-[5]"
              />
              <span className="text-[11px] text-gradient-5 z-[6] font-[900]">
                BUY WITH CARD
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalChoosePayment;
