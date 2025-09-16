import React from "react";
import SectionTitle from "@/components/global/SectionTitle";
import { Table, TableBody, TableCaption } from "@/components/ui/table";
import { fetchUserOrders } from "@/utils/actions";
import OrderTableHeader from "@/components/order/OrderTableHeader";
import OrderInfo from "@/components/order/OrderInfo";

async function OrdersPage() {
  const orders = await fetchUserOrders();

  if (orders.length === 0) {
    return (
      <>
        <SectionTitle title="your orders" />
        <p className="mt-8">No orders found.</p>
      </>
    );
  }

  return (
    <>
      <SectionTitle title="your orders" />
      <Table>
        <TableCaption>Total Orders: {orders.length}</TableCaption>
        <OrderTableHeader />
        <TableBody>
          {orders.map((order) => (
            <OrderInfo key={order.id} order={order} />
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default OrdersPage;
