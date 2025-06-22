import React from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type Props = {
  name: string;
  label?: string;
  defaultValue?: string;
};

function TextAreaInput({ name, label, defaultValue = "" }: Props) {
  return (
    <div className="mb-2">
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
