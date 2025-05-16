import React from "react";

const redImg = "/images/sidebar-reward/line-red.svg";
const whiteImg = "/images/sidebar-reward/line-white.svg";

export default function ProgressBlocks({
  progressPercent,
}: {
  progressPercent: number;
}) {
  const maxWidth = 206; // max width px
  const blockWidth = 5;
  const blockMargin = 2;
  const totalBlocks = Math.floor(maxWidth / (blockWidth + blockMargin));

  const redBlocksCount = Math.round((progressPercent / 100) * totalBlocks);
  const whiteBlocksCount = totalBlocks - redBlocksCount;

  return (
    <div className="flex items-center" style={{ width: maxWidth }}>
      {/* red */}
      {[...Array(redBlocksCount)].map((_, i) => (
        <img
          key={"red-" + i}
          src={redImg}
          alt="red block"
          className="inline-block"
          style={{ width: blockWidth, height: 20, marginRight: blockMargin }}
        />
      ))}

      {/* white */}
      {[...Array(whiteBlocksCount)].map((_, i) => (
        <img
          key={"white-" + i}
          src={whiteImg}
          alt="white block"
          className="inline-block"
          style={{ width: blockWidth, height: 20, marginRight: blockMargin }}
        />
      ))}
    </div>
  );
}
