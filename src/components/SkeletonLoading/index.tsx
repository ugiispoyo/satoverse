import { HTMLAttributes } from "react";

type T_SkeletonLoading = {
  className?: string;
};

export default function SkeletonLoading({
  className = "",
  ...props
}: T_SkeletonLoading & HTMLAttributes<HTMLDivElement>) {
  let defaultStyle =
    "animate-pulse space-x-4 w-full min-h-[100px] bg-[#0f97a31f]";

  // Check if the className of the props contains height, width, and background
  const containsHeightClass = /\bh-\[|\bmin-h-\[/.test(className);
  const containsWidthClass = /\bw-\[|\bmin-w-\[|\bmax-w-\[/.test(className);
  const containsBackgroundClass = /\bbg-[^\s]+/.test(className);

  // Remove min-h if className props already have height/min-height
  if (containsHeightClass) {
    defaultStyle = defaultStyle.replace(/min-h-\[\d+px\]/, "").trim();
  }

  // Remove w-full if className props already have width/min-width/max-width
  if (containsWidthClass) {
    defaultStyle = defaultStyle.replace(/\bw-full\b/, "").trim();
  }

  // Remove bg-[#0f97a31f] if className props already have bg-*
  if (containsBackgroundClass) {
    defaultStyle = defaultStyle.replace(/bg-\[#0f97a31f\]/, "").trim();
  }

  const updateClassname = `${defaultStyle} ${className}`.trim();

  return <div className={updateClassname} {...props}></div>;
}
