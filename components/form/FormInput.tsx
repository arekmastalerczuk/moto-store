import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type Props = {
  name: string;
  type?: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

function FormInput({
  name,
  type = "text",
  label,
  defaultValue = "",
  placeholder = "",
}: Props) {
  return (
    <div className="mb-2">
      <Label
        htmlFor={name}
        className="text-sm font-bold capitalize tracking-wide"
      >
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default FormInput;
