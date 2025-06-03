"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, useRouter } from "next/navigation";

function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || "",
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    replace(`/products/?${params.toString()}`);
  }, 500);

  const searchTerm = searchParams.get("search");

  useEffect(() => {
    if (!searchTerm) {
      setSearch("");
    }
  }, [searchTerm]);

  return (
    <Input
      type="search"
      placeholder="Search products..."
      className="max-w-xs dark:bg-muted"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        handleSearch(e.target.value);
      }}
    />
  );
}

export default NavSearch;
