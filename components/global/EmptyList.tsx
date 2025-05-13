import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  heading?: string;
  className?: string;
};

function EmptyList({ heading = 'No items found.', className }: Props) {
  return <h2 className={cn('text-xl', className)}>{heading}</h2>;
}

export default EmptyList;
