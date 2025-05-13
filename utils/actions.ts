import prisma from '@/utils/db';

export const fetchFeaturedProducts = async () => {
  return await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
};

export const fetchAllProducts = async () => {
  return await prisma.product.findMany({
    orderBy: {
      createAt: 'desc',
    },
  });
};
