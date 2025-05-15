import { Suspense } from "react";

import RoadmapContainer from "@/containers/Roadmap";

import SkeletonLoadingComponent from "@/components/SkeletonLoading";

export default function Roadmap() {
  return (
    <Suspense fallback={<SkeletonLoadingComponent className="max-w-[700px] h-[500px] mx-auto" />}>
      <RoadmapContainer />
    </Suspense>
  );
}
