import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type Props = {
  defaultValue: number;
};

const name = "price";

function PriceInput({ defaultValue }: Props) {
  return (
    <div className="mb-2">
      <Label
        htmlFor={name}
        className="text-sm font-bold capitalize tracking-wide"
      >
        price ($)
      </Label>
      <Input
        id={name}
        name={name}
        type="number"
        min={0}
        defaultValue={defaultValue}
        required
      />
    </div>
  );
}

export default PriceInput;
