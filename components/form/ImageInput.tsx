import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const name = "image";

function ImageInput() {
  return (
    <div className="mb-2">
      <Label
        htmlFor={name}
        className="text-sm font-bold capitalize tracking-wide"
      >
        image
      </Label>
      <Input id={name} name={name} type="file" accept="image/*" required />
    </div>
  );
}

export default ImageInput;
