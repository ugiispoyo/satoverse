import { Suspense } from "react";

import FaqContainer from "@/containers/Faq";

import SkeletonLoadingComponent from "@/components/SkeletonLoading";

export default function Faq() {
  return (
    <Suspense fallback={<SkeletonLoadingComponent className="max-w-[700px] h-[500px] mx-auto" />}>
      <FaqContainer />
    </Suspense>
  );
}
