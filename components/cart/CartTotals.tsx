import React from "react";
import { cn } from "@/lib/utils";
import { Cart } from "@prisma/client";
import { Card, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/utils/format";
import FormContainer from "@/components/form/FormContainer";
import { createOrderAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";

type Props = {
  cart: Cart;
};

function CartTotals({ cart }: Props) {
  const { cartTotal, shipping, tax, orderTotal } = cart;

  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="subtotal" amount={cartTotal} />
        <CartTotalRow label="tax" amount={tax} />
        <CartTotalRow label="shipping" amount={shipping} />
        <CardTitle className="mt-4">
          <CartTotalRow
            className="text-base tracking-wider"
            label="order total"
            amount={orderTotal}
            lastRow
          />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text="place order" className="mt-8 w-full" />
      </FormContainer>
    </div>
  );
}

function CartTotalRow({
  label,
  amount,
  lastRow,
  className,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
  className?: string;
}) {
  return (
    <>
      <p className={cn("flex justify-between text-sm", className)}>
        <span className="capitalize">{label}</span>
        <span>{formatPrice(amount)}</span>
      </p>
      {!lastRow && <Separator className="my-2" />}
    </>
  );
}

export default CartTotals;
