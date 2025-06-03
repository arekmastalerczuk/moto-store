import prisma from "@/utils/db";
import { redirect } from "next/navigation";

export const fetchFeaturedProducts = async () => {
  return await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  return await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const foundProduct = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!foundProduct) {
    return redirect("/products");
  }

  return foundProduct;
};
