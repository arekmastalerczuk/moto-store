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
import { auth } from "@clerk/nextjs/server";

async function LinksDropdown() {
  const user = await auth();
  const isAdmin = user?.userId === process.env.ADMIN_USER_ID;

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
              <Link href={link.href} className="w-full capitalize">
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="transition-colors duration-300 focus:bg-primary/30 dark:bg-primary/70 dark:focus:bg-primary/50">
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
          {loggedInLinks.map((link) => {
            if (link.label === "dashboard" && !isAdmin) return;

            return (
              <DropdownMenuItem key={link.href}>
                <Link href={link.href} className="w-full capitalize">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="transition-colors duration-300 focus:bg-primary/30 dark:bg-primary/70 dark:focus:bg-primary/50">
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LinksDropdown;
