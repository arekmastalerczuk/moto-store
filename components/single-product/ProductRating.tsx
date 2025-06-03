import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  productId: string;
};

function ProductRating({ productId }: Props) {
  // temp values
  const rating = 4.6;
  const count = 16;

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
