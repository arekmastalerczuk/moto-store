import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

type Props = {
  rating: number;
};

function Rating({ rating }: Props) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index + 1 <= rating;
  });
  return (
    <div className="flex items-center gap-x-2">
      {stars.map((starIsFilled, index) => {
        const className = `size-3 ${starIsFilled ? "text-primary" : "text-gray-400"} `;
        return starIsFilled ? (
          <FaStar className={className} key={index} />
        ) : (
          <FaRegStar className={className} key={index} />
        );
      })}
    </div>
  );
}

export default Rating;
