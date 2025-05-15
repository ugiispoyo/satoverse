import React from "react";

type Props = {};

const Reward = (props: Props) => {
  return (
    <div className="w-full relative flex">
      <img
        src="/images/bg-reward.svg"
        alt="Reward"
        className="w-full max-w-[470px] h-auto absolute left-[-20px] z-[10]"
      />

      {/* Sorry, just temporary using img content to be faster */}
      <div className="w-full flex mt-[70px] items-end justify-center">
        <img
          src={"/images/temporary-content-side-reward.svg"}
          alt="Temporary contente Reward"
          className="w-full max-w-[338px] h-auto z-[11] relative mb-5"
        />
      </div>
    </div>
  );
};

export default Reward;
