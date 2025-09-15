"use client";

import React, { useState } from "react";
import SelectProductAmount, {
  Mode,
} from "@/components/single-product/SelectProductAmount";
import FormContainer from "@/components/form/FormContainer";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
import { SubmitButton } from "../form/Buttons";
import { toast } from "sonner";

type Props = {
  id: string;
  quantity: number;
};

function ThirdColumn({ id, quantity }: Props) {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);

  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast.info("Calculating...");
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });
    setAmount(value);
    toast(result.message);
    setIsLoading(false);
  };

  return (
    <div>
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4" text="remove" />
      </FormContainer>
    </div>
  );
}

export default ThirdColumn;
