"use client";

import React from "react";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";

type Props = {
  name: string;
  label?: string;
  defaultChecked?: boolean;
  className?: string;
};

function CheckboxInput({
  name,
  label,
  defaultChecked = false,
  className,
}: Props) {
  return (
    <div className={cn("mb-2 flex items-center space-x-2", className)}>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
      <Label
        htmlFor={name}
        className="text-sm font-bold capitalize tracking-wide peer-disabled:cursor-not-allowed peer-disabled:opacity-60"
      >
        {label || name}
      </Label>
    </div>
  );
}

export default CheckboxInput;
