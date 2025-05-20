'use client';

import React from 'react';
import LoadingContainer from '@/components/global/LoadingContainer';
import SectionTitle from '@/components/global/SectionTitle';
import { Skeleton } from '@/components/ui/skeleton';
import { IoGridOutline, IoListOutline } from 'react-icons/io5';
import { Button } from '@/components/ui/button';

function loading() {
  return (
    <>
      <LoadingHeader />
      <LoadingContainer />
    </>
  );
}

export default loading;

function LoadingHeader() {
  return (
    <>
      <section>
        <SectionTitle title='Products' />
        <div className='mt-8 flex items-center justify-between'>
          <Skeleton className='h-6 w-36' />
          <div className='flex gap-x-4'>
            <Button size='icon' variant='default'>
              <IoGridOutline />
            </Button>
            <Button size='icon' variant='ghost'>
              <IoListOutline />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
