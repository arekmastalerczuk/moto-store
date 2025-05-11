import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';

async function CartButton() {
  // TODO: dynamic numItemsInCart
  const numItemsInCart = 2;

  return (
    <Button
      variant='outline'
      size='icon'
      className='relative flex items-center justify-center'
      asChild
    >
      <Link href='/cart'>
        <FiShoppingCart />
        {numItemsInCart > 0 && (
          <span className='absolute -right-3 -top-3 flex size-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground'>
            {numItemsInCart}
          </span>
        )}
      </Link>
    </Button>
  );
}

export default CartButton;
