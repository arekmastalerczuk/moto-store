import React from "react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function LoadingContainer() {
  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
}

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-64 w-full md:h-48" />
        <Skeleton className="mx-auto mt-4 h-5 w-3/4" />
        <Skeleton className="mx-auto mt-4 h-4 w-1/3" />
        <Skeleton className="mx-auto mt-4 h-5 w-1/4" />
      </CardContent>
    </Card>
  );
}

export default LoadingContainer;
