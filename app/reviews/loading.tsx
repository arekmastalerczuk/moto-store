import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import SectionTitle from "@/components/global/SectionTitle";

function Loading() {
  return (
    <>
      <SectionTitle title="your reviews" />
      <section className="mt-4 grid gap-8 lg:grid-cols-2">
        <ReviewLoadingCard />
        <ReviewLoadingCard />
      </section>
    </>
  );
}

function ReviewLoadingCard() {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <Skeleton className="size-12 rounded-full" />
          <div className="ml-4">
            <Skeleton className="mb-2 h-4 w-32" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="mb-2 h-4 w-2/3" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
      <div className="absolute right-6 top-6">
        <Skeleton className="size-4" />
      </div>
    </Card>
  );
}

export default Loading;
