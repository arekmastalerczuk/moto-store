import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  label?: string;
  defaultValue?: string;
  className?: string;
};

function TextAreaInput({ name, label, defaultValue = "", className }: Props) {
  return (
    <div className={cn("mb-2", className)}>
      <Label
        htmlFor={name}
        className="text-sm font-bold capitalize tracking-wide"
      >
        {label || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
      />
    </div>
  );
}

export default TextAreaInput;
