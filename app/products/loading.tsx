import React, { Suspense } from "react";
import ProductsLoadingHeader from "./ProductsLoadingHeader";
import LoadingContainer from "@/components/global/LoadingContainer";

export default function Loading() {
  return (
    <>
      <Suspense
        fallback={
          <div className="h-[72px] w-full">
            {/* Fallback in case ProductsLoadingHeader is slow */}
          </div>
        }
      >
        <ProductsLoadingHeader />
      </Suspense>
      <LoadingContainer />
    </>
  );
}
