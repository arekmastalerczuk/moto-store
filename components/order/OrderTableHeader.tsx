import React from "react";
import { TableHead, TableHeader, TableRow } from "../ui/table";

type Props = {
  isForAdmin?: boolean;
};

function OrderTableHeader({ isForAdmin = false }: Props) {
  return (
    <TableHeader>
      <TableRow>
        {isForAdmin && <TableHead>Email</TableHead>}
        <TableHead>Total Products</TableHead>
        <TableHead>Order Total</TableHead>
        <TableHead>Tax</TableHead>
        <TableHead>Shipping</TableHead>
        <TableHead>Date</TableHead>
      </TableRow>
    </TableHeader>
  );
}

export default OrderTableHeader;
