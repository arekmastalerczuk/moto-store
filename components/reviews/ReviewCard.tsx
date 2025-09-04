import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comment from "./Comment";

type Props = {
  reviewInfo: {
    comment: string;
    rating: number;
    image: string;
    productId?: string;
    name: string;
  };
  children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: Props) {
  const { comment, rating, image, name, productId } = reviewInfo;

  const cardHeader = (
    <CardHeader>
      <div className="flex items-center">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="size-12 rounded-full"
        />
        <div className="ml-4">
          <h3 className="mb-2 text-sm font-bold capitalize">{name}</h3>
          <Rating rating={rating} />
        </div>
      </div>
    </CardHeader>
  );

  return (
    <Card className="relative">
      {productId ? (
        <Link href={`products/${productId}`}>{cardHeader}</Link>
      ) : (
        cardHeader
      )}
      <CardContent>
        <Comment comment={comment} />
      </CardContent>
      <div className="absolute right-4 top-4">{children}</div>
    </Card>
  );
}

export default ReviewCard;
