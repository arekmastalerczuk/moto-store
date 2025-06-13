"use client";

import { Button } from "@/components/ui/button";
import { adminLinks } from "@/utils/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside>
      {adminLinks.map((link) => {
        const isActive = link.href === pathname;

        return (
          <Button
            asChild
            key={link.href}
            variant={isActive ? "default" : "ghost"}
            className={`mb-2 w-full capitalize lg:justify-start ${isActive && "font-bold tracking-widest"}`}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
