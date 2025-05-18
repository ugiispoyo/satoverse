import Link from "next/link";
import React, { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ModalConnectWalet: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#000000bd] h-screen w-full">
      <div className="bg-[url('/images/bg-modal-connect-wallet.svg')] bg-no-repeat bg-size-[100%] rounded-2xl w-full max-w-[480px] min-h-[580px] transition-all transform">
        <div className="flex items-center justify-center flex-col py-10 px-8 relative">
          <button className="absolute top-10 right-13 cursor-pointer" onClick={onClose}>
            <img
              src="/icons/close.svg"
              alt="close"
              className="w-[20px] h-[20px]"
            />
          </button>
          <img
            src="/images/wallet.svg"
            alt="wallet"
            className="w-[40px] h-[40px]"
          />
          <h2 className="font-joystix text-[24px] text-gradient-8">
            Connect Wallet
          </h2>
          <p className="text-[10px] uppercase text-[#E3DAAC] font-extrabold font-orbitron text-center w-full max-w-[370px] mt-1 px-5">
            If you already have a wallet, select your desired wallet from the
            options below. If you don't have a wallet, download{" "}
            <span className="underline">Best Wallet</span> to get started.
          </p>
          <div className="w-full flex gap-4 justify-center items-center flex-col mt-4 px-4">
            <button className="bg-btn-best-wallet font-orbitron font-[900] w-full flex justify-between items-center">
              <span className="text-gradient-5 text-base ">BEST WALLET</span>
              <img
                src="/icons/best-wallet.svg"
                alt="best-wallet"
                className="w-full max-w-[50px] h-auto"
              />
            </button>
            <button className="bg-btn-other-connect-wallet text-gradient-5 text-base font-orbitron font-[900] w-full flex justify-between items-center">
              <span className="text-gradient-5 text-base">WALLET CONNECT</span>
              <img
                src="/icons/tether.svg"
                alt="tether"
                className="w-full max-w-[50px] h-auto"
              />
            </button>
            <button className="bg-btn-other-connect-wallet text-gradient-5 text-base font-orbitron font-[900] w-full flex justify-between items-center">
              <span className="text-gradient-5 text-base">METAMASK</span>
              <img
                src="/icons/metamask.svg"
                alt="metamask"
                className="w-full max-w-[50px] h-auto"
              />
            </button>
            <button className="bg-btn-other-connect-wallet text-gradient-5 text-base font-orbitron font-[900] w-full flex justify-between items-center">
              <span className="text-gradient-5 text-base">COINBASE WALLET</span>
              <img
                src="/icons/coinbase.svg"
                alt="coinbase-wallet"
                className="w-full max-w-[50px] h-auto"
              />
            </button>
          </div>
          <Link
            href="#"
            className="w-full flex justify-center items-center mt-4"
          >
            <img src="/icons/wallet-remove.svg" alt="wallet-remove" />
            <span className="text-[#E3DAAC] font-orbitron font-[800] ml-2 text-[10px]">
              I DON'T HAVE A WALLET
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalConnectWalet;
