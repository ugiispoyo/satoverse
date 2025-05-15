import React from "react";

type Props = {};

const WhatIs = (props: Props) => {
  return (
    <div className="w-full bg-[url('/images/home/bg-whatis.svg')] min-h-[350px] relative">
      <h1 className="font-joystix text-3xl pt-12 pl-12 text-[#B1F489]">
        What is <span className="text-[#00FFFF]">Satoverse</span>?
      </h1>
      <div className="ml-[358px] text-[#D4CA99] font-usuzi text-xs mt-4">
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
