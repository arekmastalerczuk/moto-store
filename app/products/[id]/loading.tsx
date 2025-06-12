import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Loading() {
  return (
    <section className="w-full">
      <Skeleton className="h-4 w-1/5" />
      <div className="mt-6 grid w-full gap-y-8 lg:grid-cols-2 lg:gap-x-12">
        <Skeleton className="h-80 lg:h-full" />
        <div>
          <div className="flex items-center gap-x-8">
            <Skeleton className="h-9 w-1/6" />
            <Skeleton className="size-9" />
          </div>
          <Skeleton className="mt-4 h-4 w-1/6" />
          <Skeleton className="mt-6 h-4 w-1/6" />
          <Skeleton className="mt-2 h-9 w-1/4 rounded-md" />
          <Skeleton className="mt-6 h-60 w-full" />
          <Skeleton className="mt-6 h-8 w-1/4" />
        </div>
      </div>
    </section>
  );
}

export default Loading;
