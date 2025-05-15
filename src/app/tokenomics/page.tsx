import { Suspense } from "react";

import TokenomicsContainer from "@/containers/Tokenomics";

import SkeletonLoadingComponent from "@/components/SkeletonLoading";

export default function Tokenomics() {
  return (
    <Suspense fallback={<SkeletonLoadingComponent className="max-w-[700px] h-[500px] mx-auto" />}>
      <TokenomicsContainer />
    </Suspense>
  );
}
