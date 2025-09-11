import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export enum Mode {
  SingleProduct = "singleProduct",
  CartItem = "cartItem",
}

type SelectProductAmountProps = {
  mode: Mode.SingleProduct;
  amount: number;
  setAmount: (value: number) => void;
};

type SelectCartItemAmountProps = {
  mode: Mode.CartItem;
  amount: number;
  setAmount: (value: number) => Promise<void>;
  isLoading: boolean;
};

function SelectProductAmount(
  props: SelectCartItemAmountProps | SelectProductAmountProps,
) {
  const { mode, amount, setAmount } = props;
  const isCartItem = mode === Mode.CartItem;

  return (
    <>
      <h4 className="mb-2 font-bold">Amount: </h4>
      <Select
        defaultValue={String(amount)}
        onValueChange={(value) => setAmount(Number(value))}
        disabled={isCartItem && props.isLoading}
      >
        <SelectTrigger className={isCartItem ? "w-[100px]" : "w-[150px]"}>
          <SelectValue placeholder={amount} />
          <SelectContent>
            {Array.from(
              { length: isCartItem ? amount + 10 : 10 },
              (_, index) => {
                const selectValue = String(index + 1);
                return (
                  <SelectItem key={selectValue} value={selectValue}>
                    {selectValue}
                  </SelectItem>
                );
              },
            )}
          </SelectContent>
        </SelectTrigger>
      </Select>
    </>
  );
}

export default SelectProductAmount;
