import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SectionTitle from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";

async function CartPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");

  const prevCart = await fetchOrCreateCart({ userId });
  const { currentCart, cartItems } = await updateCart(prevCart);

  if (currentCart.numItemsInCart === 0)
    return (
      <>
        <SectionTitle title="cart" />
        <p className="mt-8">Your cart is empty.</p>
      </>
    );

  return (
    <>
      <SectionTitle title="shopping cart" />
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className="lg:col-span-4">
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
}

export default CartPage;
