import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: Props) {
  return (
    <div className={cn('mx-auto max-w-6xl px-4 xl:max-w-7xl', className)}>
      {children}
    </div>
  );
}

export default Container;
