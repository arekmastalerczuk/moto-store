import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {
  rows?: number;
};

function LoadingTable({ rows = 5 }: Props) {
  const tableRows = Array.from({ length: rows }, (_, index) => (
    <div key={index} className="mb-4">
      <Skeleton className="h-10 w-full rounded" />
    </div>
  ));
  return <>{tableRows}</>;
}

export default LoadingTable;
