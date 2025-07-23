"use client";

import React, { useState } from "react";
import Image from "next/image";
import { type ActionFunction } from "@/utils/types";
import { Button } from "../ui/button";
import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";

type Props = {
  image: string;
  name: string;
  action: ActionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer({ image, name, action, text, children }: Props) {
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  return (
    <div className="mb-8">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="mb-4 size-[200px] rounded-md object-cover"
        priority
      />
      <Button
        variant="outline"
        size="sm"
        className="capitalize"
        onClick={() => setIsUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <div className="mt-4 max-w-md">
          <FormContainer action={action}>
            {children}
            <ImageInput />
            <SubmitButton text={text} size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}

export default ImageInputContainer;
