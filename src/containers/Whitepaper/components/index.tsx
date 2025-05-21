"use client";
import React from "react";

import LazyImage from "@/components/LazyImage";

const Components = () => {
  return (
    <div className="w-full max-w-[500px] mx-auto mt-9 mb-5">
      <div className="w-full flex flex-col gap-4 px-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <LazyImage
            key={i}
            src={`/images/whitepaper/${i + 1}.png`}
            alt={`whitepaper-${i}`}
            width={1200}
            height={800}
            minHeightWrapper="600px"
          />
        ))}
      </div>
    </div>
  );
};

export default Components;
