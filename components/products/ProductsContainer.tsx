import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';
import { fetchAllProducts } from '@/utils/actions';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import SectionTitle from '../global/SectionTitle';

type Props = {
  layout: string;
  search: string;
};

async function ProductsContainer({ layout, search }: Props) {
  const products = await fetchAllProducts();
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : '';

  return (
    <>
      {/* HEADER */}
      <section>
        <SectionTitle title='Products' />
        <div className='mt-8 flex items-center justify-between'>
          <h3>
            {totalProducts === 0
              ? 'No products found'
              : `${totalProducts} products found`}
          </h3>
          <div className='flex gap-x-4'>
            <Button
              size='icon'
              variant={layout === 'grid' ? 'default' : 'ghost'}
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}`}>
                <IoGridOutline />
              </Link>
            </Button>
            <Button
              size='icon'
              variant={layout === 'list' ? 'default' : 'ghost'}
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}`}>
                <IoListOutline />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 && (
          <p className='mt-12 text-2xl font-bold'>
            Sorry, no products matched your search
          </p>
        )}
        {totalProducts > 0 &&
          (layout === 'grid' ? (
            <ProductsGrid products={products} />
          ) : (
            <ProductsList products={products} />
          ))}
      </div>
    </>
  );
}

export default ProductsContainer;
