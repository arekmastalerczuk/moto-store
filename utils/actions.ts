"use server";

import prisma from "@/utils/db";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { imageSchema, productSchema, validateWithZodSchema } from "./schemas";
import { deleteImage, uploadImage } from "./supabase";
import { revalidatePath } from "next/cache";

// helper function
const getAuthUser = async () => {
  const user = await currentUser();

  if (!user) redirect("/");

  return user;
};

const getAdminUser = async () => {
  const user = await getAuthUser();

  if (user.id !== process.env.ADMIN_USER_ID) redirect("/");

  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);

  return {
    message: error instanceof Error ? error.message : "There was an error",
  };
};

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
      company: "asc",
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

export const createProductAction = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData,
): Promise<{ message: string }> => {
  try {
    const user = await getAuthUser();

    const file = formData.get("image") as File;

    const rawData = Object.fromEntries(formData);
    const validatedProductFields = validateWithZodSchema(
      productSchema,
      rawData,
    );

    const validatedProductImage = validateWithZodSchema(imageSchema, {
      image: file,
    });

    const fullPath = await uploadImage(validatedProductImage.image);

    await prisma.product.create({
      data: {
        ...validatedProductFields,
        image: fullPath,
        clerkId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }

  redirect("/admin/products");
};

export const fetchAdminProducts = async () => {
  await getAdminUser();

  const products = await prisma.product.findMany({
    orderBy: {
      createAt: "desc",
    },
  });

  return products;
};

export const deleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState;

  await getAdminUser();

  try {
    const product = await prisma.product.delete({
      where: {
        id: productId,
      },
    });

    await deleteImage(product.image);

    revalidatePath("/admin/products");

    return {
      message: "Product removed successfully",
    };
  } catch (error) {
    return renderError(error);
  }
};
