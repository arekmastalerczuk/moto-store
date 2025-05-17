import React, { Suspense } from 'react';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import SectionTitle from '@/components/global/SectionTitle';
import LoadingContainer from '@/components/global/LoadingContainer';

function HomePage() {
  return (
    <>
      <Hero />
      <SectionTitle title='featured products' className='pt-12' />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}

export default HomePage;
