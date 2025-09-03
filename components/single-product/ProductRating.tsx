import React from "react";
import { FaStar } from "react-icons/fa";
import { fetchProductRating } from "@/utils/actions";

type Props = {
  productId: string;
};

async function ProductRating({ productId }: Props) {
  const { rating, count } = await fetchProductRating(productId);

  const className = "flex gap-x-1 items-center mt-2 mb-4";
  const countValue = `(${count}) reviews`;

  return (
    <span className={className}>
      <FaStar className="size-3" />
      {rating} {countValue}
    </span>
  );
}

export default ProductRating;
