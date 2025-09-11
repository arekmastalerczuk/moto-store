"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import { RiLoader5Fill } from "react-icons/ri";
import { ReloadIcon } from "@radix-ui/react-icons";
import { GrEdit } from "react-icons/gr";
import { FaHeart, FaRegHeart, FaTrash } from "react-icons/fa";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

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

type ActionType = "edit" | "delete";

export function IconButton({ action }: { action: ActionType }) {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (action) {
      case "edit":
        return <GrEdit />;
      case "delete":
        return <FaTrash />;
      default:
        const never: never = action;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="cursor-pointer p-2"
      disabled={pending}
    >
      {pending ? <ReloadIcon className="animate-spin" /> : renderIcon()}
    </Button>
  );
}

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="cursor-pointer p-2"
        asChild
      >
        <span>
          <FaRegHeart />
        </span>
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className="cursor-pointer p-2"
      disabled={pending}
    >
      {pending ? (
        <ReloadIcon className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};

export const ProductSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button type="button" className="mt-8 capitalize">
        sign in
      </Button>
    </SignInButton>
  );
};
