import React from 'react';
import { Separator } from '@/components/ui/separator';

type Props = {
  title: string;
};

function SectionTitle({ title }: Props) {
  return (
    <>
      <h2 className='mb-8 text-3xl font-medium capitalize tracking-wider'>
        {title}
      </h2>
      <Separator />
    </>
  );
}

export default SectionTitle;
