import React from "react";

type Props = {};

const User = (props: Props) => {
  return (
    <div className="w-full flex max-w-[220px] h-[40px] justify-end gap-1 items-center">
      <img
        src="/icons/file-history.svg"
        alt="file history"
        className="w-[32px] h-[32px] object-contain"
      />
      <div className="bg-[url(/images/staking/bg-user.svg)] bg-cover bg-no-repeat w-full h-full flex items-center justify-between">
        <div className="flex ml-2">
          <img
            src="/icons/eth.svg"
            alt="eth icons"
            className="w-auto h-[16px] object-contain"
          />
          <span className="text-white font-orbitron font-semibold text-sm ml-1">
            0.5408 ETH
          </span>
        </div>
        <img
          src="/images/staking/user.png"
          alt="user"
          className="w-auto h-[40px] object-contain ml-2 rounded-tr-lg rounded-bl-md"
        />
      </div>
    </div>
  );
};
export default User;
