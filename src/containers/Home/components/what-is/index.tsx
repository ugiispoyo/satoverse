import React from "react";

type Props = {};

const WhatIs = (props: Props) => {
  return (
    <div className="w-full lg:bg-[url('/images/home/bg-whatis.svg')] lg:min-h-[350px] bg-[url('/images/sidebar-reward/bg-reward-mobile.svg')] max-lg:bg-no-repeat max-lg:max-w-[380px] max-lg:h-[550px] max-lg:bg-cover relative max-lg:flex max-lg:flex-col max-lg:mx-auto max-lg:px-[45px] max-lg:py-[30px] max-[380px]:p-0">
      <h1 className="font-joystix lg:text-3xl text-2xl lg:pt-12 lg:pl-12 text-[#B1F489]">
        What is <span className="text-[#00FFFF]">Satoverse</span>?
      </h1>
      <img
        src="/images/home/whatis-mobile.svg"
        alt="whatis"
        className="lg:hidden max-lg:mt-4 h-[150px]"
      />
      <div className="lg:ml-[358px] text-[#D4CA99] uppercase font-azeret_mono font-[500] text-xs mt-4 max-lg:w-full max-lg:mb-[25px] max:lg:overflow-hidden max-lg:overflow-y-scroll">
        <span className="text-[#00FFFF]">Satoverse</span> is the first Layer 2
        multi-chain memecoin built on Bitcoin, with a utility that unlocks
        faster, cheaper transactions.
        <br />
        <br />
        Bitcoin's slow speed, high costs, and massive energy demands have made
        it impossible for meme culture to thrive.
        <br />
        <br />
        <span className="text-[#00FFFF]">Satoverse</span> breaks these barriers
        with its fast, scalable Layer 2, unleashing memecoins on the biggest,
        most user-rich blockchain.
      </div>
    </div>
  );
};

export default WhatIs;
