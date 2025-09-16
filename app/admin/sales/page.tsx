import React from "react";
import { fetchAllOrdersForAdmin } from "@/utils/actions";
import SectionTitle from "@/components/global/SectionTitle";
import { Table, TableBody, TableCaption } from "@/components/ui/table";
import OrderInfo from "@/components/order/OrderInfo";
import OrderTableHeader from "@/components/order/OrderTableHeader";

async function SalesPage() {
  const orders = await fetchAllOrdersForAdmin();

  if (orders.length === 0) {
    return (
      <>
        <SectionTitle title="sales" />
        <p className="mt-8">No orders have been placed yet.</p>
      </>
    );
  }

  return (
    <>
      <SectionTitle title="sales" />
      <Table>
        <TableCaption>Total orders: {orders.length}</TableCaption>
        <OrderTableHeader isForAdmin />
        <TableBody>
          {orders.map((order) => (
            <OrderInfo key={order.id} order={order} isForAdmin />
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default SalesPage;
