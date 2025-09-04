import React from "react";
import SectionTitle from "@/components/global/SectionTitle";
import { deleteReviewAction, fetchProductReviewsByUser } from "@/utils/actions";
import ReviewCard from "@/components/reviews/ReviewCard";
import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";

async function ReviewsPage() {
  const reviews = await fetchProductReviewsByUser();

  if (reviews.length === 0) {
    return (
      <>
        <SectionTitle title="your reviews" />
        <p className="mt-8">No reviews found.</p>
      </>
    );
  }
  return (
    <>
      <SectionTitle title="your reviews" />
      <section className="mt-8 grid gap-8 lg:grid-cols-2">
        {reviews.map((review) => {
          const { id, rating, comment, product } = review;
          const { name, image } = product;
          const reviewInfo = {
            comment,
            rating,
            name,
            image,
          };

          return (
            <ReviewCard key={id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}

type DeleteReviewProps = {
  reviewId: string;
};

function DeleteReview({ reviewId }: DeleteReviewProps) {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton action="delete" />
    </FormContainer>
  );
}

export default ReviewsPage;
