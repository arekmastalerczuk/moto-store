import React from "react";
// import { Product } from '@prisma/client';
import { Product } from "@/lib/generated/prisma";
import SingleGridProduct from "./SingleGridProduct";

type Props = {
  products: Product[];
};

function ProductsGrid({ products }: Props) {
  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        return <SingleGridProduct key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductsGrid;
