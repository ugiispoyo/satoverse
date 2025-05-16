import React from "react";

const greenStripImg = "/images/sidebar-reward/bar-saking.svg";

export default function SakingProgress({
  progressPercent,
}: {
  progressPercent: number;
}) {
  const maxWidth = 272;
  const blockWidth = 20;
  const blockMargin = 1;

  const totalBlocks = Math.floor(maxWidth / (blockWidth + blockMargin));

  const activeBlocks = Math.round((progressPercent / 100) * totalBlocks);

  return (
    <div className="flex justify-start" style={{ width: maxWidth }}>
      {[...Array(activeBlocks)].map((_, i) => (
        <img
          key={i}
          src={greenStripImg}
          alt="green block"
          style={{
            width: blockWidth,
            height: "20px",
          }}
          draggable={false}
        />
      ))}
    </div>
  );
}
