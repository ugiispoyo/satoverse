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

  // Check if className contains any class that starts with `h-`, `min-h-`, `w-`, `min-w-`, or `max-w-`
  const containsHeightClass = /\bh-\[|\bmin-h-\[/.test(className);
  const containsWidthClass = /\bw-\[|\bmin-w-\[|\bmax-w-\[/.test(className);

  // Remove `min-h-[100px]` from defaultStyle if `h-` or `min-h-` is present in className
  if (containsHeightClass) {
    defaultStyle = defaultStyle.replace(/min-h-\[\d+px\]/, "").trim();
  }

  // Remove `w-full` from defaultStyle if `w-`, `min-w-`, or `max-w-` is present in className
  if (containsWidthClass) {
    defaultStyle = defaultStyle.replace(/\bw-full\b/, "").trim();
  }

  const updateClassname = `${defaultStyle} ${className}`.trim();

  return <div className={updateClassname} {...props}></div>;
}
