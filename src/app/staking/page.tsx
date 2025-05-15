import { Suspense } from "react";

import StakingContainer from "@/containers/Staking";

import SkeletonLoadingComponent from "@/components/SkeletonLoading";

export default function Staking() {
  return (
    <Suspense
      fallback={
        <SkeletonLoadingComponent className="max-w-[700px] h-[500px] mx-auto" />
      }
    >
      <StakingContainer />
    </Suspense>
  );
}
