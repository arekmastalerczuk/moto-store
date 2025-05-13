import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';
import { Product } from '@prisma/client';
import { formatPrice } from '@/utils/format';
import FavoriteToggleButton from './FavoriteToggleButton';

type Props = {
  product: Product;
};

function SingleGridProduct({ product }: Props) {
  const { id, name, image, price } = product;
  const dollarsAmount = formatPrice(price);

  return (
    <article className='group relative'>
      <Link href={`/products/${id}`}>
        <Card className='transform transition-shadow duration-500 group-hover:shadow-xl'>
          <CardContent className='p-4'>
            <div className='relative h-64 overflow-hidden rounded md:h-48'>
              <Image
                src={image}
                alt={name}
                fill
                sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                priority
                className='w-full transform rounded object-cover transition-transform duration-300 group-hover:scale-110'
              />
            </div>
            <div className='mt-4 text-center'>
              <h2 className='text-lg capitalize'>{name}</h2>
              <p className='mt-2 text-muted-foreground'>{dollarsAmount}</p>
            </div>
          </CardContent>
        </Card>
      </Link>
      <div className='absolute right-6 top-6 z-10'>
        <FavoriteToggleButton productId={id} />
      </div>
    </article>
  );
}

export default SingleGridProduct;
