import Link from "next/link";
import React, { useEffect } from "react";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalConnectWalet: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);
    params.set("connect-wallet", "true");
    onClose();
    router.push(`${pathname}?${params.toString()}`);
  };

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
      <div className="bg-[url('/images/bg-modal-connect-wallet.svg')] relative bg-no-repeat bg-cover bg-center rounded-2xl w-full max-w-[480px] min-h-[580px] sm:min-h-[580px] min-h-[90vh] transition-all transform px-4 sm:px-8">
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
            src="/images/wallet.svg"
            alt="wallet"
            className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]"
          />

          {/* TITLE */}
          <h2 className="font-joystix text-[22px] sm:text-[24px] text-gradient-8">
            Connect Wallet
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[10px] sm:text-[11px] uppercase text-[#E3DAAC] font-extrabold font-orbitron text-center w-full max-w-[370px] mt-1 px-2 sm:px-5">
            If you already have a wallet, select your desired wallet from the
            options below. If you don't have a wallet, download{" "}
            <span className="underline">Best Wallet</span> to get started.
          </p>

          {/* BUTTONS */}
          <div className="w-full flex gap-4 justify-center items-center flex-col mt-4">
            {/* BEST WALLET */}
            <button className="bg-btn-best-wallet font-orbitron font-[900] w-full flex justify-between items-center h-[50px] px-4 sm:h-[56px]">
              <span className="text-gradient-5 text-sm sm:text-base">
                BEST WALLET
              </span>
              <img
                src="/icons/best-wallet.svg"
                alt="best-wallet"
                className="max-w-[35px] sm:max-w-[50px]"
              />
            </button>

            {/* OTHER WALLETS */}
            {[
              { name: "WALLET CONNECT", icon: "/icons/tether.svg" },
              { name: "METAMASK", icon: "/icons/metamask.svg" },
              { name: "COINBASE WALLET", icon: "/icons/coinbase.svg" },
            ].map((wallet, index) => (
              <button
                key={index}
                onClick={handleClick}
                className="bg-btn-other-connect-wallet text-gradient-5 font-orbitron font-[900] w-full flex justify-between items-center h-[50px] px-4 sm:h-[56px]"
              >
                <span className="text-gradient-5 text-sm sm:text-base">
                  {wallet.name}
                </span>
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="max-w-[35px] sm:max-w-[50px]"
                />
              </button>
            ))}
          </div>

          {/* NO WALLET */}
          <Link
            href="#"
            className="w-full flex justify-center items-center mt-4"
          >
            <img
              src="/icons/wallet-remove.svg"
              alt="wallet-remove"
              className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"
            />
            <span className="text-[#E3DAAC] font-orbitron font-[800] ml-2 text-[10px] sm:text-[11px]">
              I DON'T HAVE A WALLET
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalConnectWalet;
