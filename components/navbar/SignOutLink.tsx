"use client";

import React from "react";
import { toast } from "sonner";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

function SignOutLink() {
  const handleLogout = () => {
    toast.success("Logout successful");
  };

  return (
    <SignOutButton>
      <Link
        href="/"
        className="w-full text-left font-bold tracking-wider"
        onClick={handleLogout}
      >
        Logout
      </Link>
    </SignOutButton>
  );
}

export default SignOutLink;
