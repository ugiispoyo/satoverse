import { Suspense } from "react";

import HowToBuyContainer from "@/containers/HowToBuy";

import SkeletonLoadingComponent from "@/components/SkeletonLoading";

export default function HowToBuy() {
  return (
    <Suspense fallback={<SkeletonLoadingComponent className="max-w-[700px] h-[500px] mx-auto" />}>
      <HowToBuyContainer />
    </Suspense>
  );
}
