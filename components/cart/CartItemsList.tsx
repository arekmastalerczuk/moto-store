import React from "react";
import { CartItemWithProduct } from "@/utils/types";
import { Card } from "@/components/ui/card";
import { FirstColumn, FourthColumn, SecondColumn } from "./CartItemColumns";
import ThirdColumn from "./ThirdColumn";

type Props = {
  cartItems: CartItemWithProduct[]; // to get cart items with product details
};

function CartItemsList({ cartItems }: Props) {
  return (
    <div>
      {cartItems.map((item) => {
        const { id, amount, product } = item;
        const { id: productId, name, company, price, image } = product;
        return (
          <Card
            key={id}
            className="mb-8 flex flex-col flex-wrap gap-x-4 gap-y-4 p-6 md:flex-row"
          >
            <div className="flex items-center gap-x-4 md:items-start">
              <FirstColumn image={image} name={name} />
              <SecondColumn
                productId={productId}
                name={name}
                company={company}
              />
            </div>
            <ThirdColumn id={id} quantity={amount} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}

export default CartItemsList;
