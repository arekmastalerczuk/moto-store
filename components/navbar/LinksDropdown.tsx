import React from "react";
import { FiMenu } from "react-icons/fi";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { loggedInLinks, loggedOutLinks } from "@/utils/links";
import UserIcon from "./UserIcon";
import SignOutLink from "./SignOutLink";

function LinksDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex max-w-24 gap-4">
          <FiMenu className="size-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32" align="start" sideOffset={14}>
        <SignedOut>
          {loggedOutLinks.map((link) => (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className="w-full">
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left font-bold tracking-wider">
                Login
              </button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {loggedInLinks.map((link) => (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className="w-full">
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="transition-opacity duration-300 focus:opacity-70 dark:bg-primary dark:text-primary-foreground">
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
