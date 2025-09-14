"use client";

import React, { useState } from "react";
import SelectProductAmount, {
  Mode,
} from "@/components/single-product/SelectProductAmount";
import FormContainer from "@/components/form/FormContainer";
import { removeCartItemAction } from "@/utils/actions";
import { SubmitButton } from "../form/Buttons";

type Props = {
  id: string;
  quantity: number;
};

function ThirdColumn({ id, quantity }: Props) {
  const [amount, setAmount] = useState(quantity);
  const handleAmountChange = async (value: number) => {
    setAmount(value);
  };

  return (
    <div>
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={false}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4" text="remove" />
      </FormContainer>
    </div>
  );
}

export default ThirdColumn;
