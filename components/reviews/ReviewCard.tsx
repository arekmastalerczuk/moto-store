import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Rating from "./Rating";
import Comment from "./Comment";

type Props = {
  reviewInfo: {
    comment: string;
    rating: number;
    image: string;
    name: string;
  };
  children?: React.ReactNode;
};

function ReviewCard({ reviewInfo, children }: Props) {
  const { comment, rating, image, name } = reviewInfo;
  return (
    <Card className="relative">
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
      <CardContent>
        <Comment comment={comment} />
      </CardContent>
      <div className="absolute right-3 top-3">{children}</div>
    </Card>
  );
}

export default ReviewCard;
