import React from "react";
import { Button } from "../ui/button";

type Props = {
  productId: string;
};

function AddToCart({ productId }: Props) {
  return (
    <Button size="lg" className="mt-8 capitalize">
      add to cart
    </Button>
  );
}

export default AddToCart;
