import React from 'react';
import Image from 'next/image';
import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct } from '@/utils/actions';
import { formatPrice } from '@/utils/format';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import ProductRating from '@/components/single-product/ProductRating';
import AddToCart from '@/components/single-product/AddToCart';

type Props = {
  params: {
    id: string;
  };
};

async function ProductDetailsPage({ params }: Props) {
  const product = await fetchSingleProduct(params.id);

  const { name, company, description, price, image } = product;
  const dollarsAmount = formatPrice(price);

  return (
    <section>
      <BreadCrumbs name={name} />
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-12'>
        {/* IMAGE */}
        <div className='relative h-80 lg:h-full'>
          <Image
            src={image}
            alt={name}
            fill
            sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
            priority
            className='w-full rounded-lg object-cover'
          />
        </div>
        {/* PRODUCT DETAILS */}
        <div>
          <div className='flex items-center gap-x-8'>
            <h2 className='text-3xl font-bold capitalize'>{name}</h2>
            <FavoriteToggleButton productId={params.id} />
          </div>
          <ProductRating productId={params.id} />
          <h3 className='mt-2 text-xl'>{company}</h3>
          <p className='mt-2 inline-block rounded-md bg-muted px-4 py-2 text-2xl font-thin'>
            {dollarsAmount}
          </p>
          <p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
}

export default ProductDetailsPage;
