import React from "react";
import Link from "next/link";
import { deleteProductAction, fetchAdminProducts } from "@/utils/actions";
import EmptyList from "@/components/global/EmptyList";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/utils/format";
import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";

async function AdminProductsPage() {
  const products = await fetchAdminProducts();

  if (products.length === 0) return <EmptyList />;

  return (
    <section>
      <Table>
        <TableCaption className="capitalize">
          total products: {products.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">Product Name</TableHead>
            <TableHead className="font-bold">Company</TableHead>
            <TableHead className="font-bold">Price</TableHead>
            <TableHead className="font-bold">Edit / Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const { id: productId, name, company, price } = product;

            return (
              <TableRow key={productId}>
                <TableCell>
                  <Link
                    href={`/admin/products/${productId}`}
                    className="tracking-wide text-muted-foreground underline"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formatPrice(price)}</TableCell>
                <TableCell className="flex items-center gap-x-2">
                  <Link href={`/admin/products/${productId}/edit`}>
                    <IconButton action="edit" />
                  </Link>
                  <DeleteProduct productId={productId} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });

  return (
    <FormContainer action={deleteProduct}>
      <IconButton action="delete" />
    </FormContainer>
  );
}

export default AdminProductsPage;
