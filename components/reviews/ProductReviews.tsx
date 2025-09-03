import React from "react";
import { fetchProductReviews } from "@/utils/actions";
import ReviewCard from "./ReviewCard";
import SectionTitle from "../global/SectionTitle";

type Props = {
  productId: string;
};

async function ProductReviews({ productId }: Props) {
  const reviews = await fetchProductReviews(productId);

  return (
    <div className="mt-16">
      <SectionTitle title="product reviews" />
      <div className="my-8 grid gap-8 lg:grid-cols-2">
        {reviews.length === 0 && (
          <p>No reviews have been added for this product yet.</p>
        )}
        {reviews.map((review) => {
          const { id, comment, rating, authorImageUrl, authorName } = review;
          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          };
          return <ReviewCard key={id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}

export default ProductReviews;
