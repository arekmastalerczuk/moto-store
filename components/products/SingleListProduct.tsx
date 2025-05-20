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

function SingleListProduct({ product }: Props) {
  const { id, name, company, image, price } = product;
  const dollarsAmount = formatPrice(price);

  return (
    <article className='group relative'>
      <Link href={`/products/${id}`}>
        <Card className='transform transition-shadow duration-500 group-hover:shadow-xl'>
          <CardContent className='grid p-8 md:grid-cols-3'>
            <div className='relative h-64 overflow-hidden rounded md:h-48 md:w-48'>
              <Image
                src={image}
                alt={name}
                fill
                sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
                priority
                className='w-full transform rounded object-cover transition-transform duration-300 group-hover:scale-110'
              />
            </div>
            <div className='mt-4 text-center md:text-left'>
              <h2 className='text-lg capitalize md:text-xl'>{name}</h2>
              <h3 className='text-muted-foreground md:text-lg'>{company}</h3>
            </div>
            <p className='mt-4 text-center text-muted-foreground md:ml-auto md:text-xl'>
              {dollarsAmount}
            </p>
          </CardContent>
        </Card>
      </Link>
      <div className='absolute bottom-8 right-8 z-10'>
        <FavoriteToggleButton productId={id} />
      </div>
    </article>
  );
}

export default SingleListProduct;
