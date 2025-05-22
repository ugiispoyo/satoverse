import clsx from "clsx";
import Link from "next/link";
import React, { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  status: "success" | "error" | "pending" | "loading";
};

const ModalStatus: React.FC<ModalProps> = ({ isOpen, onClose, status }) => {
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

  const renderStatus = () => {
    switch (status) {
      case "success":
        return (
          <>
            <img
              src="/icons/wallet-checked.svg"
              alt="wallet"
              className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] mb-2"
            />
            <span className="block uppercase w-full text-center text-[20px] text-gradient-7 font-joystix font-[900]">
              transaction Submitted
            </span>
          </>
        );
      case "error":
        return (
          <>
            <img
              src="/icons/wallet-remove.svg"
              alt="wallet"
              className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] mb-2"
            />
            <span className="block w-full uppercase text-center text-[20px] text-gradient-3 font-joystix font-[900]">
              transaction failed
            </span>
          </>
        );
      case "pending":
        return (
          <>
            <img
              src="/icons/wallet-pending.svg"
              alt="wallet"
              className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] mb-2"
            />
            <span className="block uppercase w-full text-center text-[20px] text-[#E3DAAC] font-joystix font-[900]">
              transaction pending
            </span>
          </>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#000000bd] h-screen w-full">
      <div
        className={clsx(
          "relative rounded-2xl transition-all transform w-full max-w-[500px] mx-auto max-sm:px-5"
        )}
      >
        {status === "loading" ? (
          <>
            <div className="w-16 h-16 mx-auto border-4 border-t-transparent border-[#b3f487] rounded-full animate-spin"></div>
          </>
        ) : (
          <div
            className={clsx(
              "relative max-sm:px-4 bg-[url('/images/bg-modal-status.svg')] w-full sm:min-h-[350px] bg-no-repeat bg-cover max-sm:bg-auto bg-center flex justify-center"
            )}
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute sm:top-5 sm:right-12 top-2 right-9 max-[480px]:right-2 cursor-pointer z-[999]"
              onClick={onClose}
            >
              <img
                src="/icons/close.svg"
                alt="close"
                className="w-[20px] h-[20px]"
              />
            </button>

            <div className="flex items-center justify-center flex-col md:py-8 py-4 relative">
              {/* WALLET ICON */}
              {renderStatus()}

              <Link href="#">
                <span className="block text-center font-azeret_mono text-[12px] mb-4 text-[#E3DAAC]">
                  View on explorer
                </span>
              </Link>

              <span className="flex w-full justify-center items-center gap-1 text-center font-azeret_mono font-medium text-base mb-4 text-[#E3DAAC]">
                Add UNI TO METAMASK
                <img
                  src="/icons/metamask.svg"
                  alt="coin"
                  className="w-[40px] h-[40px] sm:w-[45px] sm:h-[45px]"
                />
              </span>

              {/* BUTTON CLOSE BUTTOM */}
              <div className="w-full flex">
                <button
                  onClick={onClose}
                  className="bg-btn-other-connect-wallet py-0 max-h-[44px]! cursor-pointer relative w-full max-w-full flex items-center justify-center mx-auto"
                >
                  <span className="text-gradient-5 font-orbitron text-sm sm:text-base block text-center w-full font-[900]">
                    CLOSE
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalStatus;
