"use client";

import { useSearchParams } from "next/navigation";
import { IoGridOutline, IoListOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/global/SectionTitle";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsLoadingHeader() {
  const params = useSearchParams();
  const layout = params.get("layout") || "grid";

  return (
    <section>
      <SectionTitle title="Products" />
      <div className="mt-8 flex items-center justify-between">
        <Skeleton className="h-6 w-36" />
        <div className="flex gap-x-4">
          <Button size="icon" variant={layout === "grid" ? "default" : "ghost"}>
            <IoGridOutline />
          </Button>
          <Button size="icon" variant={layout === "list" ? "default" : "ghost"}>
            <IoListOutline />
          </Button>
        </div>
      </div>
    </section>
  );
}
