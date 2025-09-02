import { z, ZodSchema } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Product name must be at least 3 chars length",
    })
    .max(100, {
      message: "Product name must be at most 100 chars length",
    }),
  company: z
    .string()
    .min(3, {
      message: "Company name must be at least 3 chars length",
    })
    .max(50, {
      message: "Company name must be at most 50 chars length",
    }),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message:
        "Product description must be at least 10 words and at most 1000 words",
    },
  ),
  price: z.coerce
    .number()
    .int()
    .min(0, {
      message: "Price must be at least 0 $",
    })
    .max(100000, {
      message: "Price must be at most 100000 $",
    }),
  featured: z.coerce.boolean(),
});

export const imageSchema = z.object({
  image: validateImageFile(),
});

function validateImageFile() {
  // max 5 MB
  const MAX_FILE_SIZE_MB = 5;
  const maxUploadSize = 1024 * 1024 * MAX_FILE_SIZE_MB;
  const acceptedFileTypes = ["image/"];

  return z
    .instanceof(File)
    .refine((file) => {
      return file && file.size <= maxUploadSize;
    }, `File size must be less than ${MAX_FILE_SIZE_MB} MB`)
    .refine((file) => {
      return (
        file && acceptedFileTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
}

export const reviewSchema = z.object({
  productId: z.string().refine((value) => value !== "", {
    message: "Product ID cannot be empty",
  }),
  authorName: z.string().refine((value) => value !== "", {
    message: "Author name cannot be empty",
  }),
  authorImageUrl: z.string().refine((value) => value !== "", {
    message: "Author image cannot be empty",
  }),
  rating: z.coerce
    .number()
    .int()
    .min(1, { message: "Rating must be at least 1" })
    .max(5, { message: "Rating must be at most 5" }),
  comment: z
    .string()
    .min(10, { message: "Comment must be at least 10 characters long" })
    .max(1000, { message: "Comment must be at most 1000 characters long" }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown,
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);

    throw new Error(errors.join(", "));
  }

  return result.data;
}
