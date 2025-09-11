"use client";

import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import SelectProductAmount, { Mode } from "./SelectProductAmount";
import { ProductSignInButton, SubmitButton } from "../form/Buttons";
import FormContainer from "../form/FormContainer";
import { addToCartAction } from "@/utils/actions";

type Props = {
  productId: string;
};

function AddToCart({ productId }: Props) {
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();

  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <SubmitButton text="add to cart" className="mt-4" />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
}

export default AddToCart;
