import Link from "next/link";
import React from "react";

type Props = {};

const History = (props: Props) => {
  return (
    <div className="w-full max-w-[832px] mx-auto flex items-center justify-start flex-col">
      <img
        src="/images/reward.svg"
        alt="reward"
        className="max-w-[132px] w-full"
      />
      <h1 className="text-[29px] font-joystix text-gradient-7 uppercase">
        Reward history
      </h1>
      <h2 className="text-[12px] font-extrabold font-orbitron text-[#E3DAAC] uppercase">
        Track your stacking rewards
      </h2>
      <div className="w-full flex gap-3 mt-5 mb-4">
        <div className="w-full font-orbitron max-w-[200px] bg-[url('/images/staking/bg-balence.svg')] bg-no-repeat bg-contain min-h-[102px] flex flex-col pl-7 pr-5 py-4 gap-1">
          <h3 className="text-[12px] text-[#E3DAAC] font-extrabold">
            stETH balance
          </h3>
          <span className="block text-[12px] text-white font-bold">
            Ξ 45.97220305
          </span>
          <span className="block text-[8px] text-[#C0C0C0] font-azeret_mono">
            $157,147.7
          </span>
        </div>
        <div className="w-full font-orbitron max-w-[200px] bg-[url('/images/staking/bg-earned.svg')] bg-no-repeat bg-contain min-h-[102px] flex flex-col pl-7 pr-5 py-4 gap-1">
          <h3 className="text-[12px] text-[#E3DAAC] font-extrabold">
            stETH earned
          </h3>
          <span className="block text-[12px] text-[#00FFFF] font-bold">
            Ξ 0.46543673
          </span>
          <span className="block text-[8px] text-[#C0C0C0] font-azeret_mono">
            $157,147.7
          </span>
        </div>
        <div className="w-full font-orbitron max-w-[200px] bg-[url('/images/staking/bg-apr.svg')] bg-no-repeat bg-contain min-h-[102px] flex flex-col pl-7 pr-5 py-4 gap-1">
          <h3 className="text-[12px] text-[#E3DAAC] font-extrabold">
            stETH earned
          </h3>
          <span className="block text-[12px] text-white font-bold">4.8%</span>
          <Link href="#">
            <span className="block text-[8px] text-[#C0C0C0] font-azeret_mono underline">
              More info
            </span>
          </Link>
        </div>
        <div className="w-full font-orbitron max-w-[200px] bg-[url('/images/staking/bg-earned.svg')] bg-no-repeat bg-contain min-h-[102px] flex flex-col pl-7 pr-5 py-4 gap-1">
          <h3 className="text-[12px] text-[#E3DAAC] font-extrabold">
            stETH price
          </h3>
          <span className="block text-[12px] text-white font-bold">
            $3,418.32
          </span>
          <span className="block text-[8px] text-[#C0C0C0] font-azeret_mono">
            0.99559781
          </span>
        </div>
      </div>

      <div className="w-full max-w-[540px] mx-auto flex flex-col justify-start items-start bg-[url('/images/staking/bg-table.svg')] bg-no-repeat bg-contain h-full min-h-[297px] py-3 px-5">
        <div className="w-full flex items-center">
          <img src="/icons/vip.svg" alt="vip" className="w-[11px] mr-2" />
          <h2 className="text-gradient-7 text-[20px] font-usuzi block w-full">
            Reward History
          </h2>
          <div className="w-full flex ml-[10px]">
            <img
              src="/icons/checkbox.svg"
              alt="checkbox"
              className="w-[9px] mr-1"
            />
            <span className="text-white font-orbitron text-[8px]">
              Historical stETH price
            </span>
          </div>
        </div>
        <div className="w-full px-2">
          <table className="w-full text-left border-separate border-spacing-0">
            <thead>
              <tr className="font-orbitron text-[8px] font-extrabold text-white">
                <th className="text-left py-2 border-y border-[#e3daac1e]">
                  Date
                </th>
                <th className="text-left py-2 border-y border-[#e3daac1e]">
                  Type
                </th>
                <th className="text-left py-2 border-y border-[#e3daac1e]">
                  Ξ Change
                </th>
                <th className="text-left py-2 border-y border-[#e3daac1e]">
                  $ Change
                </th>
                <th className="text-left py-2 border-y border-[#e3daac1e]">
                  APR
                </th>
                <th className="text-left py-2 border-y border-[#e3daac1e]">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[8px] font-azeret_mono">
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  04.10.2021
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  <span className="flex items-center">
                    <img
                      src="/icons/vip-line.svg"
                      alt="vip"
                      className="w-[9px] mr-1"
                    />
                    Reward
                  </span>
                </td>
                <td className="py-2 text-[#B1F489] border-b border-[#e3daac1e]">
                  Ξ 0.00631393
                </td>
                <td className="py-2 text-[#B1F489] border-b border-[#e3daac1e]">
                  $21.00
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  5%
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  45.97220305
                </td>
              </tr>
              <tr className="text-[8px] font-azeret_mono">
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  04.10.2021
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  <span className="flex items-center">
                    <img
                      src="/icons/vip-line.svg"
                      alt="vip"
                      className="w-[9px] mr-1"
                    />
                    Reward
                  </span>
                </td>
                <td className="py-2 text-[#B1F489] border-b border-[#e3daac1e]">
                  Ξ 0.00631393
                </td>
                <td className="py-2 text-[#B1F489] border-b border-[#e3daac1e]">
                  $21.00
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  5%
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  45.97220305
                </td>
              </tr>
              <tr className="text-[8px] font-azeret_mono">
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  04.10.2021
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  <span className="flex items-center">
                    <img
                      src="/icons/vip-line.svg"
                      alt="vip"
                      className="w-[9px] mr-1"
                    />
                    Reward
                  </span>
                </td>
                <td className="py-2 text-[#B1F489] border-b border-[#e3daac1e]">
                  Ξ 0.00631393
                </td>
                <td className="py-2 text-[#B1F489] border-b border-[#e3daac1e]">
                  $21.00
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  5%
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  45.97220305
                </td>
              </tr>
              <tr className="text-[8px] font-azeret_mono">
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  04.10.2021
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  <span className="flex items-center">
                    <img
                      src="/icons/vip-line.svg"
                      alt="vip"
                      className="w-[9px] mr-1"
                    />
                    Reward
                  </span>
                </td>
                <td className="py-2 text-[#B1F489] border-b border-[#e3daac1e]">
                  Ξ 0.00631393
                </td>
                <td className="py-2 text-[#B1F489] border-b border-[#e3daac1e]">
                  $21.00
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  5%
                </td>
                <td className="py-2 text-[#E3DAAC] border-b border-[#e3daac1e]">
                  45.97220305
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
