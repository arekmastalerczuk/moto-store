import React from 'react';
import { Product } from '@prisma/client';
import SingleListProduct from './SingleListProduct';

type Props = {
  products: Product[];
};

function ProductsList({ products }: Props) {
  return (
    <div className='flex flex-col gap-y-4 pt-12'>
      {products.map((product) => {
        return <SingleListProduct key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductsList;
