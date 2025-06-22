"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { RiLoader5Fill } from "react-icons/ri";
import { cn } from "@/lib/utils";

type BtnSize = "default" | "sm" | "lg";

type Props = {
  className?: string;
  text?: string;
  size?: BtnSize;
};

export function SubmitButton({
  className,
  text = "submit",
  size = "lg",
}: Props) {
  const { pending } = useFormStatus();
  return (
    <Button
      className={cn("capitalize", className)}
      size={size}
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <RiLoader5Fill className="mr-2 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
