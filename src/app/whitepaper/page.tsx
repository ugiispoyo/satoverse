import { Suspense } from "react";

import WhitepaperContainer from "@/containers/Whitepaper";

import SkeletonLoadingComponent from "@/components/SkeletonLoading";

export default function Whitepaper() {
  return (
    <Suspense fallback={<SkeletonLoadingComponent className="max-w-[700px] h-[500px] mx-auto" />}>
      <WhitepaperContainer />
    </Suspense>
  );
}
