import React from "react";
import { Order } from "@prisma/client";
import { TableCell, TableRow } from "../ui/table";
import { formatDate, formatPrice } from "@/utils/format";

type Props = {
  order: Order;
  isForAdmin?: boolean;
};

function OrderInfo({ order, isForAdmin = false }: Props) {
  const { email, products, orderTotal, tax, shipping, createdAt } = order;
  return (
    <TableRow>
      {isForAdmin && <TableCell>{email}</TableCell>}
      <TableCell>{products}</TableCell>
      <TableCell>{formatPrice(orderTotal)}</TableCell>
      <TableCell>{formatPrice(tax)}</TableCell>
      <TableCell>{formatPrice(shipping)}</TableCell>
      <TableCell>{formatDate(createdAt)}</TableCell>
    </TableRow>
  );
}

export default OrderInfo;
