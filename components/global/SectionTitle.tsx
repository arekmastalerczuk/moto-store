import React from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  className?: string;
};

function SectionTitle({ title, className }: Props) {
  return (
    <>
      <h2
        className={cn(
          'mb-8 text-3xl font-medium capitalize tracking-wider',
          className,
        )}
      >
        {title}
      </h2>
      <Separator />
    </>
  );
}

export default SectionTitle;
