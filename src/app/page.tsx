import { Suspense } from "react";

import HomeContainer from "@/containers/Home";

import SkeletonLoadingComponent from "@/components/SkeletonLoading";

export default function Home() {
  return (
    <Suspense fallback={<SkeletonLoadingComponent />}>
      <HomeContainer />
    </Suspense>
  );
}
