import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  // DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

import { FiMenu } from "react-icons/fi";
import { navLinks } from "@/utils/links";
import Link from "next/link";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex max-w-24 gap-4">
          <FiMenu className="size-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32" align="start" sideOffset={14}>
        {navLinks.map((link) => (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href} className="w-full">
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
